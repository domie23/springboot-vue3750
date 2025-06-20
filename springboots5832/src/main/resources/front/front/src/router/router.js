import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import kepuzhishiList from '../pages/kepuzhishi/list'
import kepuzhishiDetail from '../pages/kepuzhishi/detail'
import kepuzhishiAdd from '../pages/kepuzhishi/add'
import youxigonglveList from '../pages/youxigonglve/list'
import youxigonglveDetail from '../pages/youxigonglve/detail'
import youxigonglveAdd from '../pages/youxigonglve/add'
import youxixinxiList from '../pages/youxixinxi/list'
import youxixinxiDetail from '../pages/youxixinxi/detail'
import youxixinxiAdd from '../pages/youxixinxi/add'
import youxileixingList from '../pages/youxileixing/list'
import youxileixingDetail from '../pages/youxileixing/detail'
import youxileixingAdd from '../pages/youxileixing/add'
import youxigoumaiList from '../pages/youxigoumai/list'
import youxigoumaiDetail from '../pages/youxigoumai/detail'
import youxigoumaiAdd from '../pages/youxigoumai/add'
import youxifahuoList from '../pages/youxifahuo/list'
import youxifahuoDetail from '../pages/youxifahuo/detail'
import youxifahuoAdd from '../pages/youxifahuo/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'kepuzhishi',
					component: kepuzhishiList
				},
				{
					path: 'kepuzhishiDetail',
					component: kepuzhishiDetail
				},
				{
					path: 'kepuzhishiAdd',
					component: kepuzhishiAdd
				},
				{
					path: 'youxigonglve',
					component: youxigonglveList
				},
				{
					path: 'youxigonglveDetail',
					component: youxigonglveDetail
				},
				{
					path: 'youxigonglveAdd',
					component: youxigonglveAdd
				},
				{
					path: 'youxixinxi',
					component: youxixinxiList
				},
				{
					path: 'youxixinxiDetail',
					component: youxixinxiDetail
				},
				{
					path: 'youxixinxiAdd',
					component: youxixinxiAdd
				},
				{
					path: 'youxileixing',
					component: youxileixingList
				},
				{
					path: 'youxileixingDetail',
					component: youxileixingDetail
				},
				{
					path: 'youxileixingAdd',
					component: youxileixingAdd
				},
				{
					path: 'youxigoumai',
					component: youxigoumaiList
				},
				{
					path: 'youxigoumaiDetail',
					component: youxigoumaiDetail
				},
				{
					path: 'youxigoumaiAdd',
					component: youxigoumaiAdd
				},
				{
					path: 'youxifahuo',
					component: youxifahuoList
				},
				{
					path: 'youxifahuoDetail',
					component: youxifahuoDetail
				},
				{
					path: 'youxifahuoAdd',
					component: youxifahuoAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
