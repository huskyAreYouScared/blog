# JSBridge小记

## 原理图
![JSBridge和Native的交互原理](https://imgkr.cn-bj.ufileos.com/edcae1d2-2bb7-44ae-b7a3-43a6cb2e544e.png)

## web调用native
### JSBridge ：拦截 URL Schema
* 原理图
![拦截 URL Schema原理图](https://static01.imgkr.com/temp/6f37c1dc40554150a364817acd6e7088.png)
* http请求格式
```
<protocol>://<domain>/<path>?<query>
```
* jsbridge请求格式
```
jsbridge://<method>?<params>

```
* jsbridge://showName?type=husky&age=2
* 优缺点
  * 兼容性好
  * 不直观，URL长度有限制
#### show me the code
* 这里我们通过`window.alert()`将我们约定的协议（这里我们用jsbridge）发送给`Native`
* Native可以拿到我们弹窗中的信息，可以决定收到信息后，在执行其他逻辑
```js
function showNativeDialog(){
  window.alert('jsbridge://showNativeDialog?text=huskyAreYouScared')
}
```
* Native部分代码
* 我们重写onJsAlert来实现信息的接受
```java
// MainActivity.java
  webView.setWebChromeClient(new WebChromeClient(){
      @Override
      public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
          if(!message.startsWith("jsbridge://")){ // 这里判断是不是以我们约定好的协议进行调用的
              return super.onJsAlert(view, url, message, result);
          }
          String str = message.substring(message.indexOf("=")+1);// 这里拿到参数，简单实现
          new AlertDialog.Builder(this).setMessage(str).create().show(); // 调用原生的dialog
          result.confirm();
          return true;
      }
  });
```
* 拿到信息之后，其他逻辑就被native端接管了
### JSBridge ：注入API
* 原理图
![JSBridge ：注入API 原理图](https://static01.imgkr.com/temp/3345fd5e23044d429fa9a77ac6cb1361.png)
* 优缺点
 * 优点：简单直观
 * 缺点：有兼容性问题（Android 4.2+）
#### show me the code
* 首先我们准备需要注入的方法
```java
// MainActivity.java
  class NativeBridge{
        private Context ctx;
        NativeBridge(Context ctx){
            this.ctx = ctx;
        }
        @JavascriptInterface  // 这个注解一定要加
        public void showNativeDialog(String text){
            new AlertDialog.Builder(ctx).setMessage(text).create().show();
        }
    }
```
* 向window对象注入JS方法
```java
// MainActivity.java
  webView.addJavascriptInterface(new NativeBridge(this),"NativeBridge"); 
```
* 这里定义完成后，在`web`端就可以在`window`上找到`NativeBridge`的对象
* 接下来我们写一下web端的代码
```js
function showNativeDialog () {
  window.NativeBridge.showNativeDialog('husky')
},
```


## native调用web
* 直接上代码
#### show me the code
* `js`代码准备，将`showWebDialog`挂载到`window`上
```js
  window.showWebDialog = text => window.alert(text)
```
* 我们起一个本地服务，我这里端口为`8080`，`vue`创建的项目启动默认端口
* native端
:::tip
以Android为例,这里只写了主要逻辑，声明变量和视图绑定代码忽略
:::
* webview加载上面启动的本地服务
```java
// MainActivity.java
  webView.loadUrl("http://192.168.1.104:8080/?timestamp"+new Date().getTime()); // 加时间戳防止缓存
  webView.getSettings().setJavaScriptEnabled(true); // 可以执行JS脚本
  webView.setWebChromeClient(new WebChromeClient()); // WebChromeClient是辅助WebView处理Javascript的对话框
```
* 通过button来触发事件，通过webview来执行JS代码
```java
// MainActivity.java
  showBtn.setOnClickListener(new View.OnClickListener(){
      @Override
      public void onClick(View view){
          String inputValue = 'husky are yu scared';
          String jsCode = String.format("window.showWebDialog('%s')", inputValue);
          webView.evaluateJavascript(jsCode,null);
      }
  });
```
* 通过以上代码，就可以简单的

## 两次单项调用实现回调
### 实现web端调用native的回调
* 两次单项调用，指的是 `web` 调用 `native` ，然后 `native` 在调用 `web`
* 原理图

![通过两侧单项调用实现回调原理图](https://static01.imgkr.com/temp/7cef60f7dc60495b9cefe44141d3e234.png)
#### show me the code
* 为了更好的统一管理我们先定义一个JSSDK
```js
  window.callbackMap = {}
  window.callbackId = 1
  window.JSSDK = {
    getNativeMessage (callback) {
      const callbackId = window.callbackId++
      window.callbackMap[callbackId] = callback
      window.NativeBridge.getNativeMessage(callbackId)
    },
    showMessage (callbackId, value) {
      if (window.callbackMap[callbackId]) {
        window.callbackMap[callbackId](value)
      }
    }
  }
```
* web端执行刚才定义的方法,并注册回调
```js
  window.JSSDK.getNativeMessage(function (info) {
    window.alert(info)
  })
```

* 接下来写`native`端,注入`getNativeMessage`方法到`NativeBridge`对象中
```java
// MainActivity.java
webView.addJavascriptInterface(new NativeBridge(this),"NativeBridge");

class NativeBridge{
  private Context ctx;
  NativeBridge(Context ctx){
      this.ctx = ctx;
  }

  @JavascriptInterface
  public void getNativeMessage(int callbackId){
    final MainActivity mainActivity = (MainActivity) ctx;
    final String jsCode = String.format("window.JSSDK.showMessage(%s, '%s')", callbackId,"husky callback");
    mainActivity.runOnUiThread(new Runnable() {
        @Override
        public void run() {
            mainActivity.webView.evaluateJavascript(jsCode,null);
        }
    });
  }
}
```

### 实现native端调用web的回调
* 其实和实现`web`端调用`native`的回调思想一致，只是执行的地方对调了
* 两次单项调用，指的是 `native` 调用 `web` ，然后 `web` 在调用 `native`
* 原理图
![通过两侧单项调用实现回调原理图](https://static01.imgkr.com/temp/08c76830d3544da2b3bf5bf38b43b707.png)
:::tip
注意这里和上面的原理图，webview和native换了位置
:::
#### show me the code
* 因为这里是native调用web，所以，保存回调和接受回调，应该在native来定义
* 首先我们在native定义一个NativeSDK
```java
// MainActivity.java

// 定义回调接口
interface Callback{
  void invoke(String value);
}

class NativeSDK{
  private Context ctx;
  // 回调函数的Key
  private int id = 1;
  // 用来存储回调
  private Map<Integer,Callback> callbackMap = new HashMap();
  NativeSDK(Context ctx){
      this.ctx = ctx;
  }
  // 定义执行web端的方法
  void getWebMessageInfo(Callback callback){
      int callbackId = id++;
      callbackMap.put(callbackId,callback);
      final String jsCode = String.format("window.JSSDK.getWebMessageInfo(%s)", callbackId);
      self.runOnUiThread(new Runnable() {
          @Override
          public void run() {
              self.webView.evaluateJavascript(jsCode,null);
          }
      });
  }
  // 定义回调函数
  void showMessage(int callbackId,String value){
      if(callbackMap.containsKey(callbackId)){
          callbackMap.get(callbackId).invoke(value);
      }
  }
}
```
* 定义调用web端的bridge构造函数
```java
// MainActivity.java
webView.addJavascriptInterface(new NativeBridge(this),"NativeBridge");


class NativeBridge{
  private Context ctx;
  NativeBridge(Context ctx){
      this.ctx = ctx;
  }
  @JavascriptInterface
  public void showMessage(int callbackId,String text){
      nativeSDK.showMessage(callbackId,text);
  }
}
```

* 定义好`nativeSDK`和`bridge`，点击事件执行`getWebMessageInfo`
```java
  showBtn.setOnClickListener(new View.OnClickListener(){
    @Override
    public void onClick(View view){
      // 执行nativeSDK中定义好的getWebMessageInfo，并设置回调函数
      nativeSDK.getWebMessageInfo(new Callback() {
        @Override
        public void invoke(String value) {
            new AlertDialog.Builder(self).setMessage("接受web的回调"+value).create().show();
        }
      });
    }
  });
```
* 接下来在`web`端定义`getWebMessageInfo`方法
```js
window.JSSDK = {
  getWebMessageInfo (callbackId) {
    // 调用native端注入的showMessage方法
    window.NativeBridge.showMessage(callbackId, 'husky web info')
  }
}
```
## DSBridge-android
* GitHub仓库地址[传送门](https://github.com/wendux/DSBridge-Android)

### web调用native
* 首先需要在web端安装dsbridge插件
```bash
  npm install dsbridge@3.1.3
```
* 在需要用的地方引入该插件
```js
import dsBridge from 'dsbridge'
```
* 在web端的点击事件中触发调用native的方法
```js
// 点击事件调用send触发该事件，调用原生getNativeMessage方法，并提供回调函数
function send () {
  dsBridge.call('getNativeMessage', '', value => {
    window.alert(value)
  })
}
```
* 在native端需要几点需要改变
* 1.在build.gradle(Project:xxx)中的allprojects加入以下内容
```java
allprojects {
    repositories {
        // ...
+        maven { url 'https://jitpack.io' }
    }
}
```
* 2.在build.gradle(Module:xxx)dependencies加入以下内容
```java
dependencies {
    // ...
    implementation 'com.github.wendux:DSBridge-Android:3.0-SNAPSHOT'
}
```
* 3.将activity_xml文件中的webview换成下面这个方法
```xml
<wendu.dsbridge.DWebView
  android:id="@+id/webView"
  android:layout_width="match_parent"
  android:layout_height="0dp"
  android:layout_weight="1" />
```
* 4.将声明webview的类型换成DWebView，并导入相应的包
```java
- private WebView webView;
+ private DWebView webView;
```
* 5.通过addJavascriptObject来注册JSAPI
```java

dWebView.addJavascriptObject(new JSApi(this),null);

class JSApi{
    private Context context;
    JSApi(Context context){
        this.context = context;
    }
    @JavascriptInterface
    public void getNativeMessage (Object msg, CompletionHandler<String> handler){
        handler.complete("husky native message"); // 回调
    }
}
```

### native调用web
* 1.在web端注册方法
```js
dsBridge.register('getWebMessage', () => {
  // other logic
  return 'husky web info' // 返回值
})
```
* 2.在相应的点击事件中写入一下代码
```java
showBtn.setOnClickListener(new View.OnClickListener(){
    @Override
    public void onClick(View view){
        // 调用web端注册的方法 
        webView.callHandler("getWebMessage", null, new OnReturnValue<String>() {
            @Override
            public void onValue(String retValue) {
                new AlertDialog.Builder(self)
                        .setMessage(retValue)
                        .create()
                        .show();
            }
        });
    }
});
```


## 调试webview
* 首先需要给`webview`开启`debugger`
```java
webView.setWebContentsDebuggingEnabled(true);
```
* 然后在用`debugger`模式启动程序

![android debugger模式启动](https://static01.imgkr.com/temp/e7936ff0a8084b4285fdaf8cc4032724.png)

* 打开`chrome`历览器的 `chrome://inspect/#devices` 页面，如下图

![chrome://inspect/#devices](https://static01.imgkr.com/temp/6a563a39afaf42d0945cfcabe315a200.png)

* 点击`inspect`会弹出一个页面，就和我们平时开发`web`应用调试器一样，然后就可以分别在`web`端和` Android studio`打断点进行调试了