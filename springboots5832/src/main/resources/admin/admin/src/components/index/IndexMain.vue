<template>
	<div style="height: 100%;">
		<index-aside v-if="'vertical' == 'vertical'" :style='{"boxShadow":"2px -2px 4px rgba(0, 0, 0, .1)","padding":"34px 0 60px","borderColor":"#ccc","alignItems":"flex-start","bottom":"0","display":"flex","overflow":"hidden","top":"64px","borderRadius":"0","left":"0","flexWrap":"wrap","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,218,218,1) 100%),#f6f6f6","borderWidth":"4px 4px 4px 0","width":"250px","fontSize":"0px","position":"fixed","borderStyle":"dashed dashed solid double","height":"100%","zIndex":"998"}'></index-aside>
		<el-main :style='"vertical" == "vertical" ? {"minHeight":"100%","padding":"0px 0 0 250px","margin":"0","background":"url(http://codegen.caihongy.cn/20221202/5571c78252804b7eb03c90a7f5b1fba1.jpg) no-repeat center 0px,#f6f6f6","display":"block","backgroundSize":"100% auto","position":"relative"} : {"minHeight":"100%","margin":"0","position":"relative"}'>
			<index-header :style='{"boxShadow":"0 0px 0px rgba(0, 0, 0, .3)","padding":"0 20px 0 0","alignItems":"center","top":"0","left":"0","background":"rgba(255,255,255,0)","display":"flex","width":"calc(100% - 0px)","position":"relative","zIndex":"1001","height":"64px"}'></index-header>
			<index-aside v-if="'vertical' == 'horizontal'" :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"#304156","borderWidth":"0 0 1px 0","height":"auto"}'></index-aside>
			<bread-crumbs :title="title" :style='{"padding":"0px 15px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"0px auto 0 auto","borderColor":"#d8e7f3 #d8e7f3 #cce2f4","borderWidth":"0px 0 0px","background":"rgba(255,255,255,1)","width":"94%","lineHeight":"40px","borderStyle":"solid","justifyContent":"space-between","height":"40px"}' class="bread-crumbs"></bread-crumbs>
			<router-view class="router-view"></router-view>
		</el-main>
	</div>
</template>

<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import menu from "@/utils/menu";
	export default {
		components: {
			IndexAside,
			IndexHeader
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: ''
			};
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.$storage.get("role");
		},
		created() {
			this.init();
			console.log(console.log(this.$route.path))
		},
		methods: {
			init(){
				this.$nextTick(()=>{
					
				})
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
				console.log(menus);
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}
	
	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}
	
	.detail-form-content {
	    background: transparent;
	}
</style>
