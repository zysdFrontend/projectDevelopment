<template>
	<div id="api">
			<div class="leftMenus">
				<ul>
					<li v-for="x in menusData" :key="x.id">
						<a :href="'#panel_'+x.page">
							<i class="glyphicon glyphicon-tag"></i>
							<span v-text="x.name"></span>
						</a>
					</li>
				</ul>
			</div>
			<div class="content_body">
				<div id="panel_datagrid" class="component_panel">
					<div class="title">
						<h4>表格 - datagrid</h4>
					</div>
					<div class="example">
						<my-table url="json/table.json" :click-to-select="true" :striped="true" :pagination="true">
							<column :checkbox="true"></column>
							<column title="项目编号" field="projectCode"></column>
							<column title="项目名称" field="projectName"></column>
							<column title="融资金额" field="money"></column>
							<column title="融资期限" field="deadLine"></column>
							<column title="项目经理" field="manager"></column>
							<column title="申请时间" field="createTime"></column>
						</my-table>
						<pre class="language-markup">
							<code v-html="code_myTable">
								
							</code>
						</pre>
					</div>
				</div>
				<div id="panel_textbox" class="component_panel">
					<div class="title">
						<h4>文本框 - textbox</h4>
					</div>
					<div class="example">
						<p>普通大小：</p>
						<textbox label="用户名"></textbox>
						<br>
						<p>小型：</p>
						<textbox label="用户名" size="sm"></textbox>
						<br>
						<p>大型：</p>
						<textbox label="用户名" size="lg"></textbox>
						<br>
						<p>密码类型：</p>
						<textbox label="用户名" type="password"></textbox>
						<br>
						<p>占六分之一：</p>
						<textbox label="用户名" my-class="col-xs-2"></textbox>
						<br>
						<p>占四分之一：</p>
						<textbox label="用户名" my-class="col-xs-3"></textbox>
						<br>
						<p>占三分之一：</p>
						<textbox label="用户名" my-class="col-xs-4"></textbox>
						<br>
						<p>占二分之一：</p>
						<textbox label="用户名" my-class="col-xs-6"></textbox>
						<br>
						<p>占三分之二：</p>
						<textbox label="用户名" my-class="col-xs-9"></textbox>
						<br>
						<p>占100%：</p>
						<textbox label="用户名" my-class="col-xs-12"></textbox>
						<br>
						<p>有单位：</p>
						<textbox label="金额" my-class="col-xs-12" unit="万元"></textbox>
						<br>
						<p>有按钮：</p>
						<textbox label="试试点右侧按钮" my-class="col-xs-12">
							<button class="btn btn-default" type="button" slot="behind">点我啊！</button>
						</textbox>
					</div>
					<pre class="language-markup">
							<code v-html="code_textbox">
								
							</code>
						</pre>
				</div>


				<div id="panel_combobox" class="component_panel">
					<div class="title">
						<h4>下拉框 - combobox</h4>
					</div>
					<div class="example">
						<combobox id="combobox_1" width="250px" :data="[{'id':'1','text':'1'},{'id':'2','text':'2'}]"></combobox>
						<br/><br/>
						<combobox id="combobox_2" width="180px" :data="[{'id':'1','text':'1'},{'id':'2','text':'2'}]" :extend-option="{minimumResultsForSearch:1}"></combobox>
						<br/><br/>
						<combobox id="combobox_3" width="180px" url="json/combobox.json" :extend-option="{minimumResultsForSearch:1}"></combobox>
					</div>
					<pre class="language-markup">
							<code v-html="code_combobox">
								
							</code>
						</pre>
				</div>

				<div id="panel_datebox" class="component_panel">
					<div class="title">
						<h4>日期选择 - datebox</h4>
					</div>
					<div class="example">
						<datepicker placeholder="请选择"></datepicker>
					</div>
					<pre class="language-markup">
							<code v-html="code_datebox">
								
							</code>
						</pre>
				</div>

				<div id="panel_my-button" class="component_panel">
					<div class="title">
						<h4>按钮 - my-button</h4>
					</div>
					<div class="example">
						<my-button size="xs" text="超小按钮"></my-button>
						<my-button size="sm" text="小按钮"></my-button>
						<my-button text="默认尺寸按钮"></my-button>
						<my-button size="lg" text="大按钮"></my-button>
						<br><br>
						<my-button :block="true" text="整栏按钮"></my-button>
						<br>
						<my-button text="蓝色按钮" button-type="primary"></my-button>
						<my-button text="绿色按钮" button-type="success"></my-button>
						<my-button text="浅蓝色按钮" button-type="info"></my-button>
						<my-button text="黄色按钮" button-type="warning"></my-button>
						<my-button text="红色按钮" button-type="danger"></my-button>
						<br><br>
						<my-button text="禁用按钮" button-type="primary" :disabled="true"></my-button>
						<br><br>
						<button-group>
							<my-button text="按钮1"></my-button>
							<my-button text="按钮2"></my-button>
							<my-button text="按钮3" button-type="primary"></my-button>
							<my-button text="按钮4" button-type="success"></my-button>
							<my-button text="按钮5" button-type="warning"></my-button>
							<my-button text="按钮6" button-type="danger"></my-button>
						</button-group>
						<br><br>
						<button-group>
							<my-button text="按钮下拉菜单" dropdown="true"></my-button>
							<ul class="dropdown-menu">
								<li><a>菜单一</a></li>
								<li><a>菜单二</a></li>
								<li><a>菜单三</a></li>
								<li role="separator" class="divider"></li>
								<li><a>菜单四</a></li>
							</ul>
						</button-group>

					</div>
					<pre class="language-markup">
							<code v-html="code_myButton">
								
							</code>
						</pre>
				</div>


				<div id="panel_navigation" class="component_panel">
					<div class="title">
						<h4>导航栏 - navigation</h4>
					</div>
					<div class="example">
						<navigation :navi-data="naviData" :click="naviClick"></navigation>
					</div>
					<pre class="language-markup">
							<code v-html="code_navigation">
								
							</code>
						</pre>
				</div>


				<div id="panel_tab" class="component_panel">
					<div class="title">
						<h4>选项卡 - tab</h4>
					</div>
					<div class="example">
						<tab>
							<tab-panel :active="true" name="home" title="首页">
								<div>首页</div>
							</tab-panel>
							<tab-panel name="myProject" title="我的项目">
								<div>我的项目</div>
							</tab-panel>
							<tab-panel name="projectCenter" title="项目中心">
								<div>项目中心</div>
							</tab-panel>
						</tab>
					</div>
					<pre class="language-markup">
							<code v-html="code_tab">
								
							</code>
						</pre>
				</div>


				<div id="panel_modal" class="component_panel">
					<div class="title">
						<h4>模态框 - modal</h4>
					</div>
					<div class="example">
						<my-button text="点击打开模态框" data-toggle="modal" data-target="#myModal"></my-button>
						<br><br>
						<my-button text="点击打开远程加载模态框" data-toggle="modal" data-target="#myModal_2"></my-button>
						<br><br>
						<my-button text="打开才加载内容" data-toggle="modal" data-target="#myModal_3"></my-button>
						<modal title="模态框" id="myModal" :buttons="modalButtons">
							<p>阿萨德法师打发</p>
							<p>阿萨德法师打发</p>
							<p>阿萨德法师打发</p>
							<p>阿萨德法师打发</p>
							<p>阿萨德法师打发</p>
						</modal>
						<modal title="模态框2" id="myModal_2" :buttons="modalButtons" url="json/test.html"></modal>
						<modal title="模态框3" id="myModal_3" :buttons="modalButtons" url="json/test.html" :lazyload="true"></modal>
					</div>
					<pre class="language-markup">
							<code v-html="code_modal">
								
							</code>
						</pre>
				</div>


				<div id="panel_tooltip" class="component_panel">
					<div class="title">
						<h4>工具提示 - tooltip</h4>
					</div>
					<div class="example">
						<a href="javascript:void(0)" v-tooltip title="悬停提示框内容...">鼠标移上去试试</a>
						<br>
						<a href="javascript:void(0)" v-tooltip="{placement:'bottom'}" title="悬停提示框内容...">下方显示</a>
						<br>
						<a href="javascript:void(0)" v-tooltip="{placement:'left'}" title="悬停提示框内容...">左侧显示</a>
						<br>
						<a href="javascript:void(0)" v-tooltip="{placement:'right'}" title="悬停提示框内容...">右侧显示</a>
						<br>
						<a href="javascript:void(0)" v-tooltip="{html:true}" title="<h1>123</h1><p>abc</p>">显示html内容</a>
					</div>
					<pre class="language-markup">
							<code v-html="code_tooltip">
								
							</code>
						</pre>
				</div>


				<div id="panel_checkbox" class="component_panel">
					<div class="title">
						<h4>复选框 - checkbox</h4>
					</div>
					<div class="example">
						<checkbox label="苹果" name="fruit" value="apple"></checkbox>
						<checkbox label="芒果" name="fruit" value="mongo" :disabled="true"></checkbox>
						<checkbox label="香蕉" name="fruit" value="banana"></checkbox>
						<checkbox label="柠檬" name="fruit" value="lemon" :checked="true"></checkbox>
					</div>
					<pre class="language-markup">
							<code v-html="code_checkbox">
								
							</code>
						</pre>
				</div>


				<div id="panel_radio" class="component_panel">
					<div class="title">
						<h4>单选框 - radio</h4>
					</div>
					<div class="example">
						<radio label="苹果" name="fruit" value="apple"></radio>
						<radio label="芒果" name="fruit" value="mongo" :disabled="true"></radio>
						<radio label="香蕉" name="fruit" value="banana"></radio>
						<radio label="柠檬" name="fruit" value="lemon" :checked="true"></radio>
					</div>
					<pre class="language-markup">
							<code v-html="code_radio">
								
							</code>
						</pre>
				</div>

				<div id="panel_tree" class="component_panel">
					<div class="title">
						<h4>树 - tree</h4>
					</div>
					<div class="example">
						<tree id="tree_123" :custom-options="myCustomOptions" :nodes="treeDisplayData"></tree>
					</div>
					<pre class="language-markup">
							<code v-html="code_tree">
								
							</code>
						</pre>
				</div>

				<div id="panel_validate" class="component_panel">
					<div class="title">
						<h4>验证 - validate</h4>
					</div>
					<div class="example">
						<div class="row">
							<textbox validate="email" name="email" my-class="col-xs-6" label="邮箱地址"></textbox>
							<br/><br/>
							<textbox validate="numeric" name="numeric" my-class="col-xs-6" label="手机"></textbox>
						</div>
					</div>
					<pre class="language-markup">
							<code v-html="code_validate">
								
							</code>
						</pre>
				</div>

				<div id="panel_contextmenu" class="component_panel">
					<div class="title">
						<h4>右键 - contextmenu</h4>
					</div>
					<div class="example">
						<div class="row">
							<my-button text="右键试试" v-contextmenu="{target:'#dropdown_1'}"></my-button>
							<dropdown-menu id="dropdown_1" :options="dropdownMenuOptions"></dropdown-menu>
						</div>
					</div>
					<pre class="language-markup">
							<code v-html="code_contextmenu">
								
							</code>
						</pre>
				</div>

				<div id="panel_numberbox" class="component_panel">
					<div class="title">
						<h4>数字框 - numberbox</h4>
					</div>
					<div class="example">
						<numberbox></numberbox>
					</div>
					<pre class="language-markup">
							<code v-html="code_numberbox">
								
							</code>
						</pre>
				</div>
			</div>
		</div>
