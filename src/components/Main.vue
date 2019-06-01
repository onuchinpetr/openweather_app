<template>
  <main>
      <img :src="weatherIcon">
      {{temp}}
      <span>  0</span>
    </main>
</template>

<script>
export default {
  computed: {
    weatherIcon(){
      return this.$store.getters.GET_WEATHERICON;
    },
    temp() {
        return this.$store.getters.GET_TEMP;
    },
  }
}
</script>

