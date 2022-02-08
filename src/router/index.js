import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Navigation from '../views/Navigation.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DashboardExample from '../views/DashboardExample.vue'
import Editor from '../views/Editor.vue'
import Editor2 from '../views/Editor2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard2',
    name: 'DashboardExample',
    component: DashboardExample,
  },

   {
    path: '/about',
    name: 'About',
    component: About,
  },
   {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
   {
    path: '/editor2',
    name: 'Editor2',
    component: Editor2,
  },

  {
    path: '/nav',
    name: 'Nav',
    component: Navigation,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
