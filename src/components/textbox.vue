<template>
    <b-input-group :prepend="label" :append="unit">
        <b-input-group-prepend>
            <slot name="prepend"></slot>
        </b-input-group-prepend>
        <b-form-input :id="id" :name="name" :type="type" v-validate="validate"></b-form-input>
        <span class="errmsg" v-show="errors.has(name)">{{ errors.first(name) }}</span>
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

<style lang="less">
.input-group{
    // .form-control{
    //     border-radius: 0rem .25rem .25rem 0rem;
    // }
    .errmsg{
        position: absolute;
        background-color: #d65b5b;
        height: 18px;
        line-height: 18px;
        top: 105%;
        left: 0px;
        right: 0px;
        color: #fff;
        font-size: 13px;
        padding: 0px 10px;
        z-index: 111;
        border-radius: (3px);
        &:after{
            content: '';
            position: absolute;
            top: -5px;
            left: 0px;
            right: 0px;
            margin: auto;
            width:0; 
            height:0; 
            border-left:6px solid transparent;
            border-right:6px solid transparent;
            border-bottom:6px solid #d65b5b;
        }
    }
}
</style>


