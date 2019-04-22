<template>
	<div class="all">
		<DLheader></DLheader>
		<div style="width: 100%;"><img src="../assets/images/index/header01.jpg" style="width: 100%;"/></div>
		<!--AboutUs content-->
		<section class="container aboutUS_content">
			<div style="overflow: hidden;position: relative;">
				<div class="about_nav">
					<div><router-link to="/message">代理经销商留言<span></span></router-link></div>
					<div class="onAbout"><router-link to="/consult">招商咨询<span></span></router-link></div>
					<div><router-link to="/handbook">招商手册<span></span></router-link></div>
				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			<h3 style="text-align: center;margin: 80px 0 10px;letter-spacing: 1.5px;">招商咨询</h3>
			<h4 style="color: #f08300;text-align: center;">AGENT&nbsp;DISTRIBUTION&nbsp;MESSAGE</h4>
			<h3 class="main-header mt20 suojin2">
				当乐电气在成立之初，就确立了以“招商+扶商+富商”为核心的运营模式，然后稳扎稳打，通过打造精工产品、吸纳优质代理商、提供全面服务的方式深入拓展营销网络，实现企业与代理商之间的互利双赢、共同发展。
			</h3>
			<!-- 加盟政策 -->
			<br>
			<!-- pc端 -->
			<div class="join-advantage" id="join-advantage1">
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>1.</strong>尊享独家代理权！</span></p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>9.</strong>提供促销品支持，用活动打开市场！</span></p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>2.</strong>不定任务，没有压力，轻松赚钱！</span> </p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>10.</strong>每年定期举行专业的技术和营销培训，让您真正成为营销精英！</span> </p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>3.</strong>年终提货达到一定金额将享受奖励政策！</span> </p>			
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>11.</strong>提供一年内退换货承诺，轻松赚钱不压货！</span> </p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>4.</strong>单次提货达到一定金额可享受优惠返点，直接冲抵货款！</span> </p>								
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>12.</strong>窜货有处罚，市场保护更贴心！</span> </p>			
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>5.</strong>提供市场宣传推广补贴，品牌宣传更轻松！</span> </p>						
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>13.</strong>价格公开公正，统一出厂价和终端指导零售价，保证代理商合理经营利润!</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>6.</strong>提供装修店面费用支持，你做形象，我来报销！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>14.</strong>拥有产品责任险与全国联保服务平台双重保障，无后顾之忧！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>7.</strong>扁平化操作，不设省级代理，降低流通成本，提高代理商利润空间！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>15.</strong>产品质量承诺，卖得更安心！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>8.</strong>提供售后费用和配件支持，用服务做代言！</span> </p>
			</div>
			<br>
			<br>
			<!-- 移动端 -->
			<div class="join-advantage" id="join-advantage2">
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>1.</strong> 尊享独家代理权！</span></p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>2.</strong>不定任务，没有压力，轻松赚钱！</span></p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>3.</strong>年终提货达到一定金额将享受奖励政策！</span> </p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>4.</strong>单次提货达到一定金额可享受优惠返点，直接冲抵货款！</span> </p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>5.</strong>提供市场宣传推广补贴，品牌宣传更轻松！</span> </p>			
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>6.</strong>提供装修店面费用支持，你做形象，我来报销！</span> </p>				
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>7.</strong>扁平化操作，不设省级代理，降低流通成本，提高代理商利润空间！</span> </p>								
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>8.</strong>提供售后费用和配件支持，用服务做代言！</span> </p>			
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>9.</strong>提供促销品支持，用活动打开市场！</span> </p>						
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>10.</strong>每年定期举行专业的技术和营销培训，让您真正成为营销精英！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>11.</strong>提供一年内退换货承诺，轻松赚钱不压货！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>12.</strong>窜货有处罚，市场保护更贴心！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>13.</strong>价格公开公正，统一出厂价和终端指导零售价，保证代理商合理经营利润!</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>14.</strong>拥有产品责任险与全国联保服务平台双重保障，无后顾之忧！</span> </p>
				<br>
				<p class="col-lg-6 col-md-6 col-xs-12"><span><strong>15.</strong>产品质量承诺，卖得更安心！</span> </p>
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
		name: "consult",
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
		@import "../assets/css/index.css";
		@import "../assets/css//aboutUs.css";
		@import "../assets/css/cs-select.css";
		@import "../assets/css/cs-skin-underline.css";
	
</style>
