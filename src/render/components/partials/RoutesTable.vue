<template lang="pug">
  div {{station.name}}
    ul
      template(v-for="route in routes")
        li {{route.departure}}
</template>

<script>
const mvg = require('mvg-node');
export default {
  data(){
    return {
      routes: []
    }
  },
  props: ['station'],
  methods: {
    async getRoutes(){
      let routes = await mvg.getRoute(this.station.name, this.station.to).then(res=>this.routes = res);
    }
  },
  created() {
    this.getRoutes();
  },
}
</script>
