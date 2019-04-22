<template>
	<div class="all">
		<DLheader></DLheader>
<div style="width: 100%;"><img src="../assets/images/index/header01.jpg" style="width: 100%;"/></div>
		<!--AboutUs content-->
		<section class="container aboutUS_content">
			<h3 style="text-align: center;margin: 10px;letter-spacing: 1.5px;">招商优势</h3>
			<h4 style="color: #f08300;text-align: center;">AGENT&nbsp;ADVATNTAGE</h4>
			<!-- 加盟优势 -->
			<ul>
				<li><span>1.商标全覆盖，所有产品都是自有品牌（涵盖所有品类商标的企业很少）。</span></li>
				<li><span>2.培训支持+人员支持，帮助代理商全方位掌握从产品到营销再到售后的知识。</span></li>
				<li><span>3.装修补贴+广告支持+售后费用支持+促销品支持+优惠返点+年终奖励等等，给代理商落在实处的优惠。</span></li>
				<li><span>4.线下营销新模式（一体化购物新理念），厨电，卫浴，灯饰一站式购物。</span></li>
				<li><span>5.区域保护政策，一县一代避免窜货，确保代理商有利可赚。</span></li>
				<li><span>6.不压货，不定任务；公平合作，互利共赢。</span></li>
				<li><span>7.国家3C产品质量认证，确保品质无忧。</span></li>
				<li><span>8.当乐产品全国联保，确保售后无忧。</span></li>
			</ul>
		</section>
		<DLfooter></DLfooter>
</div>
</template>

<script>
	import DLheader from '../components/header.vue'
	import DLfooter from '../components/footer.vue'
	
	export default {
		name: "advantage",
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
	@import "../assets/css/aboutUs.css";
	@import "../assets/css/dangle.css";
	section ul li{
		float: none;
	}
	section ul li span{
		font-size:16px;
		padding-bottom:4px;
		border-bottom:2px solid #f60;
	}
</style>
