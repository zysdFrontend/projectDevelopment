import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Validator.localize(zh_CN); // 设置提示信息中文方式显示
const validate_config = {
	aria: true,
	classNames: {},
	classes: false,
	delay: 0,
	dictionary: null,
	errorBagName: 'errors', // change if property conflicts
	events: 'input|blur',
	fieldsBagName: 'fields',
	i18n: null, // the vue-i18n plugin instance
	i18nRootKey: 'validations', // the nested key under which the validation messages will be located
	inject: true,
	locale: 'zh_CN',
	strict: true,
	validity: false
}
Vue.use(VeeValidate, validate_config);