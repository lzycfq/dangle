import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
     component(resolve){
         require(['@/view/index'],resolve)
     }
    },
{
      path: '/chanpinlist',
      name: 'chanpinlist',
     component(resolve){
         require(['@/view/Goods/chanpinlist'],resolve)
     }
    },
		{
		      path: '/seek',
		      name: 'seek',
		    component(resolve){
		        require(['@/view/Goods/seek'],resolve)
		    }
		    },
	{
	      path: '/detail/:id',///detail/:id 带上后端才请求产品详情参数
	      name: 'detail',
	     component(resolve){
	         require(['@/view/Goods/detail'],resolve)
	     }
	    },
{
	      path: '/discount',///detail/:id 带上后端才请求产品详情参数
	      name: 'discount',
	    component(resolve){
	        require(['@/view/Goods/discount'],resolve)
	    }
	    },
 {
      path: '/listnews',
      name: 'listnews',
    component(resolve){
        require(['@/view/News/listnews'],resolve)
    }
    },
		 {
		     path: '/listzhishi',
		     name: 'listzhishi',
		   component(resolve){
		       require(['@/view/News/listzhishi'],resolve)
		   }
		   },
			  {
			      path: '/listzixun',
			      name: 'listzixun',
			    component(resolve){
			        require(['@/view/News/listzixun'],resolve)
			    }
			    },
		 {
		  path: '/about',
		  name: 'about',
		 component(resolve){
		     require(['@/view/about'],resolve)
		 }
		},
		 {
		  path: '/advantage',
		  name: 'advantage',
		 component(resolve){
		     require(['@/view/advantage'],resolve)
		 }
		},
	 {
		  path: '/brand',
		  name: 'brand',
		 component(resolve){
		     require(['@/view/brand'],resolve)
		 }
		},
 {
		  path: '/consult',
		  name: 'consult',
		 component(resolve){
		     require(['@/view/consult'],resolve)
		 }
		},
 {
		  path: '/contact',
		  name: 'contact',
		 component(resolve){
		     require(['@/view/contact'],resolve)
		 }
		},
 {
		  path: '/course',
		  name: 'course',
		 component(resolve){
		     require(['@/view/course'],resolve)
		 }
		},
 {
		  path: '/handbook',
		  name: 'handbook',
		 component(resolve){
		     require(['@/view/handbook'],resolve)
		 }
		},
 {
		  path: '/jiazhiguan',
		  name: 'jiazhiguan',
		component(resolve){
		    require(['@/view/jiazhiguan'],resolve)
		}
		},
{
		  path: '/map',
		  name: 'map',
		 component(resolve){
		     require(['@/view/map'],resolve)
		 }
		},
{
		  path: '/message',
		  name: 'message',
		component(resolve){
		    require(['@/view/message'],resolve)
		}
		}

  ],
	  scrollBehavior (to, from, savedPosition) {
	    return { x: 0, y: 0 }
	}
})
