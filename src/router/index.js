import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil';
import Projets from '../views/Projets';

Vue.use(VueRouter)

const routes = [

  { path: '/accueil', name: 'accueil', component: Accueil},
  { path: '/projets', name: 'projets', component: Projets},

]

const router = new VueRouter({
  routes
})

export default router
