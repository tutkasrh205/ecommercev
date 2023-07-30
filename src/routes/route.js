import {createRouter,createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Addcategory from '../views/Category/Addcategory.vue'
import Category from "../views/Category/Category.vue"
import Admin from '../views/Admin.vue'
import Product from "../views/product/Product.vue"
import AddProduct from "../views/product/AddProduct.vue"
import EditCategory from "../views/Category/EditCategory.vue"
import EditProduct from "../views/product/EditProduct.vue"



const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'

    },
    
    {
        name:'Addcategory',
        component:Addcategory,
        path:'/admin/addcategory'

    },
    {
        name:'Category',
        component:Category,
        path:'/admin/category'

    },
    {
        name:'Admin',
        component:Admin,
        path:'/admin'

    },
    {
        path: '/admin/product',
        name: 'AdminProduct',
        component: Product
      },
      {
        path: '/admin/product/new',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: '/admin/category/:id',
        name: 'EditCategory',
        component: EditCategory
      },
      {
        path: '/admin/product/:id',
        name: 'EditProduct',
        component: EditProduct
      },

   
   

]

const router=createRouter({
   history: createWebHistory(),
    routes
})

export default router