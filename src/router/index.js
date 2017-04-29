import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Next from '@/components/Next'
import Do from '@/components/details/detail'
import Eat from '@/components/details/eat'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/sider',
        name: 'sider',
        component: Hello,
        children:[
            {
              path:'/sider/nav1',
              name:'name',
              component: Do
            },
            {
              path:'/sider/nav2',
              name:'eat',
              component: Eat
            },

        ]
    },
    {
        path: '/next',
        name: 'Next',
        component: Next
    }
  ]
})