</template>

<script>
import textbox from "./../components/textbox.vue";
import myButton from "./../components/myButton.vue";
import buttonGroup from "./../components/buttonGroup.vue";
import navigation from "./../components/navigation.vue";
import tab from "./../components/tab.vue";
import tabPanel from "./../components/tabPanel.vue";
import modal from "./../components/modal.vue";
import myTable from "./../components/myTable.vue";
import column from "./../components/column.vue";
import checkbox from "./../components/checkbox.vue";
import radio from "./../components/radio.vue";
import combobox from "./../components/combobox.vue";
import datepicker from "vuejs-datepicker";
import tree from "vuejs-tree";
import numberbox from "./../components/numberbox.vue";
import dropdownMenu from "./../components/dropdownMenu.vue";

import Code_myTable from "./../code/myTable.html";
import Code_textbox from "./../code/textbox.html";
import Code_checkbox from "./../code/checkbox.html";
import Code_combobox from "./../code/combobox.html";
import Code_contextmenu from "./../code/contextmenu.html";
import Code_datebox from "./../code/datebox.html";
import Code_modal from "./../code/modal.html";
import Code_myButton from "./../code/myButton.html";
import Code_navigation from "./../code/navigation.html";
import Code_numberbox from "./../code/numberbox.html";
import Code_radio from "./../code/radio.html";
import Code_tab from "./../code/tab.html";
import Code_tooltip from "./../code/tooltip.html";
import Code_tree from "./../code/tree.html";
import Code_validate from "./../code/validate.html";
const Prism = require("prismjs");
import 'prismjs/themes/prism.css'

