<template>
    <table :id="id">
        <thead>
            <tr>
                <slot></slot>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</template>

<script>
import util from "../modules/util";
export default {
  props: {
    id: {
      default: function() {
        return "table_" + util.getRandom(8);
      }
    },
    classes: {
      type: String,
      default: "table table-hover"
    },
    sortClass: {
      type: String
    },
    height: {
      type: Number
    },
    Text: {
      type: String,
      default: "-"
    },
    striped: {
      type: Boolean,
      default: false
    },
    sortName: {
      type: String
    },
    sortOrder: {
      type: String,
      default: "asc"
    },
    sortStable: {
      type: Boolean,
      default: false
    },
    rememberOrder: {
      type: Boolean,
      default: false
    },
    iconsPrefix: {
      type: String,
      default: "glyphicon"
    },
    iconSize: {
      type: String
    },
    buttonsClass: {
      type: String,
      default: "default"
    },
    icons: {
      type: Object
    },
    columns: {
      type: Array,
      default: function() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    dataField: {
      type: String,
      default: "rows"
    },
    totalField: {
      type: String,
      default: "total"
    },
    ajax: {
      type: Object
    },
    method: {
      type: String,
      default: "get"
    },
    url: {
      type: String
    },
    cache: {
      type: Boolean,
      default: true
    },
    contentType: {
      type: String,
      default: "application/json"
    },
    dataType: {
      type: String,
      default: "json"
    },
    ajaxOptions: {
      type: Object,
      default: function() {
        return {};
      }
    },
    queryParams: {
      type: Object
    },
    queryParamsType: {
      type: String,
      default: "limit"
    },
    responseHandler: {
      type: Object
    },
    pagination: {
      type: Boolean,
      default: false
    },
    paginationLoop: {
      type: Boolean,
      default: true
    },
    onlyInfoPagination: {
      type: Boolean,
      default: false
    },
    sidePagination: {
      type: String,
      default: "client"
    },
    pageNumber: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageList: {
      type: Array,
      default: function() {
        return [10, 25, 50, 100];
      }
    },
    selectItemName: {
      type: String,
      default: "btSelectItem"
    },
    smartDisplay: {
      type: Boolean,
      default: true
    },
    escape: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    searchOnEnterKey: {
      type: Boolean,
      default: false
    },
    strictSearch: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: ""
    },
    searchTimeOut: {
      type: Number,
      default: 500
    },
    trimOnSearch: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: false
    },
    showColumns: {
      type: Boolean,
      default: false
    },
    showRefresh: {
      type: Boolean,
      default: false
    },
    showToggle: {
      type: Boolean,
      default: false
    },
    showPaginationSwitch: {
      type: Boolean,
      default: false
    },
    showFullscreen: {
      type: Boolean,
      default: false
    },
    minimumCountColumns: {
      type: Number,
      default: 1
    },
    idField: {
      type: String
    },
    uniqueId: {
      type: String
    },
    cardView: {
      type: Boolean,
      default: false
    },
    detailView: {
      type: Boolean,
      default: false
    },
    detailFormatter: {
      type: Object
    },
    detailFilter: {
      type: Object
    },
    searchAlign: {
      type: String,
      default: "right"
    },
    buttonsAlign: {
      type: String,
      default: "right"
    },
    toolbarAlign: {
      type: String,
      default: "left"
    },
    paginationVAlign: {
      type: String,
      default: "bottom"
    },
    paginationHAlign: {
      type: String,
      default: "right"
    },
    paginationDetailHAlign: {
      type: String,
      default: "left"
    },
    paginationPreText: {
      type: String,
      default: "‹"
    },
    paginationNextText: {
      type: String,
      default: "›"
    },
    clickToSelect: {
      type: Boolean,
      default: false
    },
    ignoreClickToSelectOn: {
      type: Object
    },
    singleSelect: {
      type: Boolean,
      default: false
    },
    toolbar: {
      type: String
    },
    buttonsToolbar: {
      type: String
    },
    checkboxHeader: {
      type: Boolean,
      default: true
    },
    maintainSelected: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: true
    },
    silentSort: {
      type: Boolean,
      default: true
    },
    rowStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    rowAttributes: {
      type: Object,
      default: function() {
        return {};
      }
    },
    customSearch: {
      type: Object
    },
    customSort: {
      type: Object
    },
    locale: {
      type: String
    },
    footerStyle: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {},
  data: () => {
    return {
      children: []
    };
  },
  methods: {},
  mounted: function() {
    var children = this.$children;
    var columns = [];
    for (var i = 0; i < children.length; i++) {
      var option = {
        radio: children[i].radio,
        checkbox: children[i].checkbox,
        field: children[i].field,
        title: children[i].title,
        titleTooltip: children[i].titleTooltip,
        class: children[i].myClass,
        rowspan: children[i].rowspan,
        colspan: children[i].colspan,
        align: children[i].align,
        halign: children[i].halign,
        falign: children[i].falign,
        valign: children[i].valign,
        width: children[i].width,
        sortable: children[i].sortable,
        order: children[i].order,
        visible: children[i].visible,
        cardVisible: children[i].cardVisible,
        switchable: children[i].switchable,
        clickToSelect: children[i].clickToSelect,
        formatter: children[i].formatter,
        footerFormatter: children[i].footerFormatter,
        events: children[i].events,
        sorter: children[i].sorter,
        sortName: children[i].sortName,
        cellStyle: children[i].cellStyle,
        searchable: children[i].searchable,
        searchFormatter: children[i].searchFormatter,
        escape: children[i].escape,
        showSelectTitle: children[i].showSelectTitle
      };
      columns.push(option);
    }

    var tableOptions = {
      columns: columns,
      classes: this.classes,
      sortClass: this.sortClass,
      height: this.height,
      Text: this.Text,
      striped: this.striped,
      sortName: this.sortName,
      sortOrder: this.sortOrder,
      sortStable: this.sortStable,
      rememberOrder: this.rememberOrder,
      iconsPrefix: this.iconsPrefix,
      iconSize: this.iconSize,
      buttonsClass: this.buttonsClass,
      icons: this.icons,
      data: this.data,
      dataField: this.dataField,
      totalField: this.totalField,
      ajax: this.ajax,
      method: this.method,
      url: this.url,
      cache: this.cache,
      contentType: this.contentType,
      dataType: this.dataType,
      ajaxOptions: this.ajaxOptions,
      queryParams: this.queryParams,
      queryParamsType: this.queryParamsType,
      responseHandler: this.responseHandler,
      pagination: this.pagination,
      paginationLoop: this.paginationLoop,
      onlyInfoPagination: this.onlyInfoPagination,
      sidePagination: this.sidePagination,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      pageList: this.pageList,
      selectItemName: this.selectItemName,
      smartDisplay: this.smartDisplay,
      escape: this.escape,
      search: this.search,
      searchOnEnterKey: this.searchOnEnterKey,
      strictSearch: this.strictSearch,
      searchText: this.searchText,
      searchTimeOut: this.searchTimeOut,
      trimOnSearch: this.trimOnSearch,
      showHeader: this.showHeader,
      showFooter: this.showFooter,
      showColumns: this.showColumns,
      showRefresh: this.showRefresh,
      showToggle: this.showToggle,
      showPaginationSwitch: this.showPaginationSwitch,
      showFullscreen: this.showFullscreen,
      minimumCountColumns: this.minimumCountColumns,
      idField: this.idField,
      uniqueId: this.uniqueId,
      cardView: this.cardView,
      detailView: this.detailView,
      detailFormatter: this.detailFormatter,
      detailFilter: this.detailFilter,
      searchAlign: this.searchAlign,
      buttonsAlign: this.buttonsAlign,
      toolbarAlign: this.toolbarAlign,
      paginationVAlign: this.paginationVAlign,
      paginationHAlign: this.paginationHAlign,
      paginationDetailHAlign: this.paginationDetailHAlign,
      paginationPreText: this.paginationPreText,
      paginationNextText: this.paginationNextText,
      clickToSelect: this.clickToSelect,
      ignoreClickToSelectOn: this.ignoreClickToSelectOn,
      singleSelect: this.singleSelect,
      toolbar: this.toolbar,
      buttonsToolbar: this.buttonsToolbar,
      checkboxHeader: this.checkboxHeader,
      maintainSelected: this.maintainSelected,
      sortable: this.sortable,
      silentSort: this.silentSort,
      rowStyle: this.rowStyle,
      rowAttributes: this.rowAttributes,
      customSearch: this.customSearch,
      customSort: this.customSort,
      locale: this.locale,
      footerStyle: this.footerStyle
    };
    console.log(tableOptions);
    $(this.$el).bootstrapTable(tableOptions);
  }
};
</script>

<style lang="less" scoped>
</style>


