import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Profile from '../components/Profile.vue'
import Events from '../components/Events.vue'
import Tickets from '../components/Tickets.vue'
import Favourites from '../components/Favourites.vue'
import EventDetails from '../components/EventDetails.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/profile', component: Profile },
  { path: '/events', component: Events },
  { path: '/tickets', component: Tickets },
  { path: '/favourites', component: Favourites },
  { path: '/event/:id', component: EventDetails }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
