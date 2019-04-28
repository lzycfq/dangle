const Mock = require('mockjs')
import header01 from '@/assets/images/index/header01.jpg'
import header02 from '@/assets/images/index/header02.jpg'
import header03 from '@/assets/images/index/header03.jpg'
import header04 from '@/assets/images/index/header04.jpg'
import header05 from '@/assets/images/index/header05.jpg'

import mbheadr02 from '@/assets/images/index/phone02.jpg'
import mbheadr03 from '@/assets/images/index/phone03.jpg'
import mbheadr04 from '@/assets/images/index/phone04.jpg'
import mbheadr05 from '@/assets/images/index/phone05.jpg'
const pclunbodata = Mock.mock(
	'/api/pclunbodata', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					index: 0,
					dataimg: header01
				},
				{
					index: 1,
					dataimg: header02
				},
				{
					index: 2,
					dataimg: header03
				},
				{
					index: 3,
					dataimg: header04
				},
				{
					index: 4,
					dataimg: header05
				},
			],
			message: '查询成功'
		}
	})
const mbbannerdata = Mock.mock(
	'/api/mbbannerdata', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					mbdataimg: mbheadr02
				},
				{
					mbdataimg: mbheadr03
				},
				{
					mbdataimg: mbheadr04
				},
				{
					mbdataimg: mbheadr05
				}
			],
			message: '查询成功'
		}
	})
const customerspeak = Mock.mock(
	'/api/customerspeak', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
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
			message: '查询成功'
		}
	})

const sellspeakcontent = Mock.mock(
	'/api/sellspeakcontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
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
			message: '查询成功'
		}
	})
const danglenew = Mock.mock(
	'/api/danglenew', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				"newimg": "https://mpt.135editor.com/mmbiz_jpg/NnEeBiaKA3UAT0dj7uAlNsnYZ6mMT7nqFXBZyibmWngavpGwsKQKhuGfyRSeBXZ9C6EPaF5RdRMBeRVHR7p4IeCg/640?wx_fmt=jpeg",
				"newtitle": "敬初心、守匠心、赢未来！——贺当乐",
				"newcontent": "敬初心、 守匠心、 赢未来！—— 贺当乐整体厨卫春季大型招商会圆满落幕！2019· 03· 05 蓦然回首间， 当乐已稳步走过又一轮春夏秋冬， 2018 已圆满跨越， 2019 已扬帆起航 ",
				"newtime": "2019-03-07 11:41:39",
			}],

			message: '查询成功'
		}
	})
const scrollfor = Mock.mock(
	'/api/scrollfor', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
				},
				{
					"scrollimg": "http://dangle.yunsta.com/uploads/type/5c76524513997.jpg"
				},
				{
					"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
				},
				{
					"scrollimg": "http://dangle.yunsta.com/uploads/type/5c765265d6270.jpg"
				}
			],
			message: '查询成功'
		}
	})
const newmore = Mock.mock(
	'/api/newmore', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
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
			message: '查询成功'
		}
	})
//产品页面 chanpinlist.vue

const base = Mock.mock(
	'/api/base', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					"tabs": "厨电类"
				},
				{
					"tabs": "卫浴类"
				},
				{
					"tabs": "灯具类"
				},
				{
					"tabs": "特价专区"
				}
			],
			message: '查询成功'
		}
	})
const dianqi = Mock.mock(
	'/api/dianqi', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f1238592e.png",
							dianqiname: "吸油烟机"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f14857f1f.png",
							dianqiname: "燃气灶"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f16142520.png",
							dianqiname: "消毒柜"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f17f9a259.png",
							dianqiname: "燃气热水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f19e9b4fe.png",
							dianqiname: "嵌入式蒸箱"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f1b51d67c.png",
							dianqiname: "嵌入式烤箱"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f2261fb74.png",
							dianqiname: "净水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f23517de4.png",
							dianqiname: "集成灶"

						}
					]
				},
				{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f3604c246.png",
							dianqiname: "五金挂件"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f37cf3c77.png",
							dianqiname: "电热水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f39abd81e.png",
							dianqiname: "浴室柜"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f3ae544fd.png",
							dianqiname: "陶瓷件"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f4b69b62a.png",
							dianqiname: "浴缸"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f4c8df447.png",
							dianqiname: "淋浴房"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f62e6f512.png",
							dianqiname: "五金水龙头"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f62e6f512.png",
							dianqiname: "水槽"

						},

					]
				},
				{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f686c311f.png",
							dianqiname: "吊灯"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f7a9cc42d.png",
							dianqiname: "吊扇灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f7b9b3562.png",
							dianqiname: "光源灯带"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f8d8d88ca.png",
							dianqiname: "过道灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f8ed0cf94.png",
							dianqiname: "开关插座"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f909dc29e.png",
							dianqiname: "客厅灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f92447d9c.png",
							dianqiname: "平板灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f9445b18e.png",
							dianqiname: "卧室灯"

						},
					],
				}

			],
			message: '查询成功'
		}
	})
