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
              <a :href="btnGetStart.link" :class="btnGetStart.class" class="button is-rounded" v-if="btnGetStart.show">{{ btnGetStart.btnName }}</a>
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
    },
    btnGetStart: {
      type: Object,
      default: { btnName: `no button name `, show: false, link: `no link`, class: `` }
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