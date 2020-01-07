<template lang="pug">
div
  template(v-for="route in routes")
    RoutesTable(:route="route" )
  section.departures
    template(v-for="station in stationWatchers")
      DepartureTable(:station="station").mt-5
  
</template>

<script>
import DepartureTable from './partials/DepartureTable.vue';
import RoutesTable from './partials/RoutesTable.vue';
import { switchCase } from 'babel-types';
const remote = require('electron').remote

export default {
  data(){
    return {
    }
  },
  components: {
    DepartureTable,
    RoutesTable
  },
  computed: {
    stationWatchers(){
      return this.$store.getters.getStationWatchers
    },
    routes(){
      return this.$store.getters.getRoutes
    }
  }
}
</script>

<style lang="scss" scoped>
.departures, .routes {
  display:flex;
  flex-direction: row;
}
</style>
