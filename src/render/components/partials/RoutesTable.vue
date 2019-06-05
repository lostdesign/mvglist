<template lang="pug">
.route
  .route-item
    small {{route.from}}
    small {{route.to}}
    template(v-for="r in routesOut")
      ul
        //li
          time Abfahrt {{r.departure | formatTime}} 
        template(v-for="connection in r.connectionPartList")
          li(v-if="connection.destination") {{connection.departure | formatTime}} {{connection.label}} {{connection.from.name}}  {{connection.departurePlatform}}
        li
          time {{r.arrival | formatTime }}  {{route.to}}
  .route-item
    small {{route.to}}
    small {{route.from}}
    template(v-for="r in routesIn")
      ul
        //li
          time Abfahrt {{r.departure | formatTime}} 
        template(v-for="connection in r.connectionPartList")
          li(v-if="connection.destination") {{connection.departure | formatTime}} {{connection.label}} {{connection.from.name}} {{connection.departurePlatform}}
        li
          time {{r.arrival | formatTime }} {{route.from}}
</template>

<script>
const mvg = require('mvg-node');

export default {
  data(){
    return {
      routesOut: [],
      routesIn: []
    }
  },
  props: ['route'],
  methods: {
    async getRoutes(){
      let routesOut = await mvg.getRoute(this.route.from, this.route.to).then(res=>this.routesOut = res);
      let routesIn = await mvg.getRoute(this.route.to,this.route.from).then(res=>this.routesIn = res);
      console.log(routesOut);
    }
  },
  created() {
    this.getRoutes();
  },
  mounted(){
    setInterval(() => this.getRoutes('interval'), 60 * 1000 * 10);
  }
}
</script>

<style lang="scss" scoped>
.route {
  display: flex;
  
}
</style>