const listbiaoqian = Mock.mock(
	'/api/listbiaoqian', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					biaoqian: "全部"
				},
				{
					biaoqian: "角蓝"
				},
				{
					biaoqian: "挂钩套件"
				},
				{
					biaoqian: "挂钩"
				}
			],
			message: '查询成功'
		}
	})
const productlistcontent = Mock.mock(
	'/api/productlistcontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ff3631c.jpg",
					type: 1,
					productlisttitle: "特价",
					productxinghao: "DJL-8802",
					productjiage: "产品价格：350.00",
					productpingpai: "产品品牌：当乐橱柜",
					productkuandu: "产品宽度：900",
					productdengji: "产品能耗：一级",
					id: 1

				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ef32cc1.jpg",

					type: 2,
					productxinghao: "DJL-8712",
					productjiage: "产品价格：350.00",
					productkuandu: "产品宽度：900",
					productdengji: "产品能耗：一级",
					id: 2

				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2da1d432.png",
					productlisttitle: "特价",
					type: 1,
					productxinghao: "DJL-8802",
					productjiage: "450",
					id: 3

				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c02775464.png",
					productlisttitle: "特价",
					type: 1,
					productxinghao: "DJL-4802",
					productjiage: "340",
					id: 4

				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c26b472bf.jpg",
					productlisttitle: "特价",
					type: 1,
					productxinghao: "DJL-8902",
					productjiage: "550",
					id: 5


				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ff3631c.jpg",
					productlisttitle: "特价",
					type: 2,
					productxinghao: "DJL-8702",
					productjiage: "150",
					id: 6

				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c23ecdce1.jpg",
					productlisttitle: "特价",
					productxinghao: "DJL-8102",
					type: 1,
					productjiage: "350",
					id: 7


				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ff3631c.jpg",
					productlisttitle: "特价",
					productxinghao: "DJL-8102",
					productjiage: "310",
					type: 2,
					id: 8


				},
				{
					productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c222d5b71.jpg",
					productlisttitle: "特价",
					productxinghao: "DJL-8402",
					productjiage: "340",
					type: 1,
					id: 9


				},
			],
			message: '查询成功'
		}
	})
	const productlistcontents = Mock.mock(
		'/api/productlistcontents', 'get', (req, res) => {
			return {
				code: 200,
				data: [{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ff3631c.jpg",
						type: 1,
						productlisttitle: "特价",
						productxinghao: "DJL-8802",
						productjiage: "产品价格：350.00",
						productpingpai: "产品品牌：当乐橱柜",
						productkuandu: "产品宽度：900",
						productdengji: "产品能耗：一级",
						id: 1
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ef32cc1.jpg",
	
						type: 2,
						productxinghao: "DJL-8712",
						productjiage: "产品价格：350.00",
						productkuandu: "产品宽度：900",
						productdengji: "产品能耗：一级",
						id: 2
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2da1d432.png",
						productlisttitle: "特价",
						type: 1,
						productxinghao: "DJL-8802",
						productjiage: "450",
						id: 3
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c02775464.png",
						productlisttitle: "特价",
						type: 1,
						productxinghao: "DJL-4802",
						productjiage: "340",
						id: 4
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c26b472bf.jpg",
						productlisttitle: "特价",
						type: 1,
						productxinghao: "DJL-8902",
						productjiage: "550",
						id: 5
	
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ff3631c.jpg",
						productlisttitle: "特价",
						type: 2,
						productxinghao: "DJL-8702",
						productjiage: "150",
						id: 6
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c23ecdce1.jpg",
						productlisttitle: "特价",
						productxinghao: "DJL-8102",
						type: 1,
						productjiage: "350",
						id: 7
	
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c2ff3631c.jpg",
						productlisttitle: "特价",
						productxinghao: "DJL-8102",
						productjiage: "310",
						type: 2,
						id: 8
	
	
					},
					{
						productlistimg: "http://dangle.yunsta.com/uploads/product/5c46c222d5b71.jpg",
						productlisttitle: "特价",
						productxinghao: "DJL-8402",
						productjiage: "340",
						type: 1,
						id: 9
	
	
					},
				],
				message: '查询成功'
			}
		})
