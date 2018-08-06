<template>
<div :id="id" class="myTree" :class="extendClass" :style="extendStyle">\
    <ul>
        <tree-node></tree-node>
    </ul>
</div>    
</template>

<script>
import treeNode from './treeNode.vue';
export default {
    props: {

    },
    components: [
        treeNode
    ],
    data: {

    },
    mounted: function(){

    }
}
</script>

<style lang="less" scoped>

</style>


