<template lang="pug">
.wrapper
  .header
    h1 {{station}}
    .departures(v-model="departures")
  table.content 
    tr
      th LINE
      th DEST.
      th TYPE
    template(v-for="d in departures") 
      tr
        td {{d.label}}
        td {{d.destination}}
        td {{d.product}}
        td {{d.time | calcTime}}

</template>

<script>
import { setTimeout } from 'timers';
import { log } from 'util';
const mvg = require('mvg-node');

export default {
  data(){
    return {
      departures: [],
      station: 'Paul-Henri-Spaak-Straße'
    }
  },
  methods: {
    async getStationDepature(init){
      let home = await mvg.getStation('Paul Henri').catch((err)=>{console.log(err)})

      let departures = await mvg.getDepartures(home).then(
        (res) => {
          this.departures = res;
          console.log(res);
        }
      );
      console.log(init, this.logTime());
    },
    logTime() {
      const d = new Date();
      const n = d.toLocaleTimeString();
      return n;
    }
  },
  filters: {
    calcTime(depTime) {
      let now = Date.now();
      let diff = depTime - now;
      return Math.floor(diff/1000/60);
    }
  },
  created() {
    this.getStationDepature('created');
  },
  mounted(){
    setInterval(() => this.getStationDepature('interval'), 60 * 1000)
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: rgb(10, 166, 194);
  padding: 10px;
  color: #fff;
}
</style>
