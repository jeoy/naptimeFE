import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import product1 from '@/components/Product1';
import product2 from '@/components/Product2';
import appIntro from '@/components/AppIntro';
import tech from '@/components/Tech';
import snap from '@/components/Snap';
import news from '@/components/News';
import help from '@/components/Help';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/product1',
            name: 'product1',
            component: product1
        },
        {
            path: '/product2',
            name: 'product2',
            component: product2
        },
        {
            path: '/appIntro',
            name: 'appIntro',
            component: appIntro
        },
        {
            path: '/snap',
            name: 'snap',
            component: snap
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/tech',
            name: 'tech',
            component: tech
        },
        {
            path: '/help',
            name: 'help',
            component: help
        }
    ]
});