// detail详情页面
const allpcbannerdetail = Mock.mock(
	'/api/allpcbannerdetail/', 'post', (req, res) => {
		return {
			code: 200,
			sb: [{
					id: 1,
					pcbannerdetail: [{
							index: 0,
							dataimg: header01
						},
						{
							index: 1,
							dataimg: header02
						},
						{
							index: 2,
							dataimg: header03
						},
						{
							index: 3,
							dataimg: header04
						},
						{
							index: 4,
							dataimg: header05
						}
					]
				},
				{
					id: 2,
					pcbannerdetail: [{
							index: 0,
							dataimg: header02
						},
						{
							index: 1,
							dataimg: header01
						},
						{
							index: 2,
							dataimg: header03
						},
						{
							index: 3,
							dataimg: header04
						},
						{
							index: 4,
							dataimg: header05
						}
					]
				},
				{
					id: 3,
					pcbannerdetail: [{
							index: 0,
							dataimg: header03
						},
						{
							index: 1,
							dataimg: header01
						},
						{
							index: 2,
							dataimg: header03
						},
						{
							index: 3,
							dataimg: header04
						},
						{
							index: 4,
							dataimg: header05
						}
					]
				},
				{
					id: 4,
					pcbannerdetail: [{
							index: 0,
							dataimg: header04
						},
						{
							index: 1,
							dataimg: header01
						},
						{
							index: 2,
							dataimg: header03
						},
						{
							index: 3,
							dataimg: header04
						},
						{
							index: 4,
							dataimg: header05
						}
					]
				},
				{
					id: 5,
					pcbannerdetail: [{
							index: 0,
							dataimg: header05
						},
						{
							index: 1,
							dataimg: header01
						},
						{
							index: 2,
							dataimg: header03
						},
						{
							index: 3,
							dataimg: header04
						},
						{
							index: 4,
							dataimg: header05
						}
					]
				}

			],
			message: '查询成功'
		}
	})

const allmbbannerdetail = Mock.mock(
	'/api/allmbbannerdetail', 'get', (req, res) => {
		return {

			code: 200,
			sbs: [{
					id: 1,
					mbbannerdetail: [{
							mbdataimg: mbheadr02
						},
						{
							mbdataimg: mbheadr03
						},
						{
							mbdataimg: mbheadr04
						},
						{
							mbdataimg: mbheadr05
						}
					],
				},
				{
					id: 2,
					mbbannerdetail: [{
							mbdataimg: mbheadr03
						},
						{
							mbdataimg: mbheadr02
						},
						{
							mbdataimg: mbheadr04
						},
						{
							mbdataimg: mbheadr05
						}
					],
				},
				{
					id: 3,
					mbbannerdetail: [{
							mbdataimg: mbheadr04
						},

						{
							mbdataimg: mbheadr03
						},
						{
							mbdataimg: mbheadr04
						},
						{
							mbdataimg: mbheadr05
						}
					]
				},
				{
					id: 4,
					mbbannerdetail: [{
							mbdataimg: mbheadr05
						},
						{
							mbdataimg: mbheadr03
						},
						{
							mbdataimg: mbheadr04
						},
						{
							mbdataimg: mbheadr05
						}
					],
				},
				{
					id: 5,
					mbbannerdetail: [{
							mbdataimg: mbheadr02
						},
						{
							mbdataimg: mbheadr03
						},
						{
							mbdataimg: mbheadr04
						},
						{
							mbdataimg: mbheadr05
						}
					],
				}
			],
			message: '查询成功'
		}
	})
