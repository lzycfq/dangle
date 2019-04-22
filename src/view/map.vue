<template>
<div class="all">
		<DLheader></DLheader>
		<div style="width: 100%;"><img src="../assets/images/index/header01.jpg" style="width: 100%;"/></div>
		<!--AboutUs content-->
		<section class="container aboutUS_content" style="height: 577px;">
			<!--分类-->
		    <div style="height: 50px;">
		    	<select name="category" class="cs-select cs-skin-underline f_right mt20  form-control" style="width: 8em !important;font-size: 15px;" onchange="window.location=this.value;">
		    		<option value="/message.html">代理经销商留言</option>
		    		<option value="/consult.html">招商咨询</option>
		    		<option value="/handbook.html">招商手册</option>
		    		<option value="/map.html" selected="selected">当乐地图</option>
		    	</select>
		    </div>
			<h3 style="text-align: center;margin: 10px;letter-spacing: 1.5px;">当乐地图</h3>
			<h4 style="color: #f08300;text-align: center;">AGENT&nbsp;DISTRIBUTION&nbsp;MESSAGE</h4>
			<!--地图层-->
			<div >
			  	<div style="margin: 10px auto;width:100%px;height:450px;border:#ccc solid 1px;" id="dituContent"></div>
				
			</div>
		</section>
		<div class="container mtb20 text_center"><img src="../assets/images/no1.jpg" style="margin: auto;"/></div>
		<DLfooter></DLfooter>
		</div>
</template>

<script>
	import DLheader from '../components/header.vue'
	import DLfooter from '../components/footer.vue'
	import jquery from '../assets/js/jquery.js'
	import bootstrap from '../assets/js/bootstrap.min.js'
	export default {
		name: "handbook",
		data() {
		var markerArr = [{title:"当乐厨卫",content:"当乐厨卫有限公司",point:"113.331052|22.705545",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}];

			return {
				}
				
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
	@import "../assets/css//aboutUs.css";
	@import "../assets/css/cs-select.css";
	@import "../assets/css/cs-skin-underline.css";
</style>
