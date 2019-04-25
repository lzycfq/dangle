<template>
	<div class="all">
		<DLheader></DLheader>
		<div class="mb10">
			<img src="../assets/images/about_us/01.jpg" style="width: 100%" />
		</div>
		<!--AboutUs content-->
		<!--内容部分-->
		<section class="container">
			<div style="overflow: hidden;position: relative;">
				<div class="about_nav">
					<div><router-link to="/about" style="color: #333;">集团介绍<span></span></router-link></div>
					<div class="onAbout"><router-link to="/course" style="color: #333;">企业历程<span></span></router-link></div>
					<div><router-link to="/jiazhiguan" style="color: #333;">企业价值观<span></span></router-link></div>
				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			<div id="time_axis">
				<div class="clear"></div>
				<div id="licheng">
					<div class="time">
						<div class="t_1">2015年5月29日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>当乐品牌正式开始运营</p></div>
					</div>
					<div class="time">
						<div class="t_1">2015年8月16日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在广东中山圆满召开当乐新品发布暨首届招商会</p></div>
					</div>
					<div class="time">
						<div class="t_1">2015年9月-12月</div>
						<div class="t_2"></div>
						<div class="t_3"><p>先后在华南、华中地区十多个省会城市召开招商会，在近百个县市发展了代理商</p></div>
					</div>
					<div class="time">
						<div class="t_1">2016年3月23日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在广东中山召开当乐第二届大型招商会，获得巨大成功</p></div>
					</div>
					<div class="time">
						<div class="t_1">2016年4月6日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在广东佛山召开当乐厨卫首届代理商产品技术暨营销培训班</p></div>
					</div>
					<div class="time">
						<div class="t_1">2016年6月28日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在湖北武汉召开当乐二期代理商产品技术暨营销培训班</p></div>
					</div>
					<div class="time">
						<div class="t_1">2016年8月16日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在广东中山召开当乐厨卫第三届大型招商会，签约率再创新高</p></div>
					</div>
					<div class="time">
						<div class="t_1">2016年9月5日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在湖北武汉召开当乐首届年会暨湖北地区招商会</p></div>
					</div>
					<div class="time">
						<div class="t_1">2016年12月13日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在湖北武汉召开当乐三期代理商产品技术暨营销培训班</p></div>
					</div>
					<div class="time">
						<div class="t_1">2017年3月7日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在广东中山召开当乐厨卫第四届大型产品发布暨招商会，开启不同凡响的2017年品牌之路</p></div>
					</div>
					<div class="time">
						<div class="t_1">2017年3月-6月</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在中国多地召开省级招商会，为企业发展注入强劲动力</p></div>
					</div>
					<div class="time">
						<div class="t_1">2017年6月26日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>在广东佛山召开当乐五期代理商产品技术暨营销培训班</p></div>
					</div>
					<div class="time">
						<div class="t_1">2017年8月9日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>当乐厨卫顺时而动，成功转型升级为当乐整体厨卫，并在广东中山召开第五届大型新品发布暨全国招商会，取得巨大成功</p></div>
					</div>
					<div class="time">
						<div class="t_1">2017年12月13日</div>
						<div class="t_2"></div>
						<div class="t_3"><p>当乐整体厨卫与流云网络科技在广东中山举行了签约仪式，当乐“互联网+传统营销”的新时代全面开启</p></div>
					</div>
				</div>
			</div>
		</section>
	<DLfooter></DLfooter>
	</div>
</template>

<script>
	import DLheader from '../components/header.vue'
	import DLfooter from '../components/footer.vue'

	export default {
		name: "course",
		data() {
	
			return {
				
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
	
	@import "../assets/css/aboutUs.css";
	@import "../assets/css/course.css";
</style>
