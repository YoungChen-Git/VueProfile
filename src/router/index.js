import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Detail',
    component:() => import('../views/Detail/Detail.vue'),
    children:[
      {path:'',component:()=>import('../views/Detail/_Profile.vue')},
      {path:'/Detail/Skill',component:()=>import('../views/Detail/_Skill.vue')},
      {path:'/Detail/Project',component:()=>import('../views/Detail/_Project.vue')}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
