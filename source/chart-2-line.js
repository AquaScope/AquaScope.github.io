var chart_2 = echarts.init(document.getElementById('chart-2-line'));
option = {
	title: {
	    text: '2005年至2014年全国分省用水情况',
	    subtext: '数据来自: 中华人民共和国国家统计局',
	    sublink: 'http://data.stats.gov.cn/',
	    left: 'center',
	},
	tooltip : {
	    trigger: 'axis',
	    padding: 20,
	},
	legend: {
	    data:['工业用水', '农业用水', '生活用水', '生态用水', '全国水资源总量', '全国地表水资源总量'],
	    left: 'center',
	    top: 60
	},
	toolbox: {
	    feature: {
	        dataView: {
	        	title: '查看原始数据',
	        	lang: ['原始数据：2005年至2014年全国分省用水情况', '关闭', '刷新']
	        },
	        magicType: {
	                type: ['stack', 'tiled']
	            },
	        saveAsImage: {}
	    }
	},
	grid: {
		top: 100,
	    left: '3%',
	    right: '3%',
	    bottom: 0,
	    containLabel: true
	},
	xAxis : [
	    {
	        type : 'category',
	        boundaryGap : false,
	 		axisLabel: { interval: 0 },
	        data : ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],
	        splitLine: {
	        	lineStyle: {
	        	    type: 'dashed'
	        	}
	        }
	    }
	],
	yAxis : [
	    {	
	    	name: '用水量（亿立方米）',
	        type : 'value',
	        max: 10000,
	        splitLine: {
	        	lineStyle: {
	        	    type: 'dashed'
	        	}
	        }
	    },
	    {	
	    	name: '水资源总量（亿立方米）',
	        type : 'value',
	        splitLine: {
	        	show: false
	        }
	    },

	],
	series: [
		{
			name: '工业用水', type: 'line', stack: true, areaStyle: {normal: {}},
			data: [
				dataMap.dataLiquidIndustry['2005sum'],
				dataMap.dataLiquidIndustry['2006sum'],
				dataMap.dataLiquidIndustry['2007sum'],
				dataMap.dataLiquidIndustry['2008sum'],
				dataMap.dataLiquidIndustry['2009sum'],
				dataMap.dataLiquidIndustry['2010sum'],
				dataMap.dataLiquidIndustry['2011sum'],
				dataMap.dataLiquidIndustry['2012sum'],
				dataMap.dataLiquidIndustry['2013sum'],
				dataMap.dataLiquidIndustry['2014sum']
			]
		},
		{
			name: '农业用水', type: 'line', stack: true, areaStyle: {normal: {}},
			data: [
				dataMap.dataLiquidAgriculture['2005sum'],
				dataMap.dataLiquidAgriculture['2006sum'],
				dataMap.dataLiquidAgriculture['2007sum'],
				dataMap.dataLiquidAgriculture['2008sum'],
				dataMap.dataLiquidAgriculture['2009sum'],
				dataMap.dataLiquidAgriculture['2010sum'],
				dataMap.dataLiquidAgriculture['2011sum'],
				dataMap.dataLiquidAgriculture['2012sum'],
				dataMap.dataLiquidAgriculture['2013sum'],
				dataMap.dataLiquidAgriculture['2014sum']
			]
		},
		{
			name: '生活用水', type: 'line', stack: true, areaStyle: {normal: {}},
			data: [
				dataMap.dataLiquidLiving['2005sum'],
				dataMap.dataLiquidLiving['2006sum'],
				dataMap.dataLiquidLiving['2007sum'],
				dataMap.dataLiquidLiving['2008sum'],
				dataMap.dataLiquidLiving['2009sum'],
				dataMap.dataLiquidLiving['2010sum'],
				dataMap.dataLiquidLiving['2011sum'],
				dataMap.dataLiquidLiving['2012sum'],
				dataMap.dataLiquidLiving['2013sum'],
				dataMap.dataLiquidLiving['2014sum']
			]
		},
		{
			name: '生态用水', type: 'line', stack: true, areaStyle: {normal: {}},
			data: [
				dataMap.dataLiquidEcology['2005sum'],
				dataMap.dataLiquidEcology['2006sum'],
				dataMap.dataLiquidEcology['2007sum'],
				dataMap.dataLiquidEcology['2008sum'],
				dataMap.dataLiquidEcology['2009sum'],
				dataMap.dataLiquidEcology['2010sum'],
				dataMap.dataLiquidEcology['2011sum'],
				dataMap.dataLiquidEcology['2012sum'],
				dataMap.dataLiquidEcology['2013sum'],
				dataMap.dataLiquidEcology['2014sum']
			]
		},
		{
			name: '全国水资源总量', type: 'line',
			yAxisIndex: 1,
			data: [
				dataMap.dataLiquidResource['2005sum'],
				dataMap.dataLiquidResource['2006sum'],
				dataMap.dataLiquidResource['2007sum'],
				dataMap.dataLiquidResource['2008sum'],
				dataMap.dataLiquidResource['2009sum'],
				dataMap.dataLiquidResource['2010sum'],
				dataMap.dataLiquidResource['2011sum'],
				dataMap.dataLiquidResource['2012sum'],
				dataMap.dataLiquidResource['2013sum'],
				dataMap.dataLiquidResource['2014sum']
			]
		},
		{
			name: '全国地表水资源总量', type: 'line',
			yAxisIndex: 1,
			data: [
				dataMap.dataSurfaceLiquid['2005sum'],
				dataMap.dataSurfaceLiquid['2006sum'],
				dataMap.dataSurfaceLiquid['2007sum'],
				dataMap.dataSurfaceLiquid['2008sum'],
				dataMap.dataSurfaceLiquid['2009sum'],
				dataMap.dataSurfaceLiquid['2010sum'],
				dataMap.dataSurfaceLiquid['2011sum'],
				dataMap.dataSurfaceLiquid['2012sum'],
				dataMap.dataSurfaceLiquid['2013sum'],
				dataMap.dataSurfaceLiquid['2014sum']
			]
		}
	]
};

