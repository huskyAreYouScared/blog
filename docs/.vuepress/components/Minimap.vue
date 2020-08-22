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
        const minimap = document.createElement('script');
        minimap.type = 'text/javascript';
        minimap.src = 'https://cdn.jsdelivr.net/npm/pagemap@1.4.0/dist/pagemap.min.js';
        window.document.body.appendChild(minimap);
        minimap.onload = () => {
          pagemap(document.querySelector('#minimap'), {
            styles: {
              'pre,code':'rgba(0,255,0,0.1)'
            }
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
