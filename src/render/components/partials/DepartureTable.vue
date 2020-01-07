<template lang="pug">
.departure.mr-10
  h1.font-bold.uppercase {{station.name}}
  
  input.text-xs(type="checkbox" v-model="activeTypes.u")
  span.text-xs &nbsp;U&nbsp;
  input.text-xs(type="checkbox" v-model="activeTypes.s")
  span.text-xs &nbsp;S&nbsp;
  input.text-xs(type="checkbox" v-model="activeTypes.b")
  span.text-xs &nbsp;B&nbsp;
  input.text-xs(type="checkbox" v-model="activeTypes.t")
  span.text-xs &nbsp;T&nbsp;
  span.text-xs.border.border-gray-900.cursor-pointer(@click="this.getNewStationDeparture") Refresh

  template(v-for="(d, index) in departures" v-if="departures && departures.length > 0 && index <= limitationList")
    div.flex
      div.flex(style="min-width:5rem;")
        span.text-sm.time {{ d.lineDepartureIn }}
        span.text-sm.line(:class="d.lineType+d.lineNumber") {{ d.lineType | convertLineType }}{{ d.lineNumber }}
      span.station {{ d.lineDestination }}
</template>

<script>
const mvg = require('mvg-node');
const mvgApi = require('@lynbarry/mvg-api');

export default {
  data(){
    return {
      departures:[],
      limitationList: 20,
      activeTypes: {
        u: true,
        s: true,
        b: false,
        t: false
      },
      types: []
    }
  },
  props: [
    'station'
  ],
  computed: {
    getTypes() {
      let arr=[];
      for (let i in this.activeTypes) {
        this.activeTypes[i] === true ? arr.push(i) : '';
      }
      return arr;
    }
  },
  methods: {
    async getNewStationDeparture(){
      mvgApi.getDepartures(this.station.name, this.getTypes).then(lines => {
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

<style scoped>
.line, .time, .station {
  @apply flex justify-center items-center  mb-1;
}

.time {
  border-radius: 0.5rem 0 0 0.5rem;
}

.line {
  border-radius: 0 0.5rem 0.5rem 0;
  width: 100%;
  @apply mr-1;
}

.line, .time {
  @apply py-0 px-2;
}



.s1 {
  @apply bg-blue-500 text-white;
}

.s2 {
  @apply bg-green-400 text-white;
}

.s20 {
  @apply bg-red-400 text-white;
}

.s3 {
  @apply bg-purple-700 text-white;
}

.s4 {
  @apply bg-red-700 text-white;
}


.s6 {
  @apply bg-green-700 text-white;
}

.s7 {
  @apply bg-red-800 text-white;
}

.s8 {
  @apply bg-gray-900 text-yellow-500;
}

.u5 {
  @apply bg-yellow-700 text-white;
}

.u4 {
  @apply bg-green-400 text-white;
}

span[class*="text-sm line b"] {
  @apply bg-blue-800 text-white;
}

span[class^="text-sm line t"] {
  @apply bg-red-600 text-white;
}

span[class*="time"] {
  @apply bg-gray-900 text-white;
}
</style>