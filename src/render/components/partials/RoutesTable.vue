<template lang="pug">
section.routes
  RouteCard(:route="routesOut" :from="route.from" :to="route.to")
  template(v-if="route.onway")
    RouteCard(:route="routesIn" :from="route.to" :to="route.from")
</template>

<script>
const mvg = require('mvg-node');
import RouteCard from './RouteCard.vue'

export default {
  data(){
    return {
      routesOut: [],
      routesIn: [],
    }
  },
  props: ['route'],
  methods: {
    async getRoutesOut(){
      let routesOut = await mvg.getRoute(this.route.from, this.route.to).then(res=>this.routesOut = res);
    },
    async getRoutesIn(){
      let routesIn = await mvg.getRoute(this.route.to,this.route.from).then(res=>this.routesIn = res);
    },
  },
  created() {
    this.getRoutesOut();
    this.getRoutesIn();
  },
  mounted(){
    setInterval(() => this.getRoutesOut('interval'), 60 * 1000 * 10);
    setInterval(() => this.getRoutesIn('interval'), 60 * 1000 * 10);
  },
  components: {
    RouteCard
  }
}
</script>

<style lang="scss" scoped>
.route {
  display: flex;
  
}
</style>

