import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import cream from '@/components/Cream/cream'
import CreateCream from '@/components/Cream/CreateCream'
import EditCream from '@/components/Cream/EditCream'
import ShowCream from '@/components/Cream/ShowCream'


import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/creams',
      name: 'creams',
      component: cream
    },
    {
      path: '/cream/create',
      name: 'creams-create',
      component: CreateCream
    },
    {
      path: '/cream/edit/:creamId',
      name: 'creams-edit',
      component: EditCream
    },
    {
      path: '/cream/:creamId',
      name: 'cream',
      component: ShowCream
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'users-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ]
})
