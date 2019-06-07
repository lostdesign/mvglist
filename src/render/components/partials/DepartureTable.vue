<template lang="pug">
.departure
  h5 {{station.name}}
  table
    template(v-for="(d, index) in departures" v-if="departures && departures.length > 0 && index <= limitationList")
      tr
        td {{d.time | formatTime}}
        td {{d.time | calcTime}} min
        td {{d.label}}
        td {{d.destination}}
</template>

<script>
import { setTimeout } from 'timers';
import { log } from 'util';
const mvg = require('mvg-node');

export default {
  data(){
    return {
      departures:[],
      limitationList: 10
    }
  },
  props: [
    'station'
  ],
  methods: {
    async getStationDepature(){
      let home = await mvg.getStation(this.station.name).catch((err)=>{console.log(err)});

      let departures =
        await mvg.getDepartures(home)
        .then(res => {
          this.departures = res;
        });
    }
  },
  created() {
    this.getStationDepature();
  },
  mounted(){
    setInterval(() => this.getStationDepature('interval'), 60 * 1000)
  }
}
</script>

