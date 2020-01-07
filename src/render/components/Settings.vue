<template lang="pug">
div
  form.flex.mt-10(v-on:submit.prevent="addNewStation")
    input.mt-5.mr-1.border.border-gray-900.text-sm(placeholder="New Station" v-model="newStation.name")
    //input(placeholder="add new station direction" v-model="newStation.to")
    button.mt-5.border.border-gray-900.text-xs(type="submit") Save
  //- DEPRECATED SINCE MVG-NODE BROKE
  //- form(v-on:submit.prevent="addNewRoute")
  //-   input(placeholder="add new start" v-model="newRoute.from")
  //-   input(placeholder="add new stop" v-model="newRoute.to")
  //-   input(type="checkbox" id="checkbox" v-model="newRoute.onway") 
  //-   p Back and forth?
  //-   button(type="submit") saves
  h1.mt-5.font-bold Stations
  table
  tr(v-for="station in activeStationWatchers")
    td.mt-5 {{station.name}}
    td
      button.m-1(@click="deleteStation(station.id)") Delete
  //- hr
  //- h1 Route Watchers
  //- template(v-for="route in activeRoutes")
  //-   p {{route.from}} - {{route.to}}
  //-   button(@click="deleteRoute(route.id)") delete
</template>

<script>
import { moveCursor } from 'readline';
export default {
  name: 'Settings',
  data(){
    return {
      newStation:{},
      newRoute: {}
    }
  },
  methods: {
    addNewStation(){
      this.$store.dispatch('addNewStationWatch', this.newStation)
      this.newStation = {}
    },
    deleteStation(id){
      this.$store.dispatch('deleteStationWatch', id)
    },
    addNewRoute(){
      this.$store.dispatch('addNewRoute', this.newRoute)
      this.newRoute = {}
    },
    deleteRoute(id){
      this.$store.dispatch('deleteRoute', id)
    },
  },
  computed: {
    activeStationWatchers() {
      return this.$store.getters.getStationWatchers
    },
    activeRoutes() {
      return this.$store.getters.getRoutes
    }
  }
}
</script>

