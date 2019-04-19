<template>
	<div>
		<DLheader></DLheader>

		<!--头部轮播图片-->
		<!--平板和电脑端展示出来-->
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
					<img src="../assets/images/index/header01.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../assets/images/index/header02.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../assets/images/index/header03.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../assets/images/index/header04.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

				</div>
				<div class="item">
					<img src="../assets/images/index/header05.jpg" alt="当乐厨房电器-中国十大厨电品牌,厨房电器加盟之首选!">

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
						<swiper-slide class="swiper-slide"><img src="../assets/images/index/phone02.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!" style="width: 100%;" /></swiper-slide>
						<swiper-slide class="swiper-slide"><img src="../assets/images/index/phone03.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!" style="width: 100%;" /></swiper-slide>
						<swiper-slide class="swiper-slide"><img src="../assets/images/index/phone04.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!" style="width: 100%;" /></swiper-slide>
						<swiper-slide class="swiper-slide"><img src="../assets/images/index/phone05.jpg" alt="当乐厨房电器-厨房电器加盟首选品牌!" style="width: 100%;" /></swiper-slide>
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


					<li class="on"><span>厨房类</span></li>
					<li class="off"><span>卫浴类</span></li>
					<li class="off"><span>灯具类</span></li>


					<p class="mt10"><router-link to='discount'>特价专区</router-link></p>
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
					<swiper-slide class="swiper-slide" v-for="(item,index) in scrollfor" key='index'><img :src="item.scrollimg" width="100%"/></swiper-slide>

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
	import jquery from '../assets/js/jquery.js'
	import bootstrap from '../assets/js/bootstrap.min.js'

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
				customerspeak: [{
						"cuscontent": "如果你的脑海里出现了“放弃”两个字，一定要坚定地告诉自己：你都一无所有了，哪来东西让你放弃！"
					},
					{
						"cuscontent": "当在做了所有的努力之后，你发现都是你在自作多情，多此一举，那种心情别提有多糟了。"
					},
					{
						"cuscontent": "我再也不想听见任何人、任何形式的对不起， 我想被对得起"
					},
					{
						"cuscontent": "现在才知道人心易变，挥挥手便是无期。"
					},
					{
						"cuscontent": "我一生最怕是闲，一闲就把生命的意义全失去了。"
					},
					{
						"cuscontent": "如果有一天，有人甘愿承受你的所有。接受你的坏，拥抱你的好。你知道，这个人，就是那个对的人。"
					},
					{
						"cuscontent": "在这个吵得人分不清东南西北得世界里，我们手里所持有的干干净净的初衷，不多了。握好了，别丢了。明天还要赶很远的路。"
					},
					{
						"cuscontent": "谢谢陪我到每一站的你们，遇见你是我的幸运。"
					},
					{
						"cuscontent": "靠谱的人生特征大抵这六个字：言寡、体勤、心静。"
					},
					{
						"cuscontent": "我很容易做一件错事就是：关系不深，话说太多。"
					},
					{
						"cuscontent": "最卑微的大概是，你很长一段时间不理我，我明明难过的不得了，可是你一开始和我说话，我又开心到好像什么事都没发生过。"
					}
				],
				sellspeakcontent: [{
						"sellspeak": "不奋斗，你的才华如何配上你的任性；不奋斗，你的脚步如何赶上父母老去的速度；不奋斗，世界那么大，你靠什么去看看！"
					},
					{
						"sellspeak": "想了很久还是觉得，钱才是真正治愈心灵的良药鸭"
					},
					{
						"sellspeak": "人都有以第一印象定好坏的习惯，认为一个人好时，就会爱屋及乌；认为一个人不好时，就会全盘否认。"
					},
					{
						"sellspeak": "勉勉强强的东西都特别没意思，爱情是，友情是，一切都是。讨厌勉强，想要那种无所畏惧的心甘情愿。"
					},
					{
						"sellspeak": "不要太在意某些人说的话，因为他们有嘴，但不一定有脑。"
					},
					{
						"sellspeak": "人们总是喜欢用“如果”，去勾勒一些莫须有的奇迹，可大部分“如果”都不可兑现。"
					},
					{
						"sellspeak": "不要太乖，不想做的事可以拒绝，做不到的事不用勉强，不喜欢的话假装没听见，你的人生不是用来讨好别人，而是善待自己。"
					},
					{
						"sellspeak": "相逢太短，等不及茶凉，你若驻足，我陪你走完风霜。"
					}
				],
				danglenew: [{
					"newimg": "https://mpt.135editor.com/mmbiz_jpg/NnEeBiaKA3UAT0dj7uAlNsnYZ6mMT7nqFXBZyibmWngavpGwsKQKhuGfyRSeBXZ9C6EPaF5RdRMBeRVHR7p4IeCg/640?wx_fmt=jpeg",
					"newtitle": "敬初心、守匠心、赢未来！——贺当乐",
					"newcontent": "敬初心、 守匠心、 赢未来！—— 贺当乐整体厨卫春季大型招商会圆满落幕！2019· 03· 05 蓦然回首间， 当乐已稳步走过又一轮春夏秋冬， 2018 已圆满跨越， 2019 已扬帆起航 ",
					"newtime": "2019-03-07 11:41:39",
				}],
				newmore: [{
						"newmoretitle": "2019厨卫市场大趋势：创新、高精尖、健康、套系化是重点！",
						"newmorecontent": "新年新气象，“金厨银卫”装修正当时。随着精装房时代的到来，消费者对于厨卫产品的需求日益",
						"newmoretime": "2019-03-02 15:59:53",
					},
					{
						"newmoretitle": "听说这个品牌最近很火？背后真相竟然是这样！",
						"newmorecontent": "五年很短，弹指一挥间，转瞬即逝；五年也很长，长到足够完成充分的积累与沉淀，带来“质”的飞",
						"newmoretime": "2019-03-02 15:55:47",
					},
					{
						"newmoretitle": "【邀请函】巅峰盛会，等您前来！——当乐整体厨卫2019春季大型招商会",
						"newmorecontent": "当乐整体厨卫2019春季大型招商会将于3月5日在广东中山正式启幕，特此敬上邀请函一封",
						"newmoretime": "2019-02-21 14:03:06",
					}
				],
				scrollfor: [{
						"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
					},
					{
						"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
					},
					{
						"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
					},
					{
						"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
					}
				]
			}
		},

		created() {
			setInterval(this.scroll, 3000)
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
			}

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
	@import "../assets/css/bootstrap.min.css";
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
