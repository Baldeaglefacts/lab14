<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>

    <div id="map-container" v-if="dataReady">  <!-- only show map if data is available from API -->
      <l-map ref="map" v-on:ready="onMapReady" v-bind:zoom="state.zoom" v-bind:center="mapCenter">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors">
        </l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  name: "StateMap",
  components: { LMap, LTileLayer },
  data() {
    return {
      state: {},
      dataReady: false, // set to true when data is fetched from API
      mapReady: false // set to true when Leaflet map is ready
    }
  },
  mounted() {
    this.state.name = this.$route.params.state
    this.fetchStateData()
  },
  methods: {
    onMapReady() { // when called, sets mapReady to true
      this.mapReady = true
      this.setMapView()
    },
    setMapView() {
      // Ensure map shows correct location, but only if data is ready and map is also ready.
      if (this.dataReady && this.mapReady) {
        this.$refs.map.leafletObject.setView(this.mapCenter, this.state.zoom)
      }
    },
    fetchStateData() {
      this.$stateService.getOneState(this.state.name).then( state => {
        this.state = state
        this.dataReady = true
        this.setMapView()
      })
          .catch( err => {
            if (err.response && err.response.status === 404) { // Not found
              this.state.name = '?'   // TODO - think about the best way to communicate this to the user
            }
            else {  // a different error
              alert('Sorry, error fetching data about this state')
              console.error(err)
            }
          })
    }
  },
  computed: {
    mapCenter() { // sets map data for current state
      return [this.state.lat, this.state.lon]
    }
  }
}
</script>
<!-- needed or else map height will be 0 and invisible -->
<style scoped>
#map-container {
  height: 30rem;
}
</style>