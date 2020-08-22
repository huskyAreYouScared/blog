<template>
    <canvas id="minimap"></canvas>
</template>
<script>
export default {
  name: 'Minimap',
  props: {

  },
  methods: {
    initValine () {
        // 建立脚本以及属性
        const minimap = document.createElement('script');
        minimap.type = 'text/javascript';
        // minimap.async = true;
        // minimap.crossorigin = 'anonymous';
        minimap.src = 'https://cdn.jsdelivr.net/npm/pagemap@1.4.0/dist/pagemap.min.js';
        window.document.body.appendChild(minimap);
        minimap.onload=function(){
          pagemap(document.querySelector('#minimap'),{
            styles: {
            'header,footer,section,article': 'rgba(0,0,0,0.08)',
            'h1': 'rgba(0,255,255,0.20)',
            'a': 'rgba(255,255,0,0.50)',
            'h2,h3,h4': 'rgba(0,0,255,0.30)',
            'pre,code':'rgba(0,255,0,0.1)'
            },
            back: 'rgba(255,255,255,0.1)'
        });
        }
    }
  },
  mounted: function(){
    this.initValine()
  }
}
</script>

<style scoped>
#minimap {
  position: fixed;
  top: 55px;
  right: 0;
  width: 5vw!important;
  height: calc(100% - 55px)!important;
  z-index: 1;
}
@media screen and (max-width:720px){
  #minimap{
    display: none;
  }
}

</style>
