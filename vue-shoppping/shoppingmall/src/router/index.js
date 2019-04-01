import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Login from '@/components/pages/login'
import Products from '@/components/pages/Products'
import CustomerOrder from '@/components/pages/CustomerOrder'
import Cart from '@/components/pages/Cart'
import Coupons from '@/components/pages/Coupon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        }
      ]
    },
  ]
})
