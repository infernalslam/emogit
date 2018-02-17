<template>
  <div>
    <section class="hero  is-bold bg-color-billboard">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <img src="../assets/octocat.png" width="150px" height="200px">
              <h1 class="title text-color-white">{{ headline }}</h1>
              <h2 class="subtitle text-color-white">{{ subline }}</h2>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: `No title`
    },
    subline: {
      type: String,
      default: 'No subline'
    }
  }
}
</script>

<style scoped>
.bg-color-billboard {
  background-color: #0051fd;
}
.text-color-white {
  color: #fff;
}
</style>