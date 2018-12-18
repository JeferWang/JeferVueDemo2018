<template>
  <div class="home">
    Home
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  mounted () {
    this.$msg({ type: 'danger', content: 'info提示' })
  },
}
</script>
