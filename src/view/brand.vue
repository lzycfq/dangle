<template>
	<div class="all">
		<DLheader></DLheader>
		<!--位置-->
		<div class="bg_f8 b_b_bbb">
			<div class="l-sub container">
			    <div class="f-cb">
			        <a href="http://www.danglelife.com" >首页</a><span><img src="../assets/images/arrow_right_2.png" width="12px" height="12px"></span>
		            <a href="javascript:void(0);" class="cur" style="text-decoration: none;">集团宣传片</a>
			    </div>
			</div>
		</div>
		<section>
			<div class="content container">
				<br />
		    	<h2 class="text_center c_f60">宣传视频集锦</h2>
				<br />
		    	<ul class="row">
		    		<li class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mtb10" v-for="(item,index) in brandvideo">
		    			<video  style="width: 100%; height:14.375rem;"  controls="controls">
							<source :src="item.videos"  type='video/mp4' controls='' >
						</video>
		    		</li>
		         
		    	</ul>
		    	<!--分页-->
			    <nav aria-label="Page navigation" class="container" style="text-align: center;">
				</nav>
		    </div>
		</section>
		<DLfooter></DLfooter>
	</div>
</template>

<script>
	import DLheader from '../components/header.vue'
	import DLfooter from '../components/footer.vue'
	
	export default {
		name: "brand",
		data() {
		
			return {
				brandvideo:[
					{
					videos:"https://www.bilibili.com/video/av46692405/",	
					},
					{
					videos:"https://www.bilibili.com/video/av49379499/",	
					},
					{
					videos:"https://www.bilibili.com/video/av47786216/",	
					}
				]
				}
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
		@import "../assets/css/index.css";
		@import "../assets/css/video-js.css";
		@import "../assets/css/cs-select.css";
		@import "../assets/css/cs-skin-underline.css";
		@font-face {
  font-family: 'iconfont';  /* project id 1151489 */
  src: url('//at.alicdn.com/t/font_1151489_vf6das7d2jh.eot');
  src: url('//at.alicdn.com/t/font_1151489_vf6das7d2jh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1151489_vf6das7d2jh.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1151489_vf6das7d2jh.woff') format('woff'),
  url('//at.alicdn.com/t/font_1151489_vf6das7d2jh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1151489_vf6das7d2jh.svg#iconfont') format('svg');
}
		/*以下是隐藏video的下载功能*/
		
	video::-internal-media-controls-download-button {
	    display:none;
	}
	
	video::-webkit-media-controls-enclosure {
	    overflow:hidden;
	}
	
	video::-webkit-media-controls-panel {
	    width: calc(100% + 30px); 
	}
	.vjs-big-play-button{
	  left:60% !important;
	}
</style>
