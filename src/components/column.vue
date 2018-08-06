<template>
    <th v-text="title"></th>
</template>

<script>
import util from "../modules/util";
export default {
    props: {
        radio: {
            type: Boolean,
            default: false
        },
        checkbox: {
            type: Boolean,
            default: false
        },
        field: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        titleTooltip: {
            type: String,
            default: ""
        },
        myClass: {
            type: String,
            default: ""
        },
        rowspan: {
            type: Number
        },
        colspan: {
            type: Number
        },
        align: {
            type: String,
            default: ""
        },
        halign: {
            type: String,
            default: ""
        },
        falign: {
            type: String,
            default: ""
        },
        valign: {
            type: String,
            default: ""
        },
        width: {
            type: Number
        },
        sortable: {
            type: Boolean,
            default: false
        },
        order: {
            type: String,
            default: "asc"
        },
        visible: {
            type: Boolean,
            default: true
        },
        cardVisible: { 
            type: Boolean, 
            default: true 
        },
        switchable: { 
            type: Boolean, 
            default: true 
        },
        clickToSelect: { 
            type: Boolean, 
            default: true 
        },
        formatter: {},
        footerFormatter: {},
        events: {},
        sorter: {},
        sortName: {},
        cellStyle: {},
        searchable: {},
        searchFormatter: {},
        escape: {},
        showSelectTitle: {}
    },
    computed: {

    },
    data: () => {
        return {};
    },
    methods: {

    },
    mounted: function() {

    }
};
</script>

<style lang="less" scoped>
</style>


