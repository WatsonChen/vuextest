<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>count: {{ count }}</p>
    <button @click="dispathCount">Click to add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counting: 5
    }
  },
  computed: {
    count() {
      return this.$store.state.count 
    }
  },
  methods: {
    dispathCount() {
      this.$store.dispatch('increment_action',this.counting)
    }
  },
}
</script>
