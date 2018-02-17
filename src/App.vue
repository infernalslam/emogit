<template>
<div class="columns">
  <button v-if="showToggle === true" @click="changeToggle(showToggle)">⏩</button>
  <button v-if="showToggle === false" @click="changeToggle(showToggle)">⏪</button>
  <div class="column is-2" v-if="showToggle">
    <side-menu />
  </div>
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
