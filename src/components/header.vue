<template>
<header class="container">
    <!--头部导航栏-->
    <nav class="navbar nav_head">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed btn_br" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
            </button>
            <div style="height:54px;overflow:hidden;"><a href="/" title="当乐厨卫官网-中国十大厨电品牌_厨电品牌排行榜前十"><img src="../assets/images/logo.png" alt="当乐厨卫官网-中国十大厨电品牌_厨电品牌排行榜前十" title="" class="nav_header_img"></a></div>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav nav_text" id="tiaozhuan">
                <li role="presentation"><router-link to="/" title="厨房电器" >核心产品</router-link></li>
                <li role="presentation"><router-link to="/about" >关于当乐</router-link></li>
                <li role="presentation"><router-link to="/listnews" >厨电资讯</router-link></li>
                <li role="presentation"><router-link to="/brand"  rel="nofollow">品牌传播</router-link></li>
                <li role="presentation"><router-link to="/handbook"rel="nofollow">招商加盟</router-link></li>
                <li role="presentation"><router-link to="www.jingdong.com" target="_blank" rel="nofollow">在线商城</router-link></li>
            </ul>
            <form class="navbar-form navbar-right" @submit.prevent="seek">
                <div class="form-group">
                    <input type="text" class="form-control"  v-model="seek.seekname" placeholder="产品型号" name="content">
                </div>
                <input type="submit" class="btn btn-default" id="seekBtn" value="搜索">
            </form>
        </div>
    </nav>
</header>
</template>
<script>
	export default {
		name: "header",
		data() {
		
			return {
				}
				seek:{
					seekname:''
				}
				},
				
				methods:{
					seek(){
						var formData = JSON.stringify(this.seek);
						this.$get.post('/path/to', formData).then((response) => {
							// success callback
						 router.push('/seek');
						}, (response) => {
							// error callback
						});
					}
				}
				}
</script>
<style></style>