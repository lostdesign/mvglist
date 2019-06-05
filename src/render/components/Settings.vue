<template lang="pug">
div
  template(v-for="station in activeStationWatchers")
    p {{station.name}}
    button(@click="deleteStation(station.id)") delete
  template(v-for="route in activeRoutes")
    p {{route.from}}
    button(@click="deleteRoute(route.id)") delete
</template>

<script>
import { moveCursor } from 'readline';
export default {
  name: 'Settings',
  data(){
    return {
    }
  },
  methods: {
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
