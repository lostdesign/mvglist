<template lang="pug">
.departure
  h5 {{station.name}} 
  table
    template(v-for="d in departures")
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
      departures:[]
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
          //let result = res.filter(d => d.destination == this.station.to);
          this.departures = res;
        });

      // let stations =
      // await mvg.allStations()
      // .then(res => {
      //     let result = res.locations.filter(d => d.name == "Pulling");
      //    console.log(result);
      // });
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

