const path = require('path');
module.exports = {
  title: 'huskyAreYouScared-Blog',
  description: '持续学习者，憧憬未来的开发者',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias':'docs'
      }
    }
  }
}

console.log(path.resolve('docs'));
