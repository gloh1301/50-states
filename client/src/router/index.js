import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import StatesVisited from '@/components/StatesVisited'
import NotFound from '@/components/NotFound'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/states-visited',
            name: 'StatesVisited',
            component: StatesVisited
        },
        {
            path: '/:pathMatch(.*)*', // matches anything that is not one of the other routes
            name: 'NotFound',
            component: NotFound
        }
    ]
})