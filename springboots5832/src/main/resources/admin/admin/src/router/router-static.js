import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import youxigonglve from '@/views/modules/youxigonglve/list'
    import aboutus from '@/views/modules/aboutus/list'
    import storeup from '@/views/modules/storeup/list'
    import youxixinxi from '@/views/modules/youxixinxi/list'
    import youxigoumai from '@/views/modules/youxigoumai/list'
    import kepuzhishi from '@/views/modules/kepuzhishi/list'
    import youxileixing from '@/views/modules/youxileixing/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import youxifahuo from '@/views/modules/youxifahuo/list'
    import config from '@/views/modules/config/list'
    import discussyouxixinxi from '@/views/modules/discussyouxixinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '游戏资讯',
        component: news
      }
      ,{
	path: '/youxigonglve',
        name: '游戏攻略',
        component: youxigonglve
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/youxixinxi',
        name: '游戏信息',
        component: youxixinxi
      }
      ,{
	path: '/youxigoumai',
        name: '游戏购买',
        component: youxigoumai
      }
      ,{
	path: '/kepuzhishi',
        name: '科普知识',
        component: kepuzhishi
      }
      ,{
	path: '/youxileixing',
        name: '游戏类型',
        component: youxileixing
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/youxifahuo',
        name: '游戏发货',
        component: youxifahuo
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussyouxixinxi',
        name: '游戏信息评论',
        component: discussyouxixinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
