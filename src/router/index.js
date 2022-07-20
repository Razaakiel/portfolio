import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil';

Vue.use(VueRouter)

const routes = [

  { path: '/accueil', name: 'accueil', component: Accueil},

]

const router = new VueRouter({
  routes
})

export default router
