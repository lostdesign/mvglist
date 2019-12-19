<template lang="pug">
.departure
  h5 {{station.name}}
  table
    template(v-for="(d, index) in departures" v-if="departures && departures.length > 0 && index <= limitationList")
      tr
        td {{ d.lineDepartureIn }}
        td {{ d.lineType | convertLineType }} {{ d.lineNumber }}
        td {{ d.lineDestination }}
</template>

<script>
const mvg = require('mvg-node');
const mvgApi = require('@lynbarry/mvg-api');

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
    async getNewStationDeparture(){
      mvgApi.getDepartures(this.station.name, ['u', 's', 'b', 't']).then(lines => {
        this.departures = lines;
      });
    },
    // DEPRECATED; API OF MVG-NODE BROKE @17.10.2019
    // async getStationDepature(){
    //   let home = await mvg.getStation(this.station.name).catch((err)=>{console.log(err)});

    //   let departures =
    //     await mvg.getDepartures(home)
    //     .then(res => {
    //       this.departures = res;
    //     });
    // }
  },
  created() {
    this.getNewStationDeparture();
  },
  mounted(){
    setInterval(() => this.getNewStationDeparture('interval'), 60 * 1000)
  }
}
</script>

