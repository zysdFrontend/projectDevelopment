import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const home = () => import(/* webpackChunkName: "home" */ './pages/home.vue');
const module = () => import(/* webpackChunkName: "module" */ './pages/module.vue');
const user = () => import(/* webpackChunkName: "user" */ './pages/user.vue');
const role = () => import(/* webpackChunkName: "role" */ './pages/role.vue');
const timer = () => import(/* webpackChunkName: "timer" */ './pages/timer.vue');
const sys_param = () => import(/* webpackChunkName: "sys_param" */ './pages/sys_param.vue');
const dictionary = () => import(/* webpackChunkName: "dictionary" */ './pages/dictionary.vue');
const api = () => import(/* webpackChunkName: "api" */ './pages/api.vue');

const routes = [
    { path: '/home', component: home },
    { path: '/module', component: module },
	{ path: '/user', component: user },
	{ path: '/role', component: role },
	{ path: '/timer', component: timer },
	{ path: '/dictionary', component: dictionary },
	{ path: '/sys_param', component: sys_param },
	{ path: '/api', component: api }
];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: routes,
});

export default router;