<template>
    <b-input-group :prepend="label" :append="unit">
        <b-input-group-prepend>
            <slot name="prepend"></slot>
        </b-input-group-prepend>
        <b-form-input :id="id" :name="name" :type="type"></b-form-input>
        <b-input-group-append>
            <slot name="append"></slot>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            type: String,
            default: 'textbox_' + util.getRandom(8)
        },
        name: {
            type: String,
            default: ''
        },
        validate: {
            type: String
        },
        myClass: {},
        label: {},
        placeholder: {},
        type: {
            default: 'text'
        },
        size: {
            default: ''
        },
        unit: {}
    },
    computed: {
        setPlaceholder: function(){
            if(!this.placeholder){
                return '请输入' + this.label;
            }else{
                return this.placeholder
            }
        }
    },
    data: () => {
        return {
        }
    },
    mounted: function(){
    }
}
</script>

<style lang="less" scoped>
.input-group{
    .form-control{
        border-radius: 0rem .25rem .25rem 0rem;
    }
    .errMsg{
        position: absolute;
        background-color: #d65b5b;
        height: 18px;
        line-height: 18px;
        top: 100%;
        left: 0px;
        color: #fff;
        font-size: 13px;
        width: 99%;
        padding: 0px 10px;
        z-index: 111;
    }
}
</style>


