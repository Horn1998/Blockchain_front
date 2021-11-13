import {createApp} from 'vue'
import ElementPlus from 'element-plus';
import store from './store'

import App from './App.vue'
import router from './router'
import '../public/reset.css'


router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})
 
createApp(App).use(store).use(ElementPlus).use(router).mount('#app')