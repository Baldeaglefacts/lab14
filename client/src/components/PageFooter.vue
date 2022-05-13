<template>
  <div class="footer">
    <div class="m-2">
      <span class="p-3">
        <router-link to="/"><button>Home</button></router-link>
      </span>

      <span class="p-3">
        <router-link to="/about"><button>About this site</button></router-link>
      </span>
    </div>
    <div class="credits">
      <p class="text-right p-2">Header image by
      <a href="https://unsplash.com/photos/NEvS5lHyrlk">Mathew Schwartz</a> on Unsplash
    </p>

      <p><a target="_blank" href="//img.icons8.com/clouds/100/000000/map.png">Map Icon</a> by
        <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style scoped>
.navigation {
  margin: 1em;
}
</style>
