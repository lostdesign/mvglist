<template lang="pug">
  .route__item
    .route-header
      h1.inline-block.font-bold.uppercase {{from}} ⟷&nbsp;
      h1.inline-block.font-bold.uppercase {{to}} 
    template(v-for="(r, index) in route")
      div.mb-1
        template(v-for="connection in r.connectionPartList")
          div.text-xs.inline-block.px-1.border.border-gray-900(v-if="connection.destination") {{connection.departure | formatTime}} → {{r.arrival | formatTime }}
          div.text-xs.inline-block.ml-1.px-1(:class="connection.label") {{connection.label}}
          //- .flex
          //-   .flex
          //-     div.text-xs Abfahrt
          //-     div.text-xs.inline-block.ml-1.px-1.border.border-gray-900 {{connection.departurePlatform}} 
          //-   .flex
          //-     div.text-xs Ankunft
          //-     div.text-xs.inline-block.ml-1.px-1.border.border-gray-900 {{ connection.arrivalPlatform}}
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
