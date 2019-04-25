<template>
	<div>
		<DLheader></DLheader>
		<!--头部轮播图片-->
		<!--平板和电脑端展示出来-->
		<div id="carousel-example-generic" class="carousel slide lunbo_img show768" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li v-for="(item, index) in pcbannerdata"  data-target="#carousel-example-generic"
			 :data-slide-to="item.index" :class="[index == 0 ? 'active' : '']"></li>

			</ol>
			<!-- Wrapper for slides -->
			<div class="carousel-inner" role="listbox" id="div">
					<div class="item" v-for="(item,index) in pcbannerdata"  :class="[index == 0 ? 'active' : '']">
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
					<swiper :options="imageSwiperOptions" ref="imageSwiper" class='section-wrap'>
						<swiper-slide class="swiper-slide" v-for="(item, index) in mbbannerdata" :key="index">
							<img :src="item.mbdataimg" alt="当乐厨房电器-厨房电器加盟首选品牌!" style="width: 100%;" />
							</swiper-slide>
						
					</swiper>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<!--加盟保障-->
		<div class="baozhang_index show768">
			<div class="text_center" style="padding-top: 70px;">
				<h3 class="pt10">当乐给您更好的厨房电器加盟保障</h3>
				<h3 class="pt10">优质服务，只为让您创富无忧</h3>
			</div>
		</div>
		<!--企业实力-->
		<div class="shili_index">
			<div class="col-sm-6"></div>
			<div class="col-sm-6">
				<h2 class="shili_index_title" style="">企业实力&emsp;<big style="color: #ED7A02;">当乐值得信赖</big></h2>
				<div class="shili_ziliang mt10">
					<h3 class="pt5" style="font-weight: bold;">过硬质量</h3>
					<p class="pt5 f13">一流研发团队+先进生产设备+近两万平米生产车间+</p>
					<p class="pt5 f13">近百家参股及合作厂家，严格保证当乐厨房电器产品质量和产能</p>
				</div>
				<div class="shili_zhengce mt10">
					<h3 class="pt5" style="font-weight: bold;">强大政策</h3>
					<p class="pt5 f13">“扶商+富商”核心政策，百人精英营销团队，为代理商提供营销支持、培训支持</p>
					<p class="pt5 f13">与技术支持，让当乐每一个厨电品牌代理商成为懂产品、能营销、会售后的行业精英</p>
				</div>
				<div class="shili_shouhou mt10">
					<h3 class="pt5" style="font-weight: bold;">全面售后</h3>
					<p class="pt5 f13">“售后承诺+全国联保”双重保障，搭建消费者至厨房电器厂家的快捷通道。</p>
					<p class="pt5 f13">不定期专业培训，增强厨电品牌代理商的营销和售后服务能力</p>
				</div>
				<div class="shili_guihua mt10">
					<h3 class="pt5" style="font-weight: bold;">长远规划</h3>
					<p class="pt5 f13">厨电、厨具、卫浴、生活电器、灯饰，一应俱全，产品丰富，品牌附加值高</p>
				</div>
			</div>
		</div>
		<!--产品标签切换页-->
		<div class="container louceng mtb20">
			<div id="tab_menu" style="overflow: hidden;">
				<ul class="tab_ul">
					<li class="on">
						<router-link to='chanpinlist'><span>厨房类</span></router-link>
					</li>
					<li class="off">
						<router-link to='chanpinlist'  style="color: #333;">卫浴类</router-link>
					</li>
					<li class="off">
						<router-link to='chanpinlist'  style="color: #333;">灯具类</router-link>
					</li>
					<p class="mt10">
						<router-link to='discount' >特价专区</router-link>
					</p>
				</ul>
			</div>
			<div style="overflow: hidden;margin-top: 10px;">
				<div class="col-sm-6 pb10">
					<img src="http://dangle.yunsta.com/uploads/type/5c76524513997.jpg" alt="" title="" style="max-width: 100%;">

				</div>
				<div class="col-sm-6 pb10">
					<img src="http://dangle.yunsta.com/uploads/type/5c765256a7546.jpg" alt="" title="" style="max-width: 100%;">

				</div>
				<div class="col-sm-6 pb10">
					<img src="http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg" alt="" title="" style="max-width: 100%;">
				</div>
				<div class="col-sm-6 pb10">
					<img src="../assets/images/index/tejia.jpg" alt="特价专区" title="特价专区" style="max-width: 100%;">
				</div>
			</div>
		</div>
		<section class="show768" style="padding-top: 1rem;padding-bottom: 1rem;cursor: default;">
			<div class="of_hid" style="max-width: 1320px;margin: auto;">
				<h3 style="text-transform: uppercase;text-align: center">加盟当乐&nbsp;<big style="color: #ED7A02;">让您轻松盈利</big></h3>
				<div class="scrolltab">
					<div class="mt20" style="cursor: default;">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<swiper :options="scrolltabimg" ref="imageSwiper">
									<swiper-slide class="swiper-slide" v-for="(item,index) in scrollfor" :key='index'><img :src="item.scrollimg"
										 width="100%" /></swiper-slide>
								</swiper>
							</div>
							<div class="swiper-button-next swiper-button-white"></div>
							<div class="swiper-button-prev swiper-button-white"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--轮播滚动留言-->
		<div class="container mtb10 zhaoS" id="tab_zhaos">
			<ul style="overflow: hidden;" class="tab_ul hidden768">
				<li class="on col-xs-4">客户评论</li>
				<li class="off col-xs-4">经销商“说”</li>
			</ul>
			<ul class="zhaoS_content">
				<li class="tab_a zhaoS_show col-sm-6 col-xs-12">
					<div>
						<h4>当乐厨房电器客户评论</h4>
						<div class="customer_speak">
							<ul>
								<li ref="rollul" v-for="(item,index) in customerspeak" :class="{anim:animate==true}">
									<a style="display: block;" href="/Contact/wenda.html#wenda">
										<p class="f12" title="item.cuscontent">{{item.cuscontent}}</p>
									</a>
								</li>

							</ul>
						</div>
					</div>
				</li>
				<li class="tab_a zhaoS_hidden col-sm-6 col-xs-12">
					<div>
						<h4>经销商“说”</h4>
						<div class="sell_speak">
							<ul>
								<li v-for="(item,index) in sellspeakcontent" :class="{anim:animate==true}">
									<p title="item.sellcontent">{{item.sellspeak}}</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="text_center mtb20">
			<h2 class="text_b">新闻资讯</h2>
		</div>
		<div class="container mtb20" id="index_news">
			<div class="tab_ul hidden768 text_center" style="overflow: hidden;">
				<div class="col-xs-6 on ptb10">当乐新闻</div>
				<div class="col-xs-6 off ptb10">厨电资讯</div>
			</div>
			<div style="overflow: hidden;">
				<div class="tab_a news_show col-sm-6">
					<p class="show768">
						<router-link :to="{path:'/about'}" style="color: #444444;">当乐新闻<img src="../assets/images/arrow_right_2.png"></router-link>
					</p>
					<div>
						<div style="overflow: hidden;height: 150px;margin-top: 15px;" v-for="(item,index) in danglenew">
							<!--左-->
							<div style="width: 35%;margin-right:1.5%;float: left;height: 100%;text-align: center;overflow: hidden;"><img
								 :src="item.newimg" alt="" style="height: 100%;width: auto;"></div>
							<!--右-->
							<div style="float:left;width: 60%;">
								<!--标题-->
								<h3 class="news_index_first_title" title="item.newtitle">{{item.newtitle}}</h3>
								<div class="news_index_first_content">{{item.newcontent}}</div>
								<div class="news_index_first_time">{{item.newtime}}</div>
							</div>
						</div>
						<div style="border-bottom: 2px solid #ccc;padding: 5px 10px 10px 0;" v-for="(item,index) in newmore">
							<p class="news_index_two_title">{{item.newmoretitle}}</p>
							<p class="news_index_two_content f13">{{item.newmorecontent}}</p>
							<p class="news_index_two_time f12">{{item.newmoretime}}</p>
						</div>
					</div>
				</div>
				<div class="tab_a news_show col-sm-6">
					<p class="show768">
						<router-link :to="{path:''}" style="color: #444444;">厨电咨询<img src="../assets/images/arrow_right_2.png"></router-link>
					</p>
					<div>
						<div style="overflow: hidden;height: 150px;margin-top: 15px;" v-for="(item,index) in danglenew">
							<!--左-->
							<div style="width: 35%;margin-right:1.5%;float: left;height: 100%;text-align: center;overflow: hidden;"><img
								 :src="item.newimg" alt="" style="height: 100%;width: auto;"></div>
							<!--右-->
							<div style="float:left;width: 60%;">
								<!--标题-->
								<h3 class="news_index_first_title" title="item.newtitle">{{item.newtitle}}</h3>
								<div class="news_index_first_content">{{item.newcontent}}</div>
								<div class="news_index_first_time">{{item.newtime}}</div>
							</div>
						</div>
						<div style="border-bottom: 2px solid #ccc;padding: 5px 10px 10px 0;" v-for="(item,index) in newmore">
							<p class="news_index_two_title">{{item.newmoretitle}}</p>
							<p class="news_index_two_content f13">{{item.newmorecontent}}</p>
							<p class="news_index_two_time f12">{{item.newmoretime}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<DLfooter></DLfooter>
	</div>
</template>

<script>
	import DLheader from '../components/header'
	import DLfooter from '../components/footer.vue'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';

	export default {
		name: "index",
		data() {
			var self = this;
			return {
				pcbanner: true,
				mbbanner: false,
				animate: true,
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
				scrolltabimg: {
					slidesPerView: 3,
					spaceBetween: 70,
					loop: true,
					autoplay: true, //等同于以下设置
					pagination: {
						el: '.swiper-pagination',

					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				},
                pcbannerdata: [],
				mbbannerdata:[],
				customerspeak: [],
				sellspeakcontent: [],
				danglenew: [],
				scrollfor: [],
				newmore:[]
			}
		},

		created() {
			setInterval(this.scroll, 3000);
			this.buildpcbannerdata();
			this.buildmbbannerdata();
			this.buildcustomerspeak();
			this.buildsellspeakcontent();
			this.builddanglenew();
			this.buildscrollfor();
			this.buildnewmore();
		},
		mounted() {
			window.onresize = () => {
				return (() => {
					var winWidth = document.body.clientWidth;
					if (winWidth <= 1230) {
						$('#body').className = "grid-1010";
					} else if (winWidth <= 1410) {
						$('#body').className = "grid-1230";
					} else if (winWidth > 1410) {
						$('#body').className = "grid-1410";
					} else {
						alert("do not know!");
					}
				})()
			}
			new WOW().init();
		},
		//移动端下客户评论与经销商说切换
		mounted() {
			window.addEventListener('load', function() {
				var myTab = document.getElementById('tab_zhaos'); //获取整个节点
				var myUl = myTab.getElementsByClassName('tab_ul')[0]; //获取单个节点
				var myLi = myUl.getElementsByTagName('li'); //得到数组
				var myDiv = myTab.getElementsByClassName('tab_a'); //子数组
				for (var i = 0; i < myLi.length; i++) {
					myLi[i].index = i;
					myLi[i].onclick = function() {
						for (var j = 0; j < myLi.length; j++) {
							myLi[j].className = 'off col-xs-4';
							myDiv[j].className = 'tab_a zhaoS_hidden col-lg-4 col-md-4 col-sm-6 col-xs-12';
						};
						this.className = 'on col-xs-4';
						myDiv[this.index].className = 'tab_a zhaoS_show col-lg-4 col-md-4 col-sm-6 col-xs-12';
					}
				}
			});
		},
		//移动端下客新闻资讯板块切换
		mounted() {
			window.addEventListener('load', function() {
				var myTab = document.getElementById('index_news'); //获取整个节点
				var myUl = myTab.getElementsByClassName('tab_ul')[0]; //获取单个节点
				var myLi = myUl.getElementsByTagName('div'); //得到数组
				var myDiv = myTab.getElementsByClassName('tab_a'); //子数组
				for (var i = 0; i < myLi.length; i++) {
					myLi[i].index = i;
					myLi[i].onclick = function() {
						for (var j = 0; j < myLi.length; j++) {
							myLi[j].className = 'col-xs-6 off ptb10';
							myDiv[j].className = 'tab_a news_hidden col-sm-6';
						};
						this.className = 'col-xs-6 on ptb10';
						myDiv[this.index].className = 'tab_a news_show col-sm-6';
					}
				}
			});
		},
		methods: {
			scroll() {
				var that = this;
				var con = this.$refs.rollul;
				con[0].style.marginTop = "0px";
				this.animate = !this.animate;
				setTimeout(function() {
					that.customerspeak.push(that.customerspeak[0]);
					that.customerspeak.shift();
					that.sellspeakcontent.push(that.sellspeakcontent[0]);
					that.sellspeakcontent.shift();
					con[1].style.marginTop = '0px';
					that.animate = !that.animate;
				}, 0)
			},
			//pc主页轮播数据
			buildpcbannerdata(){
				this.axios.get('/api/pclunbodata').then(res => {
					this.pcbannerdata = res.data.data //请求出来的标签数据
				
				}).catch(function(error) {
					console.log(error);
				})
			},
			//移动端轮播数据
				buildmbbannerdata(){
				this.axios.get('/api/mbbannerdata').then(res => {
					this.mbbannerdata = res.data.data //请求出来的标签数据
				
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildcustomerspeak(){
				this.axios.get('/api/customerspeak').then(res => {
					this.customerspeak = res.data.data //请求出来的标签数据
				
				}).catch(function(error) {
					console.log(error);
				})
			},
			
			buildsellspeakcontent(){
				this.axios.get('/api/sellspeakcontent').then(res => {
					this.sellspeakcontent = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			
			builddanglenew(){
				this.axios.get('/api/danglenew').then(res => {
					this.danglenew = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			
				buildscrollfor(){
				this.axios.get('/api/scrollfor').then(res => {
					this.scrollfor = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			
			buildnewmore(){
				this.axios.get('/api/newmore').then(res => {
					this.newmore = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
		},
		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide,
			DLheader,
			DLfooter

		},
	}
</script>

<style>
	/* //@import "../assets/css/bootstrap.min.css"; */
	@import "../assets/css/public.css";
	@import "../assets/css/dangle.css";
	@import "../assets/css/index.css";
	@import "../assets/css/video-js.css";
	@import "../assets/css/phone.css";
	@import "../assets/css/list.css";
	@import "../assets/css/swiper.min.css";

	/*以下是隐藏video的下载功能*/
	video::-internal-media-controls-download-button {
		display: none;
	}

	video::-webkit-media-controls-enclosure {
		overflow: hidden;
	}

	video::-webkit-media-controls-panel {
		width: calc(100% + 30px);
	}

	@media screen and (min-width: 420px) {
		.news_content img {
			height: 200px !important;
		}

		.jiameng_title {
			letter-spacing: 0.3em;
		}
	}

	@media screen and (max-width: 420px) {
		.news_content img {
			height: 150px !important;
		}
	}

	.shili_index_title {
		font-weight: bold;
		margin-top: 50px;
		margin-bottom: 60px;
	}

	@media screen and (max-width: 768px) {
		.shili_index_title {
			font-size: 18px;
			margin-top: 30px;
			margin-bottom: 40px;
		}
	}

	.anim {
		transition: all 0.5s;

	}
</style>
