import Vue from 'vue'
import Router from 'vue-router'
import Persona from '@/pages/persona'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Persona',
      component: Persona
    }
  ]
})
