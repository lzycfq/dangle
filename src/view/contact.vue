<template>
	<div class="all">
		<DLheader></DLheader>
		<div style="margin-bottom: 20px;" class="div-img-pc"><img src="../assets/images/index/header01.jpg" style="width: 100%;"/></div>
		<!-- 移动端 -->
		<div style="width: 100%;margin-bottom: 20px;" class="div-img-phone"><img src="/images/server_phone.jpg" style="width: 100%;"></div>
		<section class="container aboutUS_content">
			<div style="overflow: hidden;position: relative;">
				<div class="about_nav">
					<div class="onAbout"><router-link to='contact' >在线客服<span></span></router-link></div>
					<div><router-link to='wenda' style="color: #333333;">当乐问吧<span></span></router-link></div>
					<div><router-link to='serve' style="color: #333333;">服务中心<span></span></router-link></div>
				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			<h3 style="text-align: center;margin: 80px 0 20px;letter-spacing: 1.5px;">在线客服</h3>
			<h4 style="color: #f08300;text-align: center;">AGENT&nbsp;DISTRIBUTION&nbsp;MESSAGE</h4>
			<div class="mt20" style="overflow: hidden;padding-bottom: 20px;">
				<ul>
					<li class="col-lg-6">
						<p class="f16">客服联系方式</p>
						<p class="f14 c_666">在线时间：</p>
						<p class="f18 c_666">上午8:00-12:00 下午13:30-21:30</p>
						<p class="f14">全国服务热线：</p>
						<p class="f24" style="color: #f08300;">400-850-3319</p>
					</li>
					<li class="col-lg-6">
						<ul>
							<li class="col-xs-6" id="qq"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3478702451&site=qq&menu=yes"><img border="0" src="../assets/images/qq.jpg" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></li>
							<li class="col-xs-6"><img src="../assets/images/gongzhonghao.jpg"/></li>
						</ul>
					</li>
				</ul>
			</div>
			<!--地图层-->
			<div >
				<div style="margin: 10px auto;width:100%;height:500px;border:#ccc solid 1px;" id="dituContent"></div>
				</div>
				</section>
		<DLfooter></DLfooter>
	</div>
</template>

<script>
	import DLheader from '../components/header.vue'
	import DLfooter from '../components/footer.vue'
	import jquery from '../assets/js/jquery.js'
	import bootstrap from '../assets/js/bootstrap.min.js'
	export default {
		name: "contact",
		data() {

			return {}

		},
		mounted() {
				this.initMap()
			},
			methods:{
			initMap() {
			this.createMap();//创建地图
		    this.setMapEvent();//设置地图事件
		    this.addMarker();//向地图中添加marker
			this.createInfoWindow();
			this.createIcon();
		},
		  //创建地图函数：
		    createMap(){
		    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
		    var point = new BMap.Point(113.331169,22.705453);//定义一个中心点坐标
		    map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
		    window.map = map;//将map变量存储在全局
		},
		
		//地图事件设置函数：
		 setMapEvent(){
		    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
		    //map.enableScrollWheelZoom();//启用地图滚轮放大缩小
		    //map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
		    map.enableKeyboard();//启用键盘上下左右键移动地图
		},
		//创建marker
		addMarker(){
			//标注点数组
			//var markerArr = [{title:"当乐厨卫",content:"当乐厨卫有限公司",point:"113.331052|22.705545",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}];
		    for(var i=0;i<markerArr.length;i++){
		        var json = markerArr[i];
		        var p0 = json.point.split("|")[0];
		        var p1 = json.point.split("|")[1];
		        var point = new BMap.Point(p0,p1);
				var iconImg = createIcon(json.icon);
		        var marker = new BMap.Marker(point,{icon:iconImg});
				var iw = createInfoWindow(i);
				var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
				marker.setLabel(label);
		        map.addOverlay(marker);
		        label.setStyle({
		                    borderColor:"#808080",
		                    color:"#333",
		                    cursor:"pointer"
		        });
				
				(function(){
					var index = i;
					var _iw = createInfoWindow(i);
					var _marker = marker;
					_marker.addEventListener("click",function(){
					    this.openInfoWindow(_iw);
				    });
				    _iw.addEventListener("open",function(){
					    _marker.getLabel().hide();
				    })
				    _iw.addEventListener("close",function(){
					    _marker.getLabel().show();
				    })
					label.addEventListener("click",function(){
					    _marker.openInfoWindow(_iw);
				    })
					if(!!json.isOpen){
						label.hide();
						_marker.openInfoWindow(_iw);
					}
				})()
		    }
		},
		//创建InfoWindow
		 createInfoWindow(i){
			
		    var json = markerArr[i];
		    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
		    return iw;
		},
		//创建一个Icon
		 createIcon(json){
		    var icon = new BMap.Icon("&#xe66d;", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
		    return icon;
		},
		
			},
		
		components: {
			DLheader,
			DLfooter
		}

	}
</script>

<style>
	@import "../assets/css/bootstrap.min.css";
	@import "../assets/css/public.css";
	@import "../assets/css/dangle.css";
	@import "../assets/css/qq.css";
	@import "../assets/css//aboutUs.css";
	@import "../assets/css/cs-select.css";
	@import "../assets/css/cs-skin-underline.css";
</style>
