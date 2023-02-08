import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

export default createRouter({
    // Hash
    // https://google.com/#/search
    history: createWebHashHistory(),
    // 페이지 이동시 맨 상당으로 이동하게 됨
    scrollBehavior() {
        return { top: 0}
    },
    // pages
    // https://google.com/
    routes: [ 
        {
            path: '/',
            component: Home
        },
        {   
            //파라미터 정의해서 사용하면 됨.
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about/',
            component: About
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }

    ]
})