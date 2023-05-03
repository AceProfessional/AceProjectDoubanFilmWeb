import {createRouter, createWebHistory} from 'vue-router'
import MainView from "@/views/MainView";
import HomeView from "@/views/home/HomeView";
import DetailsView from "@/views/details/DetailsView";
// import PagingView from "@/views/details/PagingView";
import TimeView from "@/views/time/TimeView";
import ScoreView from "@/views/score/ScoreView";
import AddressView from "@/views/address/AddressView";
import DirectorView from "@/views/director_sort/DirectorView";
import Actors from "@/views/WordCloud/Actors/Actors.vue";
import Directors from "@/views/WordCloud/Directors/Directors.vue";
import Types from "@/views/WordCloud/Types/Types.vue";
import Summary from "@/views/WordCloud/Summary/Summary.vue";
import Movies from "@/views/WordCloud/Movies/Movies.vue";

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
                path: 'director',
                name: 'director',
                component: DirectorView
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
            {
                path: 'actorsWordCloud',
                name: 'actorsWordCloud',
                component: Actors
            },
            {
                path: 'directorsWordCloud',
                name: 'directorsWordCloud',
                component: Directors
            },
            {
                path: 'typeWordCloud',
                name: 'typeWordCloud',
                component: Types
            },
            {
                path: 'summaryWordCloud',
                name: 'summaryWordCloud',
                component: Summary
            },
            {
                path: 'moviesWordCloud',
                name: 'moviesWordCloud',
                component: Movies
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    // history:createWebHashHistory(),
    routes
})

export default router


