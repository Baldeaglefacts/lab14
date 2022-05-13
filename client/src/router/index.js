import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from "@/components/AboutSite";
import StateMap from "@/components/StateMap";
import NotFound from  "@components/NotFound";


export default createRouter({
    history: createWebHashHistory(),
    routes: [  // creates ways for components to be called, so they can be
        // displayed on the page
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
            path: '/:pathMatch(.*)*', // anything that isn't one of the other routes
            name: 'NotFound',
            component: NotFound
        }
    ]
})
