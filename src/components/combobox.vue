<template>
    <select :id="id" :name="name">
        <slot></slot>
    </select>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: 'combobox_' + util.getRandom(8)
        },
        placeholder: {
            default: '请选择'
        },
        url: {
            type: String
        },
        name: {
            type: String
        },
        width: {
            type: String
        },
        allowClear: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        matcher: {
            type: Object
        },
        formatResult: {
            type: Object
        },
        data: {
            type: Array,
            default: function(){
                return [];
            }
        },
        containerCss: {
            type: Object
        },
        containerCssClass: {
            type: [Object,String]
        },
        dropdownCss: {
            type: Object
        },
        dropdownCssClass: {
            type: Object
        },
        dropdownAutoWidth: {
            type: Boolean,
            default: true
        },
        extendOption: {
            type: Object
        }
    },
    computed: {
    },
    data: () => {
        return {
            optionsData: []
        }
    },
    methods: {
        init: function(){
            let defaultOptions = {
                minimumResultsForSearch: -1,
                language: 'zh-CN',
                placeholder: this.placeholder,
                width: this.width,
                allowClear: this.allowClear,
                multiple: this.multiple,
                matcher: this.matcher,
                formatResult: this.formatResult,
                data: this.optionsData,
                containerCss: this.containerCss,
                containerCssClass: this.containerCssClass,
                dropdownCss: this.dropdownCss,
                dropdownCssClass: this.dropdownCssClass,
                dropdownAutoWidth: this.dropdownAutoWidth
            }
            $.extend(defaultOptions, this.extendOption);
            $(this.$el).select2(defaultOptions);
        }
    },
    mounted: function(){
        if(this.url){
            var _this = this;
            util.myAjax({
                url: this.url,
                type: 'get',
                success: function(data){
                    _this.optionsData = data;
                    _this.init();
                }
            })
        }else{
            this.optionsData = this.data
            this.init();
        }
    }
}
</script>

<style lang="less" scoped>
</style>


