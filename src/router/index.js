import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import ShowPost from '../views/posts/Show.vue'
import CreatePost from '../views/posts/Create.vue'
import Tag from '../views/posts/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/posts/Create',
    name: 'CreatePost',
    component: CreatePost,
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost,
    props: true
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
