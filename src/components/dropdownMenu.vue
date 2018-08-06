<template>
    <div class="myDropdown" :id="id" :class="extendClass" :style="extendStyle">
        <ul v-show="showFlag">
            <li v-for="x in options" v-show="!(x.ban===true)" class="menu" :class="{hasChildren:x.children&&x.children.length}" @click.stop.prevent="menuClick($event,x)">
                <i v-if="x.icon" class="icon iconfont" :class="x.icon"></i>
                <span class="text">{{x.name}}</span>
                <i v-if="x.children&&x.children.length" class="arrow iconfont icon-arrow-sl"></i>
                <ul v-if="x.children&&x.children.length" class="subMenus">
                    <li v-for="y in x.children" @click.stop.prevent="menuClick($event,y)">
                        <i v-if="y.icon" class="icon iconfont" :class="y.icon"></i>
                        <span class="text">{{y.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import util from './../modules/util'
export default {
    props : {
        "id" : {//元素id值
            type : String,
            default : "dropdown_" + util.getRandom() 
        },
        "options" : {//菜单配置
            type : [String,Array],
            default : function(){return {}}
        },
        "params" : {//点击参数
            type : Object,
            default : function(){return {}}
        },
        "extendClass" : {},//扩展class
        "extendStyle" : {},//扩展样式
        "beforeShow" : {},//显示前回调
        "showed" : {}//显示回调
    },
    data : function(){
        return {
            "showFlag" : true//显示菜单标志
        };
    },
    methods : {
        setParams : function(e,params){//设置参数，点击时返回
            this.params = params
        },
        setOptions : function(e,options){//设置下拉
            this.options = options;
            this.showFlag = false;//显示菜单标志
            this.showFlag = true;//重新渲染
        },
        getOptions : function(e){//获取菜单配置
            return this.options;
        },
        menuClick : function(e,menuData){//菜单点击事件
            if($.isFunction(menuData.click)){
                menuData.click(e,this.params);//所配置的点击事件
                if(menuData.clickToSelect){//是否点击选中
                    var li = APP.getEventTrigger(e,"li");
                    $(li).siblings("li").removeClass("selected");//把兄弟菜单的选中样式去掉
                    $(li).addClass("selected");//增加选中样式
                }
                this.hide();//隐藏菜单
            }
        },
        mouseover : function(e,data){//鼠标悬停
            console.log(data);
        },
        show : function(e,top,left){//显示菜单面板
            if($.isFunction(this.beforeShow))
                this.beforeShow(this.$el,this.params);
            $(this.$el).css({
                top : top + "px",
                left : left + "px"
            });
            $(this.$el).fadeIn(300).addClass("show");
            if($.isFunction(this.showed)){
                this.showed(this.$el,this.params);
            }
        },
        hide : function(){//隐藏下拉面板
            $(this.$el).fadeOut(300).removeClass("show");
            var trigger = $(this.$el).data("trigger");
            if(trigger)$(trigger).removeClass("show");
        }
    },
    mounted : function(){
        $(this.$el).on("setParams",this.setParams);//设置参数
        $(this.$el).on("setOptions",this.setOptions);//设置菜单
        $(this.$el).on("getOptions",this.getOptions);//获取菜单配置
        $(this.$el).on("show",this.show);//绑定事件
        $(this.$el).on("hide",this.hide);//绑定事件
        $(this.$el).appendTo($("body"));//添加到文档
    }
}
</script>

<style lang="less" scoped>
.myDropdown{
	position: absolute;
	background-color: #fff;
	border: 1px solid #e7e7e7;
	z-index: 9999;
	display: none;
	box-shadow: 0px 2px 8px #eee;
	ul{
		padding: 5px 0px;
		li{
		    display: block;
		    height: 35px;
		    line-height: 35px;
		    padding: 0px 20px;
		    color: #666;
		    &.active{
		    	color: #38b;
		    }
			.icon{
				display: inline-block;
				height: 16px;
				padding-right: 5px;
				vertical-align : middle;
				font-size: 15px;
				bottom: 0px;
				margin: auto;
				line-height: 1;
				&.right{
					margin-left: 4px;
					&~span{
						float: left;
					}
				}
			}
			.text{
				display: inline-block;
				font-size: 14px;
				white-space: nowrap;
			}
			.arrow{
			    display: inline-block;
                height: 16px;
                line-height: 1;
                width: 16px;
                position: absolute;
                bottom: 0px;
                top: 0px;
                right: 10px;
                margin: auto;
			}
			.subMenus{
			    position: absolute;
                left: 100%;
                top: 0px;
                background-color: #fff;
                border: 1px solid #e7e7e7;
                z-index: 9999;
                display: none;
                box-shadow: 0px 2px 8px #eee;
			}
			&.hasChildren{
			    padding-right: 35px;
			}
			&.selected{
			    background-color: #f7f7f7;
                color: #38b;
			}
			&:hover{
				cursor: pointer;
				background-color: #f7f7f7;
				color: #38b;
				.subMenus{
				    display: block;
				}
			}
		}
	}
	&.hide{
		display: none;
	}
}
</style>

