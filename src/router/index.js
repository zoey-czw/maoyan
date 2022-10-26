import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: 'movie',
        name: 'movie',
        component: () => import(/* webpackChunkName: "Movie" */ '../views/Movie.vue'),   
        children: [
          {
            path: 'cinema',
            name: 'cinema',
            component: () => import(/* webpackChunkName: "cinema" */ '../components/movie/menu-router/cinema.vue'),  
          },
          {
            path: 'classic',
            name: 'classic',
            component: () => import(/* webpackChunkName: "classic" */ '../components/movie/menu-router/classic.vue'),  
          },
          {
            path: 'hot',
            name: 'hot',
            component: () => import(/* webpackChunkName: "hot" */ '../components/movie/menu-router/hot.vue'),  
          },
          {
            path: 'soon',
            name: 'soon',
            component: () => import(/* webpackChunkName: "soon" */ '../components/movie/menu-router/soon.vue'),  
          }
        ]
      },
      {
        path: 'video',
        name: 'video',
        component: () => import(/* webpackChunkName: "Video" */ '../views/Video.vue'),
      },
      {
        path: 'smallVideo',
        name: 'smallVideo',
        component: () => import(/* webpackChunkName: "Small-video" */ '../views/Small-video.vue'),   
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "Mine" */ '../views/Mine.vue'),   
      },
      {
        path: 'cinemaDetail',
        name: 'cinemaDetail',
        component: ()=>import(/* webpackChunkName: "cinemaDateil" */ '../views/Cinema-detail.vue'),
      },
      {
        path: ':id',
        name: 'id',
        component: () => import(/* webpackChunkName: "movieDetail" */ '../views/MovieDetail.vue'),  
      },
    ]
  },
  {
    path: '/',
    redirect: '/home/movie/hot',
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
