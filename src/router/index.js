import vue from 'vue'
import vueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Shopcart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
vue.use(vueRouter)
const routes = [
    {
      path: '',
      //重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      //动态路由获取动态id
      path:'/detail/:iid',
      component:Detail
    }
  ]

//创建router对象
const router =new vueRouter({
    routes,
    mode:'history'
})

export default router