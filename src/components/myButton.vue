<template>
    <button class="btn" :class="classArray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :type="type">
        <span v-text="text"></span>
        <span class="caret" v-if="dropdown"></span>
    </button>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: function(){
                return 'button_' + util.getRandom(8)
            }
        },
        dropdown: {},
        buttonType: {
            default: 'default'
        },
        block: {
            default: false
        },
        text: {},
        type: {},
        size: {},
        myClass: {},
        label: {},
        placeholder: {},
        name: {},
        disabled: {
            default: false
        }
    },
    computed: {
        isBlock: function(){
            if(this.block)return 'block';
            else return '';
        },
        classArray: function(){
            return [
                this.myClass,
                'btn-' + this.buttonType,
                {
                    'disabled': this.disabled
                },
                'btn-' + this.size,
                'btn-' + this.isBlock,
                {
                    'dropdown-toggle': this.dropdown
                }
            ]
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
</style>


