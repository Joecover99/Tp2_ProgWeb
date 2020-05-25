import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LoginView.vue'
import createUser from '../views/CreateView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/modify',
    name: 'Modify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/createUser',
    name: 'createUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: createUser
  },
  {
    path: '/films/:id',
    name: 'movie',
    component: () => import('../views/movieDetail.vue'),
    props: castRouteParamsId
  },
  {
    path: '/filmsAdmin/:id',
    name: 'movie2',
    component: () => import('../views/movieDetailAdmin.vue'),
    props: castRouteParamsId
  },
  {
    path: '/filmsAdd',
    name: 'Add',
    component: () => import('../views/AddMovieView.vue'),
  },
  
]

function castRouteParamsId(route) {
  return {
    id: Number(route.params.id),
  };
}

const router = new VueRouter({
  routes
})

export default router