export default {
  props: {},
  computed: {},
  components: {
    textbox,
    myButton,
    buttonGroup,
    navigation,
    tab,
    tabPanel,
    modal,
    myTable,
    column,
    checkbox,
    radio,
    combobox,
    datepicker,
    tree,
    numberbox,
    dropdownMenu
  },
  data: () => {
    return {
      code_myTable: Code_myTable,
      code_textbox: Code_textbox,
      code_checkbox: Code_checkbox,
      code_combobox: Code_combobox,
      code_contextmenu: Code_contextmenu,
      code_datebox: Code_datebox,
      code_modal: Code_modal,
      code_myButton: Code_myButton,
      code_navigation: Code_navigation,
      code_numberbox: Code_numberbox,
      code_radio: Code_radio,
      code_tab: Code_tab,
      code_tooltip: Code_tooltip,
      code_tree: Code_tree,
      code_validate: Code_validate,
      dropdownMenuOptions: [
        {
          name: "菜单一",
          icon: "fa fa-thumbs-o-up"
        },
        {
          name: "菜单二",
          icon: "fa fa-tags"
        }
      ],
      myCustomOptions: {
        icon: "fa-folder",
        iconColor: "#007AD5",
        selectedIcon: "fa-folder-open",
        selectedIconColor: "#2ECC71",
        addElemIcon: "fa-plus",
        addElemIconColor: "#007AD5",
        style: {
          tree: {
            border: "none"
          },
          row: {
            cursor: "pointer",
            child: {
              height: "35px"
            }
          }
        }
      },
      treeDisplayData: [
        {
          text: "Root 1",
          nodes: [
            {
              text: "Child 1",
              nodes: [
                {
                  text: "Grandchild 1"
                },
                {
                  text: "Grandchild 2"
                }
              ]
            },
            {
              text: "Child 2"
            }
          ]
        },
        {
          text: "Root 2"
        }
      ],
      menusData: [
        {
          id: "1",
          name: "表格(datagrid)",
          page: "datagrid"
        },
        {
          id: "2",
          name: "文本框(textbox)",
          page: "textbox"
        },
        {
          id: "3",
          name: "下拉框(combobox)",
          page: "combobox"
        },
        {
          id: "4",
          name: "日期选择(datebox)",
          page: "datebox"
        },
        {
          id: "5",
          name: "按钮(my-button)",
          page: "my-button"
        },
        {
          id: "6",
          name: "导航栏(navigation)",
          page: "navigation"
        },
        {
          id: "7",
          name: "选项卡(tab)",
          page: "tab"
        },
        {
          id: "8",
          name: "模态框(modal)",
          page: "modal"
        },
        {
          id: "9",
          name: "工具提示(tooltip)",
          page: "tooltip"
        },
        {
          id: "10",
          name: "复选框(checkbox)",
          page: "checkbox"
        },
        {
          id: "11",
          name: "单选框(radio)",
          page: "radio"
        },
        {
          id: "12",
          name: "树(tree)",
          page: "tree"
        },
        {
          id: "13",
          name: "验证(validate)",
          page: "validate"
        },
        {
          id: "14",
          name: "数字框(numberbox)",
          page: "numberbox"
        }
      ],
      naviData: [
        {
          id: "1",
          name: "首页"
        },
        {
          id: "2",
          name: "融资担保"
        },
        {
          id: "3",
          name: "我的项目"
        }
      ],
      modalButtons: [
        {
          name: "保存",
          click: 'alert("保存")',
          buttonType: "primary",
          icon: "glyphicon glyphicon-floppy-saved"
        },
        {
          name: "提交",
          click: 'alert("提交")',
          buttonType: "primary",
          icon: "glyphicon glyphicon-ok"
        },
        {
          name: "重置",
          click: 'alert("重置")'
        },
        {
          name: "关闭",
          click: 'alert("关闭")'
        }
      ]
    };
  },
  methods: {
    naviClick: function(id, name) {
      alert(id);
      alert(name);
    },
    highlight: function(lang, sourceCode) {
      // 代码高亮
      const language = Prism.languages[lang] || Prism.languages.autoit;
      return Prism.highlight(sourceCode, language);
    }
  },
  mounted: function() {
    this.code_myTable = this.highlight("html", this.code_myTable);
    this.code_textbox = this.highlight("html", this.code_textbox);
    this.code_radio = this.highlight("html", this.code_radio);
    this.code_tab = this.highlight("html", this.code_tab);
    this.code_tooltip = this.highlight("html", this.code_tooltip);
    this.code_tree = this.highlight("html", this.code_tree);
    this.code_validate = this.highlight("html", this.code_validate);
    this.code_checkbox = this.highlight("html", this.code_checkbox);
    this.code_combobox = this.highlight("html", this.code_combobox);
    this.code_contextmenu = this.highlight("html", this.code_contextmenu);
    this.code_datebox = this.highlight("html", this.code_datebox);
    this.code_modal = this.highlight("html", this.code_modal);
    this.code_myButton = this.highlight("html", this.code_myButton);
    this.code_navigation = this.highlight("html", this.code_navigation);
    this.code_numberbox = this.highlight("html", this.code_numberbox);
  }
};
</script>

<style lang="less" scoped>
#api {
  height: 100%;
	width: 100%;
	background-color: #fff;
	padding-left: 180px;
  .leftMenus {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 180px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    ul {
      padding: 20px 0px;
      li {
        a {
          display: block;
          height: 45px;
          line-height: 45px;
          padding: 0px 15px;
          font-size: 15px;
          color: #678;
          i,
          span {
            display: inline-block;
          }
          &:hover {
            background-color: #f6f7f8;
            cursor: pointer;
          }
        }
      }
    }
  }
  .content_body {
    height: 100%;
    width: 100%;
    padding: 20px;
    padding-left: 30px;
    overflow-x: hidden;
    overflow-y: auto;
    .title {
      border-bottom: 1px solid #f1f2f3;
      padding-left: 2px;
      h4 {
        color: #678;
      }
    }
    .example {
      min-height: 100px;
      padding: 20px;
    }
  }
}
</style>