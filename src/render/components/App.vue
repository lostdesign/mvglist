<template lang="pug">
.wrapper
  .header
    h1 Abfahrtsmonitor
  .monitors
    template(v-for="station in stationWatchers")
      DepartureTable(:station="station")

</template>

<script>
import DepartureTable from './partials/DepartureTable.vue';
export default {
  data(){
    return {
      stationWatchers: [
        {
          name: 'Paul-Henri-Spaak-Strasse',
          to: 'Arabellapark'
        },
        {
          name: 'Daglfing',
          to: 'München Flughafen Terminal'
        },
        {
          name: 'Hallbergmoos',
          to: 'Herrsching'
        },
        {
          name: 'Daglfing Ost',
          to: 'Messestadt West'
        },
      ]
    }
  },
  components: {
    DepartureTable
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: rgb(10, 166, 194);
  padding: 10px;
  color: #fff;
}
.monitors {
  display:flex;
  flex-direction: row;
}
</style>
