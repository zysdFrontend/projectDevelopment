import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'

import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import validate_config from './validate.config'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap-table'
import 'bootstrap-table/dist/bootstrap-table.min.css'

import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import 'select2'
import 'select2/dist/css/select2.min.css'

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

import './styles/awesomeFont/css/font-awesome.min.css'

import combobox from "./components/combobox.vue";
import column from "./components/column.vue";
import myTable from "./components/myTable.vue";
import tree from "vuejs-tree";
import datetimepicker from "./components/datetimepicker.vue";
import textbox from "./components/textbox.vue";
import dropdownMenu from "./components/dropdownMenu.vue";
import combotree from "./components/combotree.vue";

import directives from './components/directives'
import app from './app.vue'
import './styles/common.less'


const router = new VueRouter({
    linkActiveClass: 'active',
    routes: routes,
});

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Validator.localize(zh_CN); // 设置提示信息中文方式显示
Vue.use(VeeValidate, validate_config);
Vue.use(directives);

Vue.component('myTable', myTable);
Vue.component('column', column);
Vue.component('combobox', combobox);
Vue.component('tree', tree);
Vue.component('textbox', textbox);
Vue.component('dropdownMenu', dropdownMenu);
Vue.component('flatPickr', flatPickr);
Vue.component('datetimepicker', datetimepicker);
Vue.component('combotree', combotree);
Vue.component('treeselect', Treeselect);

new Vue({
    el : "#MYAPP",
	router: router,
	data : () => {
        return {
        }
	},
	render: (h) => h(app)
});

if(process.env.NODE_ENV == "development"){
    console.log("当前是开发模式！");
}else if(process.env.NODE_ENV == "production"){
    console.log("当前是生产模式！");
}