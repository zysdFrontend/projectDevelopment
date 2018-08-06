<template>
    <div role="tabpanel" class="tab-pane" :class="{active:active}" :id="'tabPanel_'+name">
        <slot></slot>
    </div>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: function(){
                return 'tabPanel_' + util.getRandom(8)
            }
        },
        name: {},
        title: {},
        active: {
            default: false
        }
    },
    computed: {
    },
    data: () => {
        return {
            
        }
    },
    methods: {
    },
    mounted: function(){
    }
}
</script>

<style lang="less" scoped>
</style>