const detailcontent = Mock.mock(
	'/api/detailcontent', 'get', (req, res) => {
		return {

			code: 200,
			data: [{
				detailjiage: "350",
				detailimg: "http://dangle.yunsta.com/ueditor/upload/image/20190219/1550546672387609.jpg",
				nextprev: [{
					detailprev: "充气娃娃",
					detailprodectname: "避孕套",
					detailnext: "火箭筒",

				}]

			}],
			bannerxh: [{
				weizhi: [{
						id: 1,
						xinghaoname: "角落",
						xinghao: "GD-8152"
					},

				]
			}],
			message: '查询成功'
		}
	})
const weizhi = Mock.mock(
	'/api/weizhi', 'get', (req, res) => {
		return {

			code: 200,
			sbone: [{
					id: 1,
					weizhiname: "角落",
					weizhixinghao: "GD-8152"
				},
				{
					id: 2,
					weizhiname: "锤子",
					weizhixinghao: "GD-8152"
				},
				{
					id: 3,
					weizhiname: "避孕套",
					weizhixinghao: "GD-8852"
				},
				{
					id: 4,
					weizhiname: "手机",
					weizhixinghao: "GD-8452"
				},
				{
					id: 5,
					weizhiname: "桌台",
					weizhixinghao: "GD-8552"
				}
			],
			message: '查询成功'
		}
	})
	
	const bases = Mock.mock(
		'/api/bases', 'get', (req, res) => {
			return {
				code: 200,
				data: [{
						"tabs": "厨电类"
					},
					{
						"tabs": "卫浴类"
					},
					{
						"tabs": "灯具类"
					},
					{
						"tabs": "特价专区"
					}
				],
				message: '查询成功'
			}
		})
const dianqis = Mock.mock(
	'/api/dianqis', 'get', (req, res) => {
		return {

			code: 200,
			data: [{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f1238592e.png",
							dianqiname: "吸油烟机"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f14857f1f.png",
							dianqiname: "燃气灶"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f16142520.png",
							dianqiname: "消毒柜"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f17f9a259.png",
							dianqiname: "燃气热水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f19e9b4fe.png",
							dianqiname: "嵌入式蒸箱"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f1b51d67c.png",
							dianqiname: "嵌入式烤箱"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f2261fb74.png",
							dianqiname: "净水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f23517de4.png",
							dianqiname: "集成灶"

						}
					]
				},
				{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f3604c246.png",
							dianqiname: "五金挂件"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f37cf3c77.png",
							dianqiname: "电热水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f39abd81e.png",
							dianqiname: "浴室柜"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f3ae544fd.png",
							dianqiname: "陶瓷件"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f4b69b62a.png",
							dianqiname: "浴缸"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f4c8df447.png",
							dianqiname: "淋浴房"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f62e6f512.png",
							dianqiname: "五金水龙头"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f62e6f512.png",
							dianqiname: "水槽"

						},

					]
				},
				{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f686c311f.png",
							dianqiname: "吊灯"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f7a9cc42d.png",
							dianqiname: "吊扇灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f7b9b3562.png",
							dianqiname: "光源灯带"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f8d8d88ca.png",
							dianqiname: "过道灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f8ed0cf94.png",
							dianqiname: "开关插座"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f909dc29e.png",
							dianqiname: "客厅灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f92447d9c.png",
							dianqiname: "平板灯"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f9445b18e.png",
							dianqiname: "卧室灯"

						},
					],
				},
				{
					dianqicontent: [{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f1238592e.png",
							dianqiname: "吸油烟机"
						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f14857f1f.png",
							dianqiname: "燃气灶"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f16142520.png",
							dianqiname: "消毒柜"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f17f9a259.png",
							dianqiname: "燃气热水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f19e9b4fe.png",
							dianqiname: "嵌入式蒸箱"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f1b51d67c.png",
							dianqiname: "嵌入式烤箱"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f2261fb74.png",
							dianqiname: "净水器"

						},
						{
							dianqiimg: "http://dangle.yunsta.com/uploads/type/5c32f23517de4.png",
							dianqiname: "集成灶"

						}
					]
				}
			],
			message: '查询成功'
		}
	})

export default {
	pclunbodata,
	mbbannerdata,
	customerspeak,
	sellspeakcontent,
	danglenew,
	scrollfor,
	newmore,
	base,
	bases,
	listbiaoqian,
	productlistcontent,
	productlistcontents,
	allpcbannerdetail,
	allmbbannerdetail,
	detailcontent,
	dianqis,

}
