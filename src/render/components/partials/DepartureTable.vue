<template lang="pug">
.departure.mr-10
  h1.inline-block.font-bold.uppercase {{station.name}}
  button(@click.prevent="getStationDeparture") ↻
  small Last Update {{ lastUpdate | formatTime}}
  template(v-for="(d, index) in departures" v-if="departures && departures.length > 0 && index <= limitationList")
    div.flex.justify-start.flex-1.min-w-full.text-center(style="flex: 1 1 0")
      span.px-1.bg-gray-900.mb-1.text-white.text-sm(style="flex: 0 1 10%") {{d.time | formatTime}}
      span.px-1.border.mb-1.border-gray-900.text-xs(style="flex: 0 1 20%") {{d.time | calcTime}} min
      span.flex-initial.px-1.ml-1.mb-1.text-sm(:class="[d.label, d.product]" style="flex: 0 1 10%") {{d.label}}
      span.flex-initial.mb-1.px-1.text-sm.flex-no-wrap.text-left(style="flex: 0 1 60%; text-overflow: clip; white-space: nowrap; overflow:hidden;") {{d.destination}}
</template>

<script>
const mvg = require('mvg-node');

export default {
  data(){
    return {
      departures:[],
      limitationList: 20,
      lastUpdate: ''
    }
  },
  props: [
    'station'
  ],
  methods: {
    async getStationDeparture(){
      let home = await mvg.getStation(this.station.name).catch((err)=>{console.log(err)});

      let departures =
        await mvg.getDepartures(home)
        .then(res => {
          this.departures = res;
          console.log(res)
        });
      this.lastUpdate = Date.now();
      console.log('UPDATED ↻')
    }
  },
  created() {
    this.getStationDeparture();
  },
  mounted(){
    setInterval(() => this.getStationDeparture('interval'), 60 * 1000)
  }
}
</script>

<style>
.S1 { @apply bg-blue-500 text-white; }
.S2 { @apply bg-green-400 text-white; }
.S20 { @apply bg-red-400 text-white; }
.S3 { @apply bg-purple-700 text-white;}
.S4 { @apply bg-red-700 text-white; }
.S6 { @apply bg-green-700 text-white; }
.S7 { @apply bg-red-800 text-white; }
.S8 { @apply bg-gray-900 text-yellow-500; }

.U1, .U7 { @apply bg-green-800 text-white; }
.U2 { @apply bg-red-800 text-white; }
.U3. .U8 { @apply bg-orange-500 text-white; }
.U4 { @apply bg-green-400 text-white; }
.U5 { @apply bg-yellow-700 text-white; }
.U6 { @apply bg-blue-600 text-white; }

.BUS, .REGIONAL_BUS { @apply bg-blue-800 text-white; }
.TRAM { @apply bg-red-600 text-white; }
</style>