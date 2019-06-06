<template>
  <main>
      <img :src="weatherIcon">
      {{temp}}
      <span>  0</span>
    </main>
</template>

<script>
export default {
  props: ['temp', 'weatherIcon']
}
</script>

