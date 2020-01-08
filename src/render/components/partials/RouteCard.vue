<template lang="pug">
  .route__item
    .route-header
      h1.inline-block.font-bold.uppercase {{from}} ⟷&nbsp;
      h1.inline-block.font-bold.uppercase {{to}}
    template(v-for="(r, index) in route")
      ul
        template(v-for="connection in r.connectionPartList")
          li(v-if="connection.destination") {{connection.departure | formatTime}} {{connection.label}} {{connection.from.name}}  {{connection.departurePlatform}}
        li
          time {{r.arrival | formatTime }}  {{to}}
</template>

<script>
export default {
  name: 'RouteCard',
  props: ['route', 'from', 'to'],
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
