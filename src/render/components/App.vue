<template lang="pug">
.content
  nav
    router-link(to="/") App
    router-link(to="/settings") settings
    .drag(style="-webkit-app-region: drag;")
    button(@click="changeWindow('max')") FULL
    button(@click="changeWindow('min')") -
    button(@click="changeWindow('close')") x
  main
    router-view
</template>

<script>
const remote = require('electron').remote
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
  display:flex;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  background: #eee;

  a {
    padding: 5px 10px;
  }

  .drag {
    width: 100%;
  }
}
main {
  margin-top:30px;
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