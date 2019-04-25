<template>
	<div class="all">
		<DLheader></DLheader>
		<div style="width: 100%;"><img src="../assets/images/index/header01.jpg" style="width: 100%;" /></div>
		<!--AboutUs content-->
		<section class="container aboutUS_content">
			<div style="overflow: hidden;position: relative;">
				<div class="about_nav">
					<div class="onAbout">
						<router-link to="/message" >代理经销商留言<span></span></router-link>
					</div>
					<div>
						<router-link to="/consult" style="color: #333;">招商咨询<span></span></router-link>
					</div>
					<div>
						<router-link to="/handbook" style="color: #333;">招商手册<span></span></router-link>
					</div>
				</div>
				<hr style="position: absolute;width: 100%;background-color: #000;bottom: -4px;z-index: 1;" />
			</div>
			<h3 style="text-align: center;margin: 80px 0 10px;letter-spacing: 1.5px;">代理经销留言</h3>
			<h4 style="color: #f08300;text-align: center;">AGENT&nbsp;DISTRIBUTION&nbsp;MESSAGE</h4>
			<form style="width: 45%;margin: 10px auto;" action="/toMessage.html" method="post" id="msgForm" @submit.prevent="submit">
				<div class="form-group">
					<label>用户姓名：</label>
					<input type="text" v-model="user.usename" class="form-control" id="usename" placeholder="用户姓名" name="name">
				</div>
				<div class="form-group">
					<label>联系电话：<span style="color: red;">（必填，将为您隐藏）*</span></label>
					<input type="text" v-model="user.phone" class="form-control" id="phone" placeholder="联系电话" name="phone">
				</div>
				<div class="form-group">
					<label>留言内容：</label>
					<textarea class="form-control" v-model="user.content" rows="5" maxlength="220" style="resize: none;" id="content"
					 name="content" onpaste="return false"></textarea>
				</div>
				<input type="submit" class="btn btn-default" value="提交留言" id="mesJoin" >
			</form>
			<div class="comment-list col-md-12 col-xs-12" id="message">

				<div>
					<!--评论-->
					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2019-02-16 20:13:32</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">徐佳佳：当乐厨卫的新品厨房电器什么时候可以订货啊？看你们发的视频，油烟机真的太精致了，吸力也大，把手机都吸住了</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2019-02-10 09:13:55</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">王乐：当乐厨卫将以一如既往的质量和服务，做更好的厨电卫浴产品。</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2019-02-06 10:14:12</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">李国强：这次去厨房电器招商会了一定要到展厅好好看看</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2019-01-11 14:04:32</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">贵州麻江：当乐厨卫品质精良，团队作风优良，值得信赖!</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2018-11-16 16:11:51</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">周冬：真是好久没有这样认真学习过了，不过这次培训让我更进一步认识了当乐厨卫，产品的理论知识加现场拆卸安装，真是通俗易懂，营销课件高总讲的也是很精彩，让我们大家欢声笑语不断！</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2018-09-16 10:45:10</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">李奇荣：因为刚开始没有听说这个品牌，一直在关注你们，这次我也是来了解了你们的公司的人员和经验模式才敢去做，认识高总很荣幸，希望我们合作共赢！</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2018-06-19 19:25:29</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">可馨：关注当乐厨卫这么久，感觉你们都很努力，有机会一起合作</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2018-05-05 10:55:46</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">李勇：了解了当乐厨卫，确实不错，务实，做实事，有创新精神！</p>
					</div>

					<div style="margin-bottom: 10px;border: 1px dashed #ccc;padding: 5px 0;">
						<p style="font-size: 12px;text-align: right;padding-right:50px;color: #ccc;">时间：2018-03-16 17:22:05</p>
						<p style="font-size: 16px;letter-spacing: 2px;padding-left: 3px;">杨洋：当乐厨卫每堂课都是干货，学到了很多技术！</p>
					</div>
					<!--回答-->
					<!--<div style='margin-bottom: 10px;border: 1px dashed #ccc;margin-left: 10px;'>
						<p style='font-size: 16px;letter-spacing: 2px;padding-left: 3px;'>回复内容:".$v['bcontent']."</p >
						<p style='text-align: right;font-size: 12px;padding-right:50px;color: #ccc;'>时间：".$v['baddtime']."</p >
					</div>-->
				</div>


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
				user: {
					uesrname: '',
					phone: '',
					content: ''
				}
			}

		},
		methods: {
			 submit: function() {
				const self = this
				if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(self.phone)) {
					alert("电话号码格式错误");				
				} else if (self.phone == "" || !self.phone) {
					alert("请输入电话号码");					
				} else {
					
					var formData = JSON.stringify(this.user);
					this.$get.post('/path/to', formData).then((response) => {
						// success callback
					}, (response) => {
						// error callback
					});
				}
			},
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
