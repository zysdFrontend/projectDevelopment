<template>
    <b-input-group class="combobox-group" :prepend="label">
        <b-form-select ref="select" class="combobox" :placeholder="placeholder" :options="optionData"/>
    </b-input-group>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            type: String,
            default: 'combobox_' + util.getRandom(8)
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            default: '请选择'
        },
        options: {
            type: Array,
            default: () => []
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
            type: Object,
            default: () => {}
        }
    },
    data: () => {
        return {
            optionData: []
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
                // data: this.options,
                containerCss: this.containerCss,
                containerCssClass: this.containerCssClass,
                dropdownCss: this.dropdownCss,
                dropdownCssClass: this.dropdownCssClass,
                dropdownAutoWidth: this.dropdownAutoWidth
            }
            $.extend(defaultOptions, this.extendOption);
            $(this.$refs.select.$el).select2(defaultOptions);
        }
    },
    mounted: function(){
        if(this.url){
            var _this = this;
            util.myAjax({
                url: this.url,
                type: 'get',
                success: function(data){
                    _this.optionData = data;
                    _this.$nextTick( () => _this.init());
                }
            })
        }else{
            this.optionData = this.options;
            this.init();
        }
    }
}
</script>

<style lang="less">
.combobox-group{
    .select2{
        .select2-selection{
            height: 100%;
            border-radius: 0rem .25rem .25rem 0rem;
            border-color: #ced4da;
            .select2-selection__rendered{
                height: 100%;
                line-height: 1;
                display: flex;
                align-items: center;
                padding-right: 30px;
            }
            .select2-selection__arrow{
                top: 0px;
                right: 0px;
                height: 100%;
                width: 30px;
            }
        }
    }
}
</style>


