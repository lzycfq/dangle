<template>
	<div class="all">
		<DLheader></DLheader>
		<div class="bg_f8 b_b_bbb">
			<div class="l-sub container">
				<div class="f-cb">
					<router-link to="/">首页</router-link><span><img src="../../assets/images/arrow_right_2.png" width="12px" height="12px">
						<router-link to="" style="float: right;">五金挂件</router-link>
					</span>

				</div>
			</div>
			<!--手机海报图-->
			<div class="hidden768">
				<if condition="$tpic['pic'] neq null">
					<img src="" style="width: 100%;" />
				</if>
			</div>
		</div>
		<!--分类标签切换页-->
		<div class="container louceng mtb20">
			<div id="tab_menu">
				<ul class="tab_ul">
					<li v-for="(value,key) in base" :class="key === base_index?' active':''" :key="key" @click="changeBaseIndex(key)"><span>{{value.tabs}}</span></li>
				</ul>
				<div class="tab_content xqtabs" v-for="(item,index) in dianqi" :class="index === base_index?'active':''" :key="index">
					<!--电气类content-->
					<div class="container-fluid show_content tab_a ">
						<ul class="chudian">
							<li class="min1200-w10 tab_content_li" v-for="(item,index) in item.dianqicontent">
								<router-link to=""><img :src="item.dianqiimg" /><br />{{item.dianqiname}}</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--产品-->
		<div class="container">
			<div class="mt10">
				<!-- 产品类型 -->
				<p class="suojin2 mb10 pt10 pb10 ft2 f b_b_bbb">类型：</span>
					<span class="p_flanks10 m_flanks5" @click="type_index()" v-for='(item,index) in listbiaoqian'>{{item.biaoqian}}</span>
				</p>
			</div>
		<!-- 产品列表 -->
		<ul class="product_commodity">
			<li class="col-lg-3 col-md-3 col-sm-3 col-xs-6 product_show" v-for="(item,index) in productlistcontent.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
				<router-link :to="{ name:'detail', params: {id:item.id}}">
					<div class="po_re" style="width: 100%;background-color: rgba(238,238,238,.3);border-radius: 5px;"><img :src="item.productlistimg" />
						<!-- <div class="s_title" v-if="item.productlisttitle.length!=0">
							<span>{{item.productlisttitle}}</span>
						</div>
							<div class="s_title" v-else>
							<span>{{item.productlisttitle}}</span>
						</div> -->
						</div> 

						<p class="text_center" style="height: 1.8rem;line-height: 1.8rem;font-size: 1rem;color: #333333;">{{item.productxinghao}}</p>
						<dl class="particulars">
							<dd>{{item.productjiage}}</dd>
							<dd>{{item.productpingpai}}</dd>
							<dd>{{item.productkuandu}}</dd>
							<dd>{{item.productdengji}}</dd>

						</dl>
				</router-link>
			</li>
		</ul>
		<div style="clear: both;"></div>
		<br />
		<!-- 分页 -->
		<el-pagination class="elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
		 :current-page="currentPage" prev-text="上一页"  next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
		 layout="total, sizes, prev, pager, next, jumper,slot" background :total="productlistcontent.length">
		</el-pagination>
		</div>
	<DLfooter></DLfooter>
	</div>
</template>

<script>
	import DLheader from '../../components/header.vue'
	import DLfooter from '../../components/footer.vue'
	export default {
		name: "chanpinlist",
		data() {

			return {
				currentPage: 1, //初始页
				pagesize: 8, //每页的数据
				dianqi: [],
				base_index: 1,
				base: [],
                listbiaoqian: [],				
				productlistcontent:[]			
			}

		},
		created() {
			//this.productlistcontent(); //调用标签数据
			this.buildbase();
			this.builddianqi();
			this.buildlistbiaoqian();
			this.buildproductlistcontent();
		},
		methods: {
			changeBaseIndex(index) {
				if (index!=3) {
					this.base_index = index;
				
				}else{	
						this.$router.push({
						path: '/discount', //${id}
					})
				}

			},
			//选择动态标签
			typeIndex(index) {
				// this.type_index = index;
				if (index > 0) {
					this.search_params['type'] = this.type_search[index];
				} else {
					this.search_params['type'] = '';
				}
				this.productlistcontent();
			},
			buildbase(){
				this.axios.get('/api/base').then(res => {
					this.base = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			builddianqi(){
				this.axios.get('/api/dianqi').then(res => {
					this.dianqi = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			
			buildlistbiaoqian(){
				this.axios.get('/api/listbiaoqian').then(res => {
					this.listbiaoqian = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			
			buildproductlistcontent(){
				this.axios.get('/api/productlistcontent').then(res => {
					this.productlistcontent = res.data.data //请求出来的标签数据
				}).catch(function(error) {
					console.log(error);
				})
			},
			//标签数据请求
			// 			buildingList() {
			// 			    console.log(this.search_params);
			// 				this.axios.get('/admin/list', {
			// 					params: this.search_params,
			// 				}).then(res => {
			// 					this.productlistcontent = res.data //请求出来的标签数据
			// 				}).catch(function(error) {})
			// 			},
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
	@import "../../assets/css/index.css";
	@import "../../assets/css/product.css";
.el-pagination{
	float: right !important;
	}
	.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #f60 !important;
    color: #FFF;
}
	.tab_ul .active {
		background: #ED7A02;
		color: white;
	}

	#tab_menu .xqtabs.active {
		display: block;
	}

	#tab_menu .xqtabs {
		display: none;
	}

	.po_re {
		position: relative;
	}

	.pageBtn {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		padding: 0 13px;
		background-color: #f60;
		color: #fff;
		white-space: nowrap;
		font-size: 14px;
		text-align: center;
		border: none;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}

	.pageBtn:hover {
		color: #fff;
	}

	#dataTables li {
		margin: 0 5px;
	}

	.pageBtn_disabled {
		border: 1px solid #e6e6e6;
		background: #fbfbfb;
		color: #ccc;
		cursor: not-allowed;
	}

	.pageBtn_disabled:hover {
		color: #ccc;
	}
</style>
