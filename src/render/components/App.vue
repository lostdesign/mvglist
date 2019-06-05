<template lang="pug">
main
  nav
    .drag(style="-webkit-app-region: drag;")
    button(@click="changeWindow('max')") FULL
    button(@click="changeWindow('min')") -
    button(@click="changeWindow('close')") x
  router-link(to="/") App
  router-link(to="/settings") settings
  router-view
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('initialLoad')
  },
  methods: {
    changeWindow(state){
      let appWindow = remote.getCurrentWindow()
      switch(state){
        case 'close': 
          appWindow.close();
          break;
        case 'min':
          appWindow.minimize();
          break;
        case 'max':
          appWindow.maximize();
          break;
        default: 
          break;
      }
      
    }
  },
}
</script>


<style lang="scss" scoped>
nav {
  height: 20px; 
  background-color:green;
  display:flex;

  .drag {
    background-color: red;
    width: 100%;
  }
}
</style>

<style lang="scss">
::-webkit {
  &-scrollbar{
    width: 10px;
    height: 10px;

    &-thumb{
      background: #aaa;
    }
    
    &-track{
      background:#eee;
    }
  }
  &-resizer,
  &-scrollbar-corner {
    background: #eee;
  }
}

</style>