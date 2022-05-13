<template>
  <h1>States you have Visited:</h1>
  <div v-for="state in states" v-bind:key="state.name">
    <h2 v-if="state.visited">{{state.name}}</h2>
  </div>
</template>
<!-- the v-if statement above is the only thing actually doing any filtering on the page. Though I did try to
 Make the API request on stateService actually only retrieve visited results. I couldn't make it work though -->

<script>


export default {
  name: "StatesVisited",
  data() {
    return {
      states: []
    }
  },
  mounted() {
    this.fetchVisitedStates()
  },
  methods: {
    fetchVisitedStates() { // Get states for display
      this.$stateService.getVisitedStates().then(states => {
        this.states = states
      }).catch(err => {
        alert('Sorry, unable to fetch state list')
        console.error(err)
      })
    },
  }
}
</script>

<style scoped>

</style>