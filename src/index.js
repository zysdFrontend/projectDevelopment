import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'

import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import validate_config from './validate.config'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-table'
import 'bootstrap-table/dist/bootstrap-table.min.css'

import 'select2'
import 'select2/dist/css/select2.min.css'

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

import './styles/awesomeFont/css/font-awesome.min.css'

import textbox from "./components/textbox.vue";
import myButton from "./components/myButton.vue";
import buttonGroup from "./components/buttonGroup.vue";
import navigation from "./components/navigation.vue";
import tab from "./components/tab.vue";
import tabPanel from "./components/tabPanel.vue";
import modal from "./components/modal.vue";
import myTable from "./components/myTable.vue";
import column from "./components/column.vue";
import checkbox from "./components/checkbox.vue";
import radio from "./components/radio.vue";
import combobox from "./components/combobox.vue";
import tree from "vuejs-tree";
import numberbox from "./components/numberbox.vue";
import dropdownMenu from "./components/dropdownMenu.vue";
import datetimepicker from "./components/datetimepicker.vue";

import directives from './components/directives'
import app from './app.vue'
import './styles/common.less'


const router = new VueRouter({
    linkActiveClass: 'active',
    routes: routes,
});

Vue.use(VueRouter);
Validator.localize(zh_CN); // 设置提示信息中文方式显示
Vue.use(VeeValidate, validate_config);
Vue.use(directives);
Vue.component('textbox', textbox);
Vue.component('myButton', myButton);
Vue.component('buttonGroup', buttonGroup);
Vue.component('navigation', navigation);
Vue.component('tab', tab);
Vue.component('tabPanel', tabPanel);
Vue.component('modal', modal);
Vue.component('myTable', myTable);
Vue.component('column', column);
Vue.component('checkbox', checkbox);
Vue.component('radio', radio);
Vue.component('combobox', combobox);
Vue.component('tree', tree);
Vue.component('numberbox', numberbox);
Vue.component('dropdownMenu', dropdownMenu);
Vue.component('flatPickr', flatPickr);
Vue.component('datetimepicker', datetimepicker);

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