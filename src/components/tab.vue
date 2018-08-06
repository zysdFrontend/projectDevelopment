<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li v-for="x in children" :key="x.name" role="presentation" :class="{active:x.active}">
                <a :href="'#tabPanel_'+x.name" :aria-controls="'tabPanel_'+x.name" role="tab" data-toggle="tab" v-text="x.title"></a>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            default: function(){
                return 'tab_' + util.getRandom(8)
            }
        },
    },
    computed: {
    },
    data: () => {
        return {
            children: []
        }
    },
    methods: {
    },
    mounted: function(){
        this.children = this.$children;
    }
}
</script>

<style lang="less" scoped>
</style>


