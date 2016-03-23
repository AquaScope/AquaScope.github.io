var chart_5 = echarts.init(document.getElementById('chart-5-world-map'));

option= {
	baseOption: {
		timeline: {
		    axisType: 'category',
		    autoPlay: true,
		    playInterval: 2000,
		    data: [
		    	'2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01',
		        '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', 
		        '2012-01-01', '2013-01-01', '2014-01-01'
		    ],
		    label: {
		        formatter : function(s) {
		            return (new Date(s)).getFullYear();
		        }
		    },
		    top: 'bottom'
		},
		title: {
		    text: '2005年至2014年全国分省水资源盈亏情况',
		    subtext: '数据来自: WHO/UNICEF Joint Monitoring Programme (JMP) for Water Supply and Sanitation.',
		    sublink: 'http://www.wssinfo.org/',
		    left: 'center',
		},
		tooltip : {
		    trigger: 'axis',
		    padding: 20
		},
		legend: {
		    data:['水资源总量', '用水量', '水资源盈亏'],
		    left: 'center',
		    top: 60
		},
		toolbox: {
		    feature: {
		        dataView: {
		        	title: '查看原始数据',
		        	lang: ['原始数据：2005年至2014年全国分省水资源盈亏情况', '关闭', '刷新']
		        },
		        saveAsImage: {}
		    }
		},
		grid: {
			top: 100,
		    left: '5%',
		    right: '5%',
		    bottom: 0,
		    containLabel: true
		},
		xAxis : [
		    {
		        type : 'value',
		    }
		],
		yAxis : [
		    {	
		        type : 'category',
		 		axisLabel: { interval: 0 },
		        data: ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆']
		    }
		],
	}
}

option = {
	title: {
	    text: '2005年至2014年全国分省水资源盈亏情况',
	    left: 'center',
	},
	tooltip : {
	    trigger: 'axis',
	    padding: 20
	},
	legend: {
	    data:['水资源总量', '用水量', '水资源盈亏'],
	    left: 'center',
	    top: 60
	},
	toolbox: {
	    feature: {
	        dataView: {
	        	title: '查看原始数据',
	        	lang: ['原始数据：2005年至2014年全国分省水资源盈亏情况', '关闭', '刷新']
	        },
	        saveAsImage: {}
	    }
	},
	grid: {
		top: 100,
	    left: '5%',
	    right: '5%',
	    bottom: 0,
	    containLabel: true
	},
	xAxis : [
	    {
	        type : 'value',
	    }
	],
	yAxis : [
	    {	
	        type : 'category',
	 		axisLabel: { interval: 0 },
	        data: ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆']
	    }
	],
	series: [
		{
			name: '水资源总量',
			type: 'bar',
			label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
			data: dataMap.dataLiquidResource['2014']
		},
		{
			name: '用水量',
			type: 'bar',
			stack: true,
			label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
			data: dataMap.dataLiquidConsumeSum['2014']
		},
		{
			name: '水资源盈亏',
			type: 'bar',
			stack: true,
			label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
			data: dataMap.dataLiquidRemaining['2014']
		},
	]
};

chart_5.setOption(option);