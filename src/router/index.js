import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import about from '@/view/about'
import advantage from '@/view/advantage'
import brand from '@/view/brand'
import consult from '@/view/consult'
import contact from '@/view/contact'
import course from '@/view/course'
import handbook from '@/view/handbook'
import jiazhiguan from '@/view/jiazhiguan'
import map from '@/view/map'
import message from '@/view/message'
import listnews from '@/view/News/listnews'
import listzhishi from '@/view/News/listzhishi'
import listzixun from '@/view/News/listzixun'
import chanpinlist from '@/view/Goods/chanpinlist'
import detail from '@/view/Goods/detail'
import discount from '@/view/Goods/discount'


Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
{
      path: '/chanpinlist',
      name: 'chanpinlist',
      component: chanpinlist
    },
	{
	      path: '/detail',///detail/:id 带上后端才请求产品详情参数
	      name: 'detail',
	      component: detail
	    },
{
	      path: '/discount',///detail/:id 带上后端才请求产品详情参数
	      name: 'discount',
	      component: discount
	    },
 {
      path: '/listnews',
      name: 'listnews',
      component: listnews
    },
		 {
		     path: '/listzhishi',
		     name: 'listzhishi',
		     component: listzhishi
		   },
			  {
			      path: '/listzixun',
			      name: 'listzixun',
			      component: listzixun
			    },
		 {
		  path: '/about',
		  name: 'about',
		  component: about
		},
		 {
		  path: '/advantage',
		  name: 'advantage',
		  component: advantage
		},
	 {
		  path: '/brand',
		  name: 'brand',
		  component: brand
		},
 {
		  path: '/consult',
		  name: 'consult',
		  component: consult
		},
 {
		  path: '/contact',
		  name: 'contact',
		  component: contact
		},
 {
		  path: '/course',
		  name: 'course',
		  component: course
		},
 {
		  path: '/handbook',
		  name: 'handbook',
		  component: handbook
		},
 {
		  path: '/jiazhiguan',
		  name: 'jiazhiguan',
		  component: jiazhiguan
		},
{
		  path: '/map',
		  name: 'map',
		  component: map
		},
{
		  path: '/message',
		  name: 'message',
		  component: message
		}

  ]
})
