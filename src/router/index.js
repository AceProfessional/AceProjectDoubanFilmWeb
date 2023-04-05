import {createRouter, createWebHistory} from 'vue-router'
import MainView from "@/views/MainView";
import HomeView from "@/views/home/HomeView";
import DetailsView from "@/views/details/DetailsView";
// import PagingView from "@/views/details/PagingView";
import TimeView from "@/views/time/TimeView";
import ScoreView from "@/views/score/ScoreView";
import AddressView from "@/views/address/AddressView";

const routes = [
    {
        path: '/',
        component: MainView,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: HomeView
            },
            {
                path: 'details',
                name: 'details',
                component: DetailsView
            },
            {
                path: 'time',
                name: 'time',
                component: TimeView
            },
            {
                path: 'score',
                name: 'score',
                component: ScoreView
            },
            {
                path: 'address',
                name: 'address',
                component: AddressView
            },

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    // history:createWebHashHistory(),
    routes
})

export default router


