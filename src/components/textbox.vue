<template>
    <div :id="id" class="input-group" :class="['input-group-'+size,myClass]">
        <span class="input-group-addon" :id="'label_'+id" v-text="label"></span>
        <input v-validate="validate" :name="name" :type="type" class="form-control" :placeholder="setPlaceholder" :aria-describedby="'label_'+id">
        <span class="errMsg" v-show="errors.has(name)">{{ errors.first(name) }}</span>
        <span v-if="unit" class="input-group-addon unit" v-text="unit"></span>
        <span class="input-group-btn">
            <slot name="behind"></slot>
        </span>
    </div>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: function(){
                return 'textbox_' + util.getRandom(8)
            }
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
        unit: {},
        name: {}
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
            model: ''
        }
    },
    mounted: function(){
    }
}
</script>

<style lang="less" scoped>
.input-group{
    .unit{
        border-left: 0px;
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


