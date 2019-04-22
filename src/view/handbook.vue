<template>
<div class="all">
		<DLheader></DLheader>
		<div style="width: 100%;"><img src="../assets/images/index/header01.jpg" style="width: 100%;"/></div>
		<!--AboutUs content-->
		<section class="container aboutUS_content">
			<div style="overflow: hidden;position: relative;">
				<div class="about_nav">
					<div><router-link to="/message">代理经销商留言<span></span></router-link></div>
					<div ><router-link to="/consult">招商咨询<span></span></router-link></div>
					<div class="onAbout"><router-link to="/handbook">招商手册<span></span></router-link></div>
				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			<h3 style="text-align: center;margin: 80px 0 10px;letter-spacing: 1.5px;">招商手册</h3>
			<h4 style="color: #f08300;text-align: center;">AGENT&nbsp;DISTRIBUTION&nbsp;MESSAGE</h4>
			<div class="main-header mt20 container">
				<h4><strong>加盟要求：</strong></h4>
				<div class="join-advantage ">
					<p><span> 1.具有独立民事责任能力的法人或自然人。</span></p>
					<p><span>2.远离吸毒、赌博的陋习，具有良好信誉度。</span> </p>
					<p><span>3.具备一定的管理能力，能够在当乐团队的帮扶下稳步开发市场，扩大品牌知名度，维持良好形象。</span></p>
					<p><span>4.认可当乐公司理念，愿意与公司倾力合作，遵守公司相关政策。</span></p>
					<p class="mt10"><span>5.拥有服务意识，能够为消费者提供完善、贴心的安装和售后服务。</span></p>
				</div>
				<br><a href=""></a>
				<h4><strong>加盟方法：</strong></h4>
				<div class="join-advantage ">
					<p><span>1.微信公众号：可通过微信公众号与当乐进行实时互动。</span></p>
					<p><span>2.官方网站：访问当乐整体厨卫的官方网站<a href="http://www.dlhsh.cn">www.dlhsh.cn</a>查询相关加盟信息，当乐会安排专业的客服人员与您联系洽谈！</span> </p>
					<p><span>3.拨打电话：拨打全国统一服务热线400-850-3319，可迅速咨询产品及加盟相关事宜。</span></p>
					
				</div>
			</div>
			<br>
			<br>
		</section>
		<DLfooter></DLfooter>
		</div>
</template>

<script>
	import DLheader from '../components/header.vue'
	import DLfooter from '../components/footer.vue'
	
	export default {
		name: "handbook",
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
	@import "../assets/css//aboutUs.css";
	@import "../assets/css/cs-select.css";
	@import "../assets/css/cs-skin-underline.css";
</style>
