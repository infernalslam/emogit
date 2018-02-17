<template>
<div class="columns">
  <div class="column is-2">
    <side-menu />
  </div>
  <div class="column">
    <router-view />
  </div>
</div>
</template>

<script>
import sideMenu from '@/pages/menu'
export default {
  name: 'app',
  components: {
    sideMenu
  }
}
</script>
