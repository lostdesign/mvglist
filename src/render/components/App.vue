<template lang="pug">
.content
  nav
    router-link(to="/") Dashboard
    router-link(to="/settings") Settings
    .drag(style="-webkit-app-region: drag;")
    button.full(@click="changeWindow('max')") +
    button.min(@click="changeWindow('min')") -
    button.close(@click="changeWindow('close')") x
  main
    router-view.mx-auto.px-4
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
  background: #212121;
  color: white;

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

.router-link-exact-active {
  color: lightcoral;
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

button {
  @apply font-bold m-1;
  width: 2rem;

  &.full {
    //
  }

  &.min {
    //
  }

  &.close {
    //
  }
}

</style>