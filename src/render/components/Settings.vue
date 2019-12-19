<template lang="pug">
div
  form(v-on:submit.prevent="addNewStation")
    input(placeholder="add new station to watch" v-model="newStation.name")
    //input(placeholder="add new station direction" v-model="newStation.to")
    button(type="submit") saves
  //- DEPRECATED SINCE MVG-NODE BROKE
  //- form(v-on:submit.prevent="addNewRoute")
  //-   input(placeholder="add new start" v-model="newRoute.from")
  //-   input(placeholder="add new stop" v-model="newRoute.to")
  //-   input(type="checkbox" id="checkbox" v-model="newRoute.onway") 
  //-   p Back and forth?
  //-   button(type="submit") saves
  hr
  h1 Station watchers
  template(v-for="station in activeStationWatchers")
    p {{station.name}}
    button(@click="deleteStation(station.id)") delete
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

