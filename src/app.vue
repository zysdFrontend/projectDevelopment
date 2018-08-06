<template>
	<div id="MYAPP">
		<div class="header">
			<div class="logo">
				<span class="title">后台管理系统</span>
			</div>
			<div class="topMenus">
				<div class="items message">
					<i class="icon fa fa-envelope-o"></i>
					<div class="bubble">2</div>
				</div>
				<div class="items notice">
					<i class="icon fa fa-bell-o"></i>
					<div class="bubble">4</div>
				</div>
				<div class="items task">
					<i class="icon fa fa-briefcase"></i>
					<div class="bubble">13</div>
				</div>
				<div class="items portrait">
					<img class="head" src="./images/portrait.png"/>
					<span class="name">陈永浪</span>
				</div>
			</div>
		</div>
		<div class="leftMenus">
			<div class="searchBar">
				<input type="text" placeholder="搜索菜单...">
				<i class="searchBtn fa fa-search"></i>
			</div>
			<ul class="menuWrap">
				<li v-for="x in menus" :key="x.id" class="items">
					<div class="itemWrap" @click="menuClick(x.url)">
						<div class="icon" :class="x.icon"></div>
						<span class="text" v-text="x.name"></span>
						<span class="arrow fa fa-chevron-right"></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="contentWrap">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	props : {
	},
	computed : {
	},
	components : {
	},
	data : () => {
		return {
			menus: [{
				id: 1,
				icon: 'fa fa-inbox',
				name: '模块管理',
				url: 'module'
			},{
				id: 2,
				icon: 'fa fa-user-o',
				name: '用户管理',
				url: 'user'
			},{
				id: 3,
				icon: 'fa fa-user-circle-o',
				name: '角色管理',
				url: 'role'
			},{
				id: 4,
				icon: 'fa fa-book',
				name: '数据字典',
				url: 'dictionary'
			},{
				id: 5,
				icon: 'fa fa-clock-o',
				name: '定时器',
				url: 'timer'
			},{
				id: 6,
				icon: 'fa fa-sliders',
				name: '系统参数',
				url: 'sys_param'
			},{
				id: 7,
				icon: 'fa fa-code',
				name: '前端框架使用文档',
				url: 'api'
			}]
		}
	},
	methods : {
		menuClick: function(url){
			this.$router.push(url);
		}
	},
	mounted : function(){
		this.$router.push('home');
	}
}
</script>

<style lang="less" scoped>
@import './styles/init.less';
#MYAPP{
	height: 100%;
	width: 100%;
	overflow: hidden;
	padding-top: @topHeight;
	padding-left: @leftWidth;
	background-color: @gray;
	.header{
		position: absolute;
		width: 100%;
		height: @topHeight;
		top: 0px;
		left: 0px;
		background-color: @blue;
		.logo{
			height: 100%;
			width: @leftWidth;
			display: inline-block;
			background-color: darken(@blue, 8%);
			.title{
				color: #fff;
				display: inline-block;
				width: 100%;
				height: @topHeight;
				line-height: @topHeight;
				text-align: center;
				font-size: 18px;
			}
		}
		.topMenus{
			float: right;
			height: @topHeight;
			color: #fff;
			line-height: @topHeight;
			.items{
				display: inline-block;
				vertical-align: top;
				height: @topHeight;
				padding: 0px 20px;
				.icon{
					font-size: @fontXXL;
				}
				.bubble{
					position: absolute;
					color: #fff;
					background-color: @red;
					font-size: @fontS;
					padding: 2px 3px;
					min-width: 15px;
					text-align: center;
					.radius(4px);
					right: 5px;
					top: 5px;
					line-height: 1;
					.transform(scale(0.9));
				}
				&.message{
					.bubble{
						background-color: @green;
					}
				}
				&.notice{
					.bubble{
						background-color: @yellow;
					}
				}
				&.portrait{
					img{
						height: 30px;
						width: 30px;
						.radius(100px);
						margin-right: 4px;
					}
					.name{
						font-size: @fontM;
					}
				}
				&:hover{
					background-color: darken(@blue, 5%);
					cursor: pointer;
				}
			}
		}
	}
	.leftMenus{
		position: absolute;
		background-color: @deepGray;
		width: @leftWidth;
		bottom: 0px;
		left: 0px;
		top: @topHeight;
		.searchBar{
			width: 90%;
			height: 35px;
			margin: 20px auto;
			input{
				.radius(3px);
				background-color: lighten(@deepGray, 12%);
				height: 100%;
				width: 100%;
				padding: 0px 10px;
				padding-right: 30px;
				border: none;
				color: @fontColorSS;
				&:focus{
					background-color: #fff;
					color: @fontColorS;
				}
			}
			.searchBtn{
				font-size: @fontXL;
				position: absolute;
				width: 30px;
				height: 100%;
				right: 0px;
				top: 0px;
				color: @fontColorSS;
				line-height: 35px;
			}
		}
		.menuWrap{
			.items{
				.itemWrap{
					height: 44px;
					line-height: 44px;
					padding: 0px 10px;
					color: #b8c7ce;
					font-size: @fontL;
					.animation();
					.icon{
						font-size: @fontXXXL;
						margin-right: 4px;
					}
					.arrow{
						position: absolute;
						top: 0px;
						bottom: 0px;
						right: 10px;
						margin: auto;
						font-size: @fontS;
						height: 16px;
						line-height: 16px;
					}
					&:hover{
						background-color: lighten(@deepGray, 10%);
						cursor: pointer;
					}
				}
			}
		}
	}
	.contentWrap{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
}
</style>