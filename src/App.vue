<template>
  <router-view />
</template>

<script lang="ts">

  let brand = ' | VUE STOCK'

  export default {
    watch: {
      '$route' (to: any) {
        document.title = to.meta.title + brand
      }
    },
  }

</script>

<style scoped>

</style>