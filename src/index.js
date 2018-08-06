import Vue from 'vue'
// import VeeValidate from 'vee-validate'
import './validate.config'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-table'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'select2'
import 'select2/dist/css/select2.min.css'
import './styles/awesomeFont/css/font-awesome.min.css'
import directives from './components/directives'
import './styles/common.less'
import app from './app.vue'

if(process.env.NODE_ENV == "development"){
	console.log("当前是开发模式！");
}else if(process.env.NODE_ENV == "production"){
	console.log("当前是生产模式！");
}

Vue.use(directives);
// Vue.use(VeeValidate, validate_config);

new Vue({
	el : "#MYAPP",
	router: router,
	data : () => {
		return {
		}
	},
	render: (h) => h(app)
});
