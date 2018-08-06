<template>
<label class="myRadio" :class="[{checked: model==value,disabled:disabled}, extendClass]" :style="extendStyle">
    <input type="radio" :name="name" :value="value" :disabled="disabled" @change="myChange" :checked="checked">
    {{label}}
</label>  
</template>

<script>
export default {
    model: {
        prop: 'model',
        event: 'change'
    },
    props: {
        'checked': {
            type: Boolean,
            default: false,
        },
        'value': {
            type: [String, Number],
            require: true
        },
        'model': {
            type: String,
            require: true
        },
        'disabled': {
            type: Boolean,
            default: false
        },
        'name': {
            type: String,
            default: ''
        },
        'label': {
            type: String,
            default: ''
        },
        'extendClass': {
            type: Object,
            default: function(){
                return {};
            }
        },
        'extendStyle': {
            type: Object,
            default: function(){
                return {};
            }
        },
        'onChange': {
            type: Object
        }
    },
    data: function(){
        return {};
    },
    methods: {
        myChange: function(e){
            var input = e.target;
            var val = input.value;
            if(typeof this.onChange == 'function'){
                this.onChange(val, input);
            }
        }
    },
    mounted: function(){
        
    }
}
</script>

<style lang="less" scoped>
.myRadio{
    display: inline-block;
    padding: 0px 10px 0px 0px;
    cursor: pointer;
    input{
        margin: 0px;
    }
}
</style>


