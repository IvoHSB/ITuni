import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/services/VPS-hosting',
      name: 'hostingOne',
      component: () => import('../views/HostingOne.vue')
    },
    {
      path: '/services/Shared-hosting',
      name: 'hostingTwo',
      component: () => import('../views/HostingTwo.vue')
    },
    {
      path: '/services/Dedicated-hosting',
      name: 'hostingThree',
      component: () => import('../views/HostingThree.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/blog/How-to-select-the-best-hosting',
      name: 'postOne',
      component: () => import('../views/PostOne.vue')
    },
    {
      path: '/blog/Five-ways-to-improve-your-site-speed',
      name: 'postTwo',
      component: () => import('../views/PosтTwo.vue')
    },
    {
      path: '/blog/How-to-ensure-security-for-your-website',
      name: 'postThree',
      component: () => import('../views/PosтThree.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/Partners.vue')
    },
  ]
})

export default router
