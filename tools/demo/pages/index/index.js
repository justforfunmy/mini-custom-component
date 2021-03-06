const ltUtils = require('../../components/lt-utils/index')
let selectedDate = new Date().toString();
Page({
	data:{
		icon:'/assets/icon.png',
		size:'50rpx',
		menus:[{
			url:'/pages/my/my',
			iconType:'jinggao',
			color:'blue',
			text:'我的',
			functionType:'default'
		},{
			url:'',
			iconType:'jinggao',
			color:'red',
			text:'获取个人信息',
			functionType:'getUserInfo'
		},{
			url:'',
			iconType:'jinggao',
			color:'green',
			text:'获取电话号码',
			functionType:'getPhoneNumber'
		},{
			url:'',
			iconType:'jinggao',
			color:'orange',
			text:'分享',
			functionType:'share'
		},{
			url:'',
			iconType:'jinggao',
			color:'pink',
			text:'设置',
			functionType:'openSetting'
		},{
			url:'',
			iconType:'jinggao',
			color:'purple',
			text:'客服',
			functionType:'contact'
		}],
		calendarDisplayMonthNum: 1,
		calendarDisplayTime: selectedDate,
		calendarSelectedDate: selectedDate,
	},
	handleCustom(res){
		console.log(res.detail)
	},
	handleRequest(){
		const {httpService} = ltUtils;
		const request = new httpService('https://www.baidu.com')
		request.get('/',{a:1}).then(res=>{
			console.log(res)
		})
		request.post('/',{a:1}).then(res=>{
			console.log(res)
		}).finally(res=>{
			console.log('done')
		})
	},
	handleDayTap: function (e) {
		const {date} = e.detail;
		this.setData({
			calendarSelectedDate: date.toString(),
			calendarSelectedDateStr: ltUtils.dateUtil.format(date, 'Y年M月D日')
		});
	},
	preMonth: function () {
		this.setData({
			calendarDisplayTime: ltUtils.dateUtil.preMonth(this.data.calendarDisplayTime).toString()
		});
	},
	nextMonth: function () {
		this.setData({
			calendarDisplayTime: ltUtils.dateUtil.nextMonth(this.data.calendarDisplayTime).toString()
		});
	},
})
