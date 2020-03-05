import Vue from 'vue'
import VueRouter from 'vue-router'
const PostList = () =>import('../components/PostList.vue')
const User = () =>import('../components/User.vue')
const Sidder = () =>import('../components/Sidder.vue')
const PostInfo = () =>import('../components/PostInfo.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    components: {
      main: PostList
    }
  },
  {
    path: '/user/:name',
    name: 'user_info',
    components: {
      main: User
    }
  },
  {
    path: '/postinfo/:id&auther=:name',
    name: 'post_content',
    components: {
      main: PostInfo,
      sidder: Sidder
    }
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
