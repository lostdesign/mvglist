<template lang="pug">
div
  form
    input(placeholder="add new station to watch" v-model="newStation.name")
    //input(placeholder="add new station direction" v-model="newStation.to")
    button(@click="addNewStation") save
  hr
  h1 Station watchers
  template(v-for="station in activeStationWatchers")
    p {{station.name}}
    button(@click="deleteStation(station.id)") delete
  hr
  h1 Route Watchers
  template(v-for="route in activeRoutes")
    p {{route.from}} - {{route.to}}
    button(@click="deleteRoute(route.id)") delete
</template>

<script>
import { moveCursor } from 'readline';
export default {
  name: 'Settings',
  data(){
    return {
      newStation:{}
    }
  },
  methods: {
    addNewStation(){
      this.$store.dispatch('addNewStationWatch', this.newStation)
    },
    deleteStation(id){
      this.$store.dispatch('deleteStationWatch', id)
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

<style lang="scss" scoped>

</style>