chart_2.setOption(option);

// 时间轴
// var chart_2 = echarts.init(document.getElementById('chart-2-line'));
// option = {
// 	baseOption: {
// 		timeline: {
// 		    axisType: 'category',
// 		    autoPlay: true,
// 		    playInterval: 2000,
// 		    data: [
// 		    	'2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01',
// 		        '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', 
// 		        '2012-01-01', '2013-01-01', '2014-01-01'
// 		    ],
// 		    label: {
// 		        formatter : function(s) {
// 		            return (new Date(s)).getFullYear();
// 		        }
// 		    },
// 		    top: 'bottom'
// 		},
// 		title: {
// 		    subtext: '全国生活、工业、农业、生态用水趋势及全国水资源总量、人均水资源变化趋势',
// 		    left: 'center',
// 		},
// 		tooltip : {
// 		    trigger: 'axis',
// 		    padding: 20
// 		},
// 		legend: {
// 		    data:['农业用水', '工业用水', '生活用水', '生态用水'],
// 		    left: 'center',
// 		    top: 60
// 		},
// 		toolbox: {
// 		    feature: {
// 		        magicType: {
// 		                type: ['stack', 'tiled']
// 		            },
// 		        saveAsImage: {}

// 		    }
// 		},
// 		grid: {
// 			top: 100,
// 		    left: '3%',
// 		    right: '3%',
// 		    bottom: 100,
// 		    containLabel: true
// 		},
// 		xAxis : [
// 		    {
// 		        type : 'category',
// 		        boundaryGap : false,
// 		 		axisLabel: { interval: 0 },
// 		        data : ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆']
// 		    }
// 		],
// 		yAxis : [
// 		    {	
// 		    	name: '用水量（亿立方米）',
// 		        type : 'value'
// 		    }
// 		],
// 		series: [
// 			{name: '生态用水', type: 'line', stack: true, areaStyle: {normal: {}}},
// 			{name: '生活用水', type: 'line', stack: true, areaStyle: {normal: {}}},
// 			{name: '工业用水', type: 'line', stack: true, areaStyle: {normal: {}}},
// 			{name: '农业用水', type: 'line', stack: true, areaStyle: {normal: {}}}
// 		]
// 	},
// 	options: [
// 		{
// 			title: {text: '2005年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2005'] },
// 				{ data:dataMap.dataLiquidLiving['2005'] },
// 				{ data:dataMap.dataLiquidIndustry['2005'] },
// 				{ data:dataMap.dataLiquidAgriculture['2005'] }
// 			]
// 		},
// 		{
// 			title: {text: '2006年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2006'] },
// 				{ data:dataMap.dataLiquidLiving['2006'] },
// 				{ data:dataMap.dataLiquidIndustry['2006'] },
// 				{ data:dataMap.dataLiquidAgriculture['2006'] }
// 			]
// 		},
// 		{
// 			title: {text: '2007年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2007'] },
// 				{ data:dataMap.dataLiquidLiving['2007'] },
// 				{ data:dataMap.dataLiquidIndustry['2007'] },
// 				{ data:dataMap.dataLiquidAgriculture['2007'] }
// 			]
// 		},
// 		{
// 			title: {text: '2008年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2008'] },
// 				{ data:dataMap.dataLiquidLiving['2008'] },
// 				{ data:dataMap.dataLiquidIndustry['2008'] },
// 				{ data:dataMap.dataLiquidAgriculture['2008'] }
// 			]
// 		},
// 		{
// 			title: {text: '2009年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2009'] },
// 				{ data:dataMap.dataLiquidLiving['2009'] },
// 				{ data:dataMap.dataLiquidIndustry['2009'] },
// 				{ data:dataMap.dataLiquidAgriculture['2009'] }
// 			]
// 		},
// 		{
// 			title: {text: '2010年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2010'] },
// 				{ data:dataMap.dataLiquidLiving['2010'] },
// 				{ data:dataMap.dataLiquidIndustry['2010'] },
// 				{ data:dataMap.dataLiquidAgriculture['2010'] }
// 			]
// 		},
// 		{
// 			title: {text: '2011年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2011'] },
// 				{ data:dataMap.dataLiquidLiving['2011'] },
// 				{ data:dataMap.dataLiquidIndustry['2011'] },
// 				{ data:dataMap.dataLiquidAgriculture['2011'] }
// 			]
// 		},
// 		{
// 			title: {text: '2012年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2012'] },
// 				{ data:dataMap.dataLiquidLiving['2012'] },
// 				{ data:dataMap.dataLiquidIndustry['2012'] },
// 				{ data:dataMap.dataLiquidAgriculture['2012'] }
// 			]
// 		},
// 		{
// 			title: {text: '2013年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2013'] },
// 				{ data:dataMap.dataLiquidLiving['2013'] },
// 				{ data:dataMap.dataLiquidIndustry['2013'] },
// 				{ data:dataMap.dataLiquidAgriculture['2013'] }
// 			]
// 		},
// 		{
// 			title: {text: '2014年我国分省用水情况'},
// 			series: [
// 				{ data:dataMap.dataLiquidEcology['2014'] },
// 				{ data:dataMap.dataLiquidLiving['2014'] },
// 				{ data:dataMap.dataLiquidIndustry['2014'] },
// 				{ data:dataMap.dataLiquidAgriculture['2014'] }
// 			]
// 		}
// 	]
// };

// chart_2.setOption(option);