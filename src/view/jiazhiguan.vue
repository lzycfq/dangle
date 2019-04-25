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
					<div><router-link to="/course" style="color: #333;">企业历程<span></span></router-link></div>
					<div class="onAbout"><router-link to="/jiazhiguan">企业价值观<span></span></router-link></div>
				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			<h2 class="pt10 mb10"><strong>企业价值观：</strong></h2>
			<p class="suojin2 hangjianju2 f16 pb10">“活在当下，乐在其中”是“当乐”从诞生伊始，就确立的文化内涵。不积跬步无以至千里，不积小流无以成江海。中国梦，是大梦，却也需一个个小梦去成就；企业梦，是大梦中的一个“小梦”，更需一个个企业人来践行。改革开放四十年，风云巨变，中国已一跃成为当初想都不敢想的世界强国。但要去深究有什么“秘诀”？兜兜转转，不过是所有的中国人勤勤恳恳，努力工作，期望把日子越过越好罢了。平凡的生活也可以过得伟大，微薄的贡献也可积累成奇迹。当乐人相信，这种脚踏实地、诚信经营，把事业当爱好、把每一天都过好的心态，才更容易闯出一片天地。</p>
			<p class="suojin2 hangjianju2 f16 pb10">解决每一个小问题，完善每一个小细节；站在消费者的角度，站在代理商的角度，倾听大家的每一个诉求，枯燥吗？枯燥；难吗？不难。但正是这种踏实勤奋、及时响应的态度，使得当乐公司在所谓“实体衰落”的浪潮中后发先至，弯道超车。如今，“当乐”已成名近三年，小到产品零件细节，大到整条产品线的规划，当乐精益求精的脚步却从未停歇。在这个过程中，我们收获了支持和喜悦，正如当乐电气董事长高代武先生常说的：“我们也没想做得多好，就是提供一些质量好、又不贵的产品给消费者；让相信我们、选择我们的代理商能赚到钱，除此之外，只要我们能活下去，我就满足了。当然现在看来我们收获的已经远超预期了，我非常高兴。”</p>
			<p class="suojin2 hangjianju2 f16 pb10">当乐的魂、当乐的根、当乐未来的方向，皆起于平凡，而平凡是真。</p>
			<div class="mb10 pb30">
				<img src="../assets/images/about_us/jiazhiguan.jpg" style="width: 100%;"/>
			</div>
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
	
</style>
