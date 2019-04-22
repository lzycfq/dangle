<template>
	<div class="all">
		<DLheader></DLheader>
		   <!--位置-->
		   <div v-for="(item,index) in bannerxh" :key="index">
		<div class="bg_f8 b_b_bbb">
		  <div class="l-sub container">
		    <div class="f-cb" v-for="(item,index) in item.weizhi" :key="index">
		      <router-link to="/">首页</router-link><span><img src="../../assets/images/arrow_right_2.png" width="12px" height="12px"></span>
		      <router-link to="/chanpinlist">{{item.xinghaoname}}</router-link><span><img src="../../assets/images/arrow_right_2.png" width="12px" height="12px"></span>
		        <span class="cur" style="display: block;font-size: 12px;padding: 0 5px;">{{item.xinghao}}</span>
		          </div>
		        </div>
		    </div>
		
		<div id="carousel-example-generic" class="carousel slide lunbo_img show768" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
				<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				<li data-target="#carousel-example-generic" data-slide-to="2"></li>
				<li data-target="#carousel-example-generic" data-slide-to="3"></li>
				<li data-target="#carousel-example-generic" data-slide-to="4"></li>
			</ol>

			<!-- Wrapper for slides -->
			<div class="carousel-inner" role="listbox" id="div">
				<div class="item active">
					<img src="../../assets/images/index/header01.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../../assets/images/index/header02.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../../assets/images/index/header03.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../../assets/images/index/header04.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../../assets/images/index/header05.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
			</div>
			<!-- Controls -->
			<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true" style="font-size:20px;"></span>
				<!--<span class="sr-only">Previous</span>-->
			</a>
			<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true" style="font-size:20px;"></span>
				<!--<span class="sr-only">Next</span>-->
			</a>
		</div>
		<!--手机端才显示下面的轮播-->
		<div class="slide_div hidden768">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<swiper :options="imageSwiperOptions" ref="imageSwiper" class='section-wrap'>
						<swiper-slide class="swiper-slide"><img src="../../assets/images/index/phone02.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!"
							 style="width: 100%;" /></swiper-slide>
						<swiper-slide class="swiper-slide"><img src="../../assets/images/index/phone03.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!"
							 style="width: 100%;" /></swiper-slide>
						<swiper-slide class="swiper-slide"><img src="../../assets/images/index/phone04.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!"
							 style="width: 100%;" /></swiper-slide>
						<swiper-slide class="swiper-slide"><img src="../../assets/images/index/phone05.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!"
							 style="width: 100%;" /></swiper-slide>
					</swiper>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</div>
		</div>
		<!--详细信息介绍-->
		<div class="container mt20" v-for="(item,index) in detailcontent">
			<ul>
				<li class="col-lg-6">
					<dl>
						<dt>产品信息</dt>
						<dd style="padding: 0 20px;margin: 10px auto;font-size: 14px; border-bottom: 1px solid #ddd;">产品价格--{{item.detailjiage}}</dd>
					</dl>
				</li>
				<li class="col-lg-12 text-center particular_img"><img :src='item.detailimg'></li>
			</ul>
			<div style="clear: both;"></div>
			<p class="text-center mtb20" v-for="(item,index) in item.nextprev">
				<router-link to='/detail' style="color: #333333;">上一个：{{item.detailprev}}</router-link>
				<router-link to='/detail' class="proudctmenu" style="color: #333333;">{{item.detailprodectname}}</router-link>
				<router-link to='/detail' style="color: #333333;">下一个：{{item.detailnext}}</router-link>
			</p>
		</div>
		<DLfooter></DLfooter>
	</div>
</template>

<script>
	import DLheader from '../../components/header.vue'
	import DLfooter from '../../components/footer.vue'

	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	export default {
		name: "detail",
		data() {

			var self = this;
			return {
				id: this.$route.params.id, //产品列表传参
				imageSwiperOptions: {
					loop: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}
				},
				detailcontent: [{
					detailjiage: "350",
					detailimg: "http://dangle.yunsta.com/ueditor/upload/image/20190219/1550546672387609.jpg",
					nextprev: [{
						detailprev: "充气娃娃",
						detailprodectname: "避孕套",
						detailnext: "火箭筒"
					}]

				}],
			    bannerxh:[
					{
						weizhi:[
							{
								xinghaoname:"角落",
								xinghao:"GD-8852"
							}
						]
					}
				]
			}
		},
		// 		created(){
		// 			this.buildingInfo();
		// 		}，
		// 		methods:{
		// 			//获取产品信息 示范
		// 			buildingInfo() {
		// 				this.axios.get('/admin/' + this.id + '/info',{
		// 				    params:{
		// 				        'preview':this.preview,
		// 					}
		// 				}).then(res => {
		// 					this.detailcontent = res.data; //请求出来的楼盘数据
		// 					// console.log(res.data);
		// 				}).catch(function(error) {
		// 					// console.log(error);
		// 				})
		// 			},
		// 		},
		components: {
			DLheader,
			DLfooter,
			swiper,
			swiperSlide
		}

	}
</script>

<style>
	@import "../../assets/css/bootstrap.min.css";
	@import "../../assets/css/public.css";
	@import "../../assets/css/dangle.css";
	@import "../../assets/css/index.css";
	@import "../../assets/css/phone.css";
	@import "../../assets/css/product.css";
</style>
