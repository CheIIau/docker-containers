import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(async () => await import('../pages/TodoPage'))
  },
  {
    path: '/info',
    component: lazy(async () => await import('../pages/InfoPage'))
  }
]

export default routes