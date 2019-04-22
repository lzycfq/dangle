<template>
<div class="all">
		<DLheader></DLheader>
		<div class="mb10">
			<img src="../../assets/images/news/news_header.jpg" style="width: 100%" />
		</div>
			<!--news content-->
		<section class="container">
		    <!--分类-->
			<div style="overflow: hidden;position: relative;">
				<div class="about_nav">
							<div class="onAbout"><router-link to="/listnews">当乐新闻<span></span></router-link></div>
							<div><router-link to="/listzhishi">橱电知识<span></span></router-link></div>
							<div><router-link to="/listzixun">橱电咨询<span></span></router-link></div>

				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			  <div class="news-content">
			  <ul class="row" id="news_list" style="padding: 30px 0;">
						<li class="col-lg-4 col-md-4 col-sm-6 col-xs-6" v-for="(item,index) in listnews.slice((currentPage-1)*pagesize,currentPage*pagesize)">
							<router-link to=''>
								<div class="listNews" style="">
									<img class="ln-lt-i" :src="item.listNewsimg" title="" alt="">
								</div>
								<h3 style="text-align: center;font-size:1.2rem;">{{item.listNewscontent}}</h3>
								<p>{{item.listNewstime}}</p>
							</router-link>
						</li>
					
			  </ul>
			 <el-pagination class="elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
			  :current-page="currentPage" prev-text="上一页"  next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
			  layout="total, sizes, prev, pager, next, jumper,slot" background :total="listnews.length">
			 </el-pagination>	

			</div>
			</section>
		<DLfooter></DLfooter>
		</div>
</template>

<script>
	import DLheader from '../../components/header.vue'
	import DLfooter from '../../components/footer.vue'

	export default {
		name: "listnews",
		data() {
		
			return {
				currentPage: 1, //初始页
				pagesize: 6, //每页的数据
                //分页数据
				listnews:[
					{
						"listNewsimg":"http://img3.imgtn.bdimg.com/it/u=1752243568,253651337&fm=26&gp=0.jpg",
						"listNewscontent":"夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，",
						"listNewstime":"2019-2-21 15:35分"
					},
					{
						"listNewsimg":"http://img3.imgtn.bdimg.com/it/u=1996499788,3346940487&fm=26&gp=0.jpg",
						"listNewscontent":"撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却如花儿般如痴如醉。",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img2.imgtn.bdimg.com/it/u=3496345838,732839400&fm=26&gp=0.jpg",
						"listNewscontent":"一直执着于生命的简约格调，只愿用一颗淡然的心看云卷云舒，看季节更迭。许多不合时节的事物，",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img1.imgtn.bdimg.com/it/u=3372907541,1722073626&fm=26&gp=0.jpg",
						"listNewscontent":"幸福的寄往有你的那个城市。从此，在我心里，于我的生命里，轻握你许的安暖，静静地在岁月的彼岸，",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img5.imgtn.bdimg.com/it/u=238039960,4175226785&fm=26&gp=0.jpg",
						"listNewscontent":"一段情，反复的掂量，最后加深了岁月的绵长。一路追赶里，一路追忆里，最后得到的是什么，",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img2.imgtn.bdimg.com/it/u=3527801472,3044723028&fm=26&gp=0.jpg",
						"listNewscontent":"深秋还远，徐徐的风吹着，却也有了几分萧瑟，春天，不仅有满天飘飞的花儿，还有到处弥散着花的幽香。",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img4.imgtn.bdimg.com/it/u=2429510219,484081091&fm=26&gp=0.jpg",
						"listNewscontent":"樱花有单樱和双樱，她们绽放时满树灿烂，清香扑鼻，单樱白的如雪如云，双樱色彩如火似霞。",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img4.imgtn.bdimg.com/it/u=2430175079,1267550225&fm=26&gp=0.jpg",
						"listNewscontent":"曾经以为，相爱的人一定要相守，只有相守，情感才能长久。可是，此岸和彼岸只不过是空间的差距，",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img4.imgtn.bdimg.com/it/u=2429510219,484081091&fm=26&gp=0.jpg",
						"listNewscontent":"窗外的雨不再是清冷的秋雨了，在我的眸里是一种柔软，似撒娇少女的情怀，是怜、是爱",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img2.imgtn.bdimg.com/it/u=2939776710,478628894&fm=26&gp=0.jpg",
						"listNewscontent":"尖轻触玻窗，嗤嗤的响声，惊动了脆弱的心脏，一阵阵的酸楚，像浪潮般袭来，若果这样酸酸的痛可以代替撕心裂肺，",
						"listNewstime":"2019-3-21 5:35分"
					},
					{
						"listNewsimg":"http://img0.imgtn.bdimg.com/it/u=117263606,2576318590&fm=26&gp=0.jpg",
						"listNewscontent":"夜幕降临了，春雨柔柔的亲吻着薄如蝉翼的纱帘，有节奏的淅沥在窗棂上，更增添了无限的意念。",
						"listNewstime":"2019-3-21 5:35分"
					}
				]
				}
				
				},
				
				  methods: {
               // 初始页currentPage、初始每页数据数pagesize和数据data
               handleSizeChange: function(size) {
               	this.pagesize = size;
               	console.log(this.pagesize) //每页下拉显示数据
               },
               handleCurrentChange: function(currentPage) {
               	this.currentPage = currentPage;
               	console.log(this.currentPage) //点击第几页
               },
},

				components: {
					DLheader,
					DLfooter
				}
				
				}
</script>

<style>
		@import "../../assets/css/bootstrap.min.css";
	@import "../../assets/css/public.css";
	@import "../../assets/css/dangle.css";
	@import "../../assets/css/aboutUs.css";
    @import "../../assets/css/news.css";
	@import "../../assets/css/cs-select.css";
	@import "../../assets/css/cs-skin-underline.css";
	.pageBtn{
		display: inline-block;
		height:30px;
		line-height:30px;
		padding:0 13px;
		background-color: #f60;
		color: #fff;
		white-space:nowrap;
		font-size: 14px;
		text-align: center;
		border:none;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}
	.pageBtn:hover{
		color: #fff;
	}
	#pageCon li{
		margin:0 5px;
	}
	.pageBtn_disabled{
		border: 1px solid #e6e6e6;
		background: #fbfbfb;
		color: #ccc;
		cursor: not-allowed;
	}
	.pageBtn_disabled:hover{
		color: #ccc;
	}
	.listNews{
		height:200px;
		line-height: 200px;
		text-align: center;
		overflow: hidden;
	}
	@media screen and (max-width: 768px) {
		.listNews{
			height:140px;
			line-height: 140px;
		}
	}
	.listNews>img{
		max-width:100%;
		max-height:100%;
	}
	
	.el-pagination{
		float: right !important;
	}
	
</style>
