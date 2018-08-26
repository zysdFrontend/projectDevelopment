<template>
    <b-input-group class="combotree-group" :prepend="label">
        <div class="form-control">
            <treeselect :options="options" :name="name" :multiple="multiple"/>
        </div>
    </b-input-group>
</template>

<script>
import util from '../modules/util'
export default {
    props: {
        id: {
            type: String,
            default: 'comboboxtree_' + util.getRandom(8)
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
        multiple: {
            type: Boolean,
            default: false
        },
        url: {
            type: String
        },
        name: {
            type: String
        }
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

<style lang="less">
.combotree-group{
    .form-control{
        padding: 0px;
        .vue-treeselect{
            display: inline-block;
            .vue-treeselect__control{
                border: none;
            }
        }
    }
}
</style>


