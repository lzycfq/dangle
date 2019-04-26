<template>
	<div class="all">
		<DLheader></DLheader>
		<!--位置-->
		<div class="bg_f8 b_b_bbb">
			<div class="l-sub container">
				<div class="f-cb" v-for="(item,index) in weizhi">
					<router-link to="/">首页</router-link><span><img src="../../assets/images/arrow_right_2.png" width="12px" height="12px"></span>
					<router-link to="/chanpinlist">{{item.weizhiname}}</router-link><span><img src="../../assets/images/arrow_right_2.png"
						 width="12px" height="12px"></span>
					<span class="cur" style="display: block;font-size: 12px;padding: 0 5px;">{{item.weizhixinghao}}</span>
				</div>
			</div>
			<!--平板和电脑端展示出来-->
			<div id="carousel-example-generic" class="carousel slide lunbo_img show768" data-ride="carousel" v-for="(item, id) in allpcbannerdetail">
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<li v-for="(item, index) in item.pcbannerdetail" data-target="#carousel-example-generic" :data-slide-to="item.index"
					 :class="[index == 0 ? 'active' : '']"></li>
				</ol>
				<!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox" id="div">
					<div class="item" v-for="(item,index) in item.pcbannerdetail" id="getid" :data-indexId="item.id" :class="[index == 0 ? 'active' : '']">
						<img :src="item.dataimg" />
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
						<swiper :options="imageSwiperOptions" ref="imageSwiper" class='section-wrap' v-for="(item,index) in allmbbannerdetail" :key="index">
							<swiper-slide class="swiper-slide" v-for="(item, index) in item.mbbannerdetail" :key="index">
								<img :src="item.mbdataimg" alt="当乐厨房电器-厨房电器加盟首选品牌!" style="width: 100%;" />
							</swiper-slide>

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
				<router-link to='/detail, params: {id: item.id}}' style="color: #333333;">下一个：{{item.detailnext}}</router-link>
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
				//id: this.$route.params.id, //产品列表传参

				allpcbannerdetail: [],
				allmbbannerdetail: [],
				weizhi: [],
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
				detailcontent: []
			}
		},
		created() {
			this.buildallpcbannerdetail();
			this.buildallmbbannerdetail();
			this.builddetailcontent();
			this.buildweizhi();
		},
		methods: {


			buildallpcbannerdetail(index) {
				let newId = this.$route.params.id;
				this.axios.post('/api/allpcbannerdetail/').then(res => {
					//this.axios.get('/admin/' + this.id + '/base',{
					//                     params:{
					//                         'preview':this.preview, //带参数请求
					//                     }			

					//循环遍历数组一的每一个对象
// 										for(var i=0;i<this.sb.length;i++){
// 										alert("a")
// 									//如果数组的id 等于传进来的参数id
// 										 if(this.sb[i].id==newId){
// 											 alert("a")
// 										//改变thisStrList的第一个对象，并显示
// 										 //this.thisStrList[0] = this.aticleList[newId-1];
// 										        this.allpcbannerdetail[0] = res.data.sb[newId-1];	
// 										 }
// 										}
//    const goods=this.data.sb.filter(item=>{
//       return this.sb[i].id==id;
// 	  alert(id)
//     });
					if (newId) {
						this.allpcbannerdetail[0] = res.data.sb[newId - 1];
					}
				}).catch(function(error) {
					console.log(error);

				})
			},
			buildallmbbannerdetail() {
				let newId = this.$route.params.id;
				this.axios.get('/api/allmbbannerdetail').then(res => {
					if (newId) {
						this.allmbbannerdetail[0] = res.data.sb[newId - 1] //请求出来的标签数据	
					}
				}).catch(function(error) {
					console.log(error);

				})
			},

			builddetailcontent() {
				this.axios.get('/api/detailcontent').then(res => {
					this.detailcontent = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);

				})
			},

			buildweizhi() {
				let newId = this.$route.params.id;
				this.axios.get('/api/weizhi').then(res => {
					if (newId) {
						this.weizhi[0] = res.data.sbone[newId - 1] //请求出来的标签数据
					}
				}).catch(function(error) {
					console.log(error);

				})
			}
		},
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
