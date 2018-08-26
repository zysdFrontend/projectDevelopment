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
                    <div class="formDiv_2">
                        <textbox label="默认文本框"></textbox>

                        <textbox label="带单位" unit="万元"></textbox>

                        <textbox label="带按钮">
                            <b-btn @click="alert" variant="secondary" slot="append">点我试试</b-btn>
                        </textbox>

                        <textbox label="带下拉选项">
                            <b-dropdown text="选项" variant="secondary" slot="append">
                                <b-dropdown-item>打开项目</b-dropdown-item>
                                <b-dropdown-item>打开流程</b-dropdown-item>
                            </b-dropdown>
                        </textbox>

                        <textbox label="数字框" type="number"></textbox>

                        <textbox label="小型文本框" size="sm"></textbox>

                        <textbox label="小型文本框" size="lg"></textbox>
                    </div>
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
                    <combobox label="下拉框" :options="[{'value':'1','text':'1'},{'value':'2','text':'2'}]"></combobox>
                    <br/>
                    <combobox label="可搜索" :options="[{'value':'1','text':'1'},{'value':'2','text':'2'}]" :extend-option="{minimumResultsForSearch:1}"></combobox>
                    <br/>
                    <combobox label="远程加载数据" url="json/combobox.json" :extend-option="{minimumResultsForSearch:1}"></combobox>
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
                    <div class="formDiv_2">
                        <datetimepicker label="日期选择框"></datetimepicker>                       
                        <datetimepicker label="无清除按钮" :allow-clear="false"></datetimepicker>
                        <datetimepicker label="可选择时间" dateFormat="Y-m-d H:i" :enableTime="true"></datetimepicker>                        
                        <datetimepicker label="可选择时间秒" dateFormat="Y-m-d H:i:S" :enableTime="true" :enableSeconds="true"></datetimepicker>                        
                        <datetimepicker label="可选择时间(24小时制)" dateFormat="Y-m-d H:i" :time_24hr="true" :enableTime="true"></datetimepicker>                        
                        <datetimepicker label="设置最小日期" minDate="2018-07-20"></datetimepicker>                        
                        <datetimepicker label="设置最大日期" maxDate="2018-08-30"></datetimepicker>                        
                        <datetimepicker label="禁止某些日期" :disable="['2018-08-30','2018-08-20',{from: '2018-07-01',to: '2018-07-20'}]"></datetimepicker>
                        <datetimepicker label="仅放开某些日期" :enable="['2018-08-30','2018-08-20',{from: '2018-07-01',to: '2018-07-20'}]"></datetimepicker>
                        <datetimepicker label="日期多选" mode="multiple"></datetimepicker>
                        <datetimepicker label="选择日期范围" mode="range"></datetimepicker>
                        <datetimepicker label="只选择时间" dateFormat="H:i" :enableTime="true" :noCalendar="true"></datetimepicker>
                    </div>
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
                    <b-btn variant="primary">primary</b-btn>
                    <b-btn variant="secondary">secondary</b-btn>
                    <b-btn variant="success">success</b-btn>
                    <b-btn variant="warning">warning</b-btn>
                    <b-btn variant="danger">danger</b-btn>
                    <b-btn variant="info">info</b-btn>
                    <b-btn variant="light">light</b-btn>
                    <b-btn variant="dark">dark</b-btn>
                    <br/><br/>
                    <b-btn variant="outline-primary">primary</b-btn>
                    <b-btn variant="outline-secondary">secondary</b-btn>
                    <b-btn variant="outline-success">success</b-btn>
                    <b-btn variant="outline-warning">warning</b-btn>
                    <b-btn variant="outline-danger">danger</b-btn>
                    <b-btn variant="outline-info">info</b-btn>
                    <b-btn variant="outline-light">light</b-btn>
                    <b-btn variant="outline-dark">dark</b-btn>
                    <br/><br/>
                    <b-btn variant="primary" size="sm">小型按钮</b-btn>
                    <b-btn variant="primary" size="lg">大型按钮</b-btn>
                    <b-btn variant="primary" disabled>禁用按钮</b-btn>
                    <br/><br/>
                    <b-btn variant="outline-secondary" block>通栏按钮</b-btn>
                    <br/><br/>
                    <b-dropdown right text="下拉按钮">
                        <b-dropdown-item>选项1</b-dropdown-item>
                        <b-dropdown-item>选项2</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>选项3</b-dropdown-item>
                    </b-dropdown>
                    <br/><br/>
                    <b-button-group>
                        <b-button>按钮组1</b-button>
                        <b-button>按钮组2</b-button>
                        <b-button>按钮组3</b-button>
                        <b-button>按钮组4</b-button>
                        <b-button>按钮组5</b-button>
                    </b-button-group>
                    <br/><br/>
                    <b-button-group vertical>
                        <b-button>垂直按钮组1</b-button>
                        <b-button>垂直按钮组2</b-button>
                        <b-button>垂直按钮组3</b-button>
                    </b-button-group>
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
                    <b-breadcrumb :items="[{text: 'XX集团',href: '#'}, {text: 'XX公司',href: '#'}, {text: 'XX部门',active: true}]"/>
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
                    <p>默认选项卡：</p>
                    <b-tabs>
                        <b-tab title="页签1" active>
                            <p class="my-3">内容1</p>
                        </b-tab>
                        <b-tab title="页签2" >
                            <p class="my-3">内容2</p>
                        </b-tab>
                        <b-tab title="禁用页签" disabled>
                            <p class="my-3">内容3</p>
                        </b-tab>
                    </b-tabs>
                    <br><br>
                    <p>卡片选项卡：</p>
                    <b-card no-body>
                        <b-tabs card>
                            <b-tab title="页签1" active>
                                内容1
                            </b-tab>
                            <b-tab title="页签2" >
                                内容2
                            </b-tab>
                            <b-tab title="禁用页签" disabled>
                                内容3
                            </b-tab>
                        </b-tabs>
                    </b-card>
                    <br><br>
                    <p>胶囊选项卡：</p>
                    <b-card no-body>
                        <b-tabs pills card>
                            <b-tab title="页签1" active>
                                内容1
                            </b-tab>
                            <b-tab title="页签2" >
                                内容2
                            </b-tab>
                            <b-tab title="禁用页签" disabled>
                                内容3
                            </b-tab>
                        </b-tabs>
                    </b-card>
                    <br><br>
                    <p>垂直选项卡：</p>
                    <b-card no-body>
                        <b-tabs pills vertical small card>
                            <b-tab title="页签1" active>
                                内容1
                            </b-tab>
                            <b-tab title="页签2" >
                                内容2
                            </b-tab>
                            <b-tab title="禁用页签" disabled>
                                内容3
                            </b-tab>
                        </b-tabs>
                    </b-card>
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
                    <b-btn v-b-modal.modal1>打开模态框</b-btn>
                    <b-modal id="modal1" title="标题">
                        <p class="my-4">Hello!</p>
                    </b-modal>
                    <br/>
                    <b-btn v-b-modal.modal2>隐藏底部按钮的模态框</b-btn>
                    <b-modal id="modal2" title="标题" hide-footer>
                        <p class="my-4">Hello!</p>
                    </b-modal>
                    <br/>
                    <b-btn v-b-modal.modal3>小型模态框</b-btn>
                    <b-modal id="modal3" title="标题" size="sm">
                        <p class="my-4">Hello!</p>
                    </b-modal>
                    <br/>
                    <b-btn v-b-modal.modal4>大型模态框</b-btn>
                    <b-modal id="modal4" title="标题" size="lg">
                        <p class="my-4">Hello!</p>
                    </b-modal>
                    <br/>
                    <b-btn v-b-modal.modal4>居中模态框</b-btn>
                    <b-modal id="modal4" title="标题" centered>
                        <p class="my-4">Hello!</p>
                    </b-modal>
                    <br/>
                    <b-btn v-b-modal.modal5>懒加载模态框</b-btn>
                    <b-modal id="modal5" title="标题" centered :lazy="true">
                        <p class="my-4">Hello!</p>
                    </b-modal>
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
                    <b-btn v-b-tooltip.hover title="提示信息" variant="outline-primary">默认方位</b-btn>
                    <b-btn v-b-tooltip.hover.right title="提示信息" variant="outline-primary">右侧方位</b-btn>
                    <b-btn v-b-tooltip.hover.left title="提示信息" variant="outline-primary">左侧方位</b-btn>
                    <b-btn v-b-tooltip.hover.bottom title="提示信息" variant="outline-primary">底部方位</b-btn>
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
                    <b-form-checkbox v-model="checkboxValue" value="apple" unchecked-value="">apple</b-form-checkbox>
                    <b-form-checkbox v-model="checkboxValue2" value="banana" unchecked-value="">banana</b-form-checkbox>
                    <b-form-checkbox v-model="checkboxValue3" value="orange" unchecked-value="">orange</b-form-checkbox>
                    <p class="my-2">你的选择是：{{checkboxValue}}{{checkboxValue2}}{{checkboxValue3}}</p>
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
                    <b-form-radio-group v-model="radioValue" name="myRadio">
                        <b-form-radio value="apple">apple</b-form-radio>
                        <b-form-radio value="banana">banana</b-form-radio>
                        <b-form-radio value="orange">orange</b-form-radio>
                    </b-form-radio-group>
                    <p class="my-2">你的选择是：{{radioValue}}</p>
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
                    <textbox validate="email" name="email" label="邮箱地址"></textbox>
                    <br/>
                    <textbox validate="numeric" name="numeric" label="手机"></textbox>
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
                        <b-btn variant="primary" v-contextmenu="{target:'#dropdown_1'}">右键试试</b-btn>
                        <dropdown-menu id="dropdown_1" :options="dropdownMenuOptions"></dropdown-menu>
                    </div>
                </div>
                <pre class="language-markup">
                        <code v-html="code_contextmenu">
                            
                        </code>
                    </pre>
            </div>

            <div id="panel_treeselect" class="component_panel">
                <div class="title">
                    <h4>下拉树 - treeselect</h4>
                </div>
                <div class="example">
                    <combotree label="下拉树" :options="treeselectOptions"></combotree>
                    <br/>
                    <combotree label="多选下拉树" :options="treeselectOptions" :multiple="true"></combotree>
                    <!-- <p class="my-2">你的选择是：{{treeselectValue}}</p> -->
                </div>
                <pre class="language-markup">
                        <!-- <code v-html="code_treeselect">
                            
                        </code> -->
                    </pre>
            </div>
        </div>
    </div>
</template>

<script>
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
import "prismjs/themes/prism.css";

export default {
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
      checkboxValue: '',
      checkboxValue2: '',
      checkboxValue3: '',
      radioValue: '',
      treeselectValue: '',
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
          name: "下拉树(treeselect)",
          page: "treeselect"
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
      treeselectOptions: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ]
    };
  },
  methods: {
    alert: function() {
      alert(123);
    },
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
@import "../styles/init.less";
#api {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding-left: 180px;
  .leftMenus {
    position: fixed;
    left: @leftWidth;
    top: @topHeight;
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