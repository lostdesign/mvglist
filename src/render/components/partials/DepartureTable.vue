<template lang="pug">
.content
  h5 {{station.name}}
  table 
    template(v-for="d in departures") 
      tr
        td {{d.label}}
        td {{d.destination}}
        td {{d.time | calcTime}}
        td {{d.time | formatTime}}
</template>

<script>
import { setTimeout } from 'timers';
import { log } from 'util';
const mvg = require('mvg-node');
export default {
  data(){
    return {
      departures:[]
    }
  },
  props: [
    'station'
  ],
  filters: {
    calcTime(depTime) {
      let now = Date.now();
      let diff = depTime - now;
      depTime = Math.floor(diff/1000/60);
      return depTime;
    },
    formatTime(time){
      var d = new Date(time);
      return d.toLocaleTimeString();
    }
  },
  methods: {
    async getStationDepature(){
      let home = await mvg.getStation(this.station.name).catch((err)=>{console.log(err)});

      let departures = 
        await mvg.getDepartures(home)
        .then(res => {
          let result = res.filter(d => d.destination == this.station.to);
          this.departures = result;
        });
    },
  },
  created() {
    this.getStationDepature();
  },
  mounted(){
    setInterval(() => this.getStationDepature('interval'), 60 * 1000)
  }
}
</script>

