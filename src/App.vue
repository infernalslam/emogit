<template>
<div class="columns">
  <button v-if="showToggle === true" @click="changeToggle(showToggle)">⏩</button>
  <button v-if="showToggle === false" @click="changeToggle(showToggle)">⏪</button>
   <transition name="slide-fade">
    <div class="column is-2" v-if="showToggle">
      <side-menu />
    </div>
   </transition>
  <div class="column">
    <router-view />
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import sideMenu from '@/pages/menu'
export default {
  name: 'app',
  components: {
    sideMenu
  },
  computed: {
    ...mapGetters([
      'showToggle'
    ])
  },
  methods: {
    ...mapActions([
      'changeToggle'
    ])
  }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
