<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <h2 class="title is-size-4 has-text-centered">{{ headline }}</h2>
      <p class="is-size-6 has-text-centered">{{ subline }}</p>
      <br>
      <h3 class="title is-size-4">{{ article }}</h3>
      <p class="is-size-6">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: `No headline`
    },
    subline: {
      type: String,
      default: `No subline`
    },
    article: {
      type: String,
      default: `No article`
    },
    content: {
      type: String,
      default: `No content`
    }
  }
}
</script>

<style scoped>

</style>