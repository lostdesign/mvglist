<template lang="pug">
div.flex
  div
    form.mt-5(v-on:submit.prevent="addNewStation")
      h1.font-bold.m-0 Add Stations
      input.min-w-full.block.mt-0.mr-1.border.border-gray-900.text-xs(placeholder="e.g. Ostbahnhof" v-model="newStation.name")
      button.min-w-full.mt-0.border.border-gray-900.text-xs(type="submit") Save
    form.mt-5(v-on:submit.prevent="addNewRoute")
      h1.font-bold.m-0 Add Routes
      input.min-w-full.block.mr-1.border.border-gray-900.text-xs(placeholder="Start" v-model="newRoute.from")
      input.min-w-full.block.mt-1.mr-1.border.border-gray-900.text-xs(placeholder="Destination" v-model="newRoute.to")
      //- input.min-w-full.inline-block.mr-1.border.border-gray-900.text-xs(type="checkbox" id="checkbox" v-model="newRoute.onway") 
      //- p.inline-block.text-xs Back and forth?
      button.min-w-full.border.border-gray-900.text-xs(type="submit") Save
  div.flex
    div.ml-10.mt-5
      h1.font-bold Stations
      div.flex.mt-1.justify-between(v-for="station in activeStationWatchers")
        span.text-sm {{station.name}}
        button.ml-3.px-2.w-auto.inline-block.block.border.border-gray-900.text-xs(@click="deleteStation(station.id)") Delete
    div.mt-5.ml-5
      h1.font-bold Routes
      div.flex.justify-between(v-for="route in activeRoutes")
        span.text-sm {{route.from}} - {{route.to}}
        button.ml-3.px-2.w-auto.inline-block.border.border-gray-900.text-xs(@click="deleteRoute(route.id)") Delete
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
