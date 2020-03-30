
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/events', name: 'events', component: () => import('pages/Index.vue') },
      { path: '/managerevents', name: 'manage_events', component: () => import('pages/ManagerEvents.vue') },
      { path: '/profile', name: 'profile', component: () => import('pages/Profile.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
