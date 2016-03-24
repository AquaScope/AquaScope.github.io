var chart_3 = echarts.init(document.getElementById('chart-3-bar'));

options = {
	baseOption: {
		timeline: {
		    axisType: 'category',
		    autoPlay: true,
		    playInterval: 1500,
		    data: [
		        '2005-01-01', '2006-01-01', '2007-01-01',
		        '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', 
		        '2012-01-01', '2013-01-01', '2014-01-01'
		    ],
		    label: {
		        formatter : function(s) {
		            return (new Date(s)).getFullYear();
		        }
		    },
		    top: 'bottom',
		    itemStyle: {
		        normal: {

		        },
		        emphasis: {
		            color: '#3B87C0',
		        }
		    },
		    checkpointStyle: {
		        color: '#3B87C0',
		        borderWidth: 0
		    }
		},
		title: {
		    text: '2005至2014年水资源无法自给的省份',
		    subtext: '数据来自: 中华人民共和国国家统计局',
		    sublink: 'http://data.stats.gov.cn/',
		    left: 'center',
		},
		tooltip : {
		    trigger: 'axis',
		    padding: 20,
		    formatter : function (params) {
				return params[0].data.name + ": <br/>"
					+ params[0].seriesName + ": " + params[0].data.value + "（亿立方米） <br/>"
					+ params[1].seriesName + ": " + params[1].data.value + "（亿立方米） <br/>"
					+ params[2].seriesName + ": " + params[2].data.value + "（亿立方米） <br/>";
	        }
		},
		legend: {
		    data:['水资源总量', '用水量', '水资源盈亏'],
		    left: 'center',
		    top: 60
		},
		toolbox: {
			show: false,
		    feature: {
		        dataView: {
		        	title: '查看原始数据',
		        	lang: ['2005至2014年水资源无法自给的省份', '关闭', '刷新']
		        },
		        saveAsImage: {}
		    }
		},
		grid: {
			top: 100,
		    left: '5%',
		    right: '10%',
		    bottom: 80,
		    containLabel: true
		},
		xAxis : [
		    {
		    	name: '单位（亿立方米）',
		        type : 'value',
		        min: -300,
		        max: 600,
		        splitLine: {
		        	lineStyle: {
		        	    type: 'dashed'
		        	}
		        },
		        splitNumber: 10
		    }
		],
		yAxis : [
		    {	
		        type : 'category',
		 		axisLabel: { interval: 0 },
		        data: ['北京', '天津', '河北', '上海', '江苏', '山东', '河南', '宁夏'],
		        splitLine: {
		        	lineStyle: {
		        	    type: 'dashed'
		        	}
		        }
	   		}
		],
		series: [
			{
				name: '水资源总量',
				type: 'bar',
				label: {
	                normal: {
	                    show: false,
	                    position: 'inside'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#2F4554'
	                }
	            },
			},
			{
				name: '用水量',
				type: 'bar',
				stack: true,
				label: {
	                normal: {
	                    show: false,
	                    position: 'inside'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#61A0A8'
	                }
	            },
			},
			{
				name: '水资源盈亏',
				type: 'bar',
				stack: true,
				label: {
	                normal: {
	                    show: false,
	                    position: 'inside'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#C23531'
	                }
	            },
			}
		]
	},

	options: [
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2005'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2005'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2005'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2006'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2006'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2006'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2007'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2007'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2007'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2008'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2008'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2008'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2009'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2009'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2009'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2010'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2010'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2010'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2011'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2011'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2011'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2012'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2012'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2012'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2013'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2013'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2013'] } 
        	]
        },
        {
            title: {text: '2005至2014年水资源无法自给的省份'},
            series: [
                { data: dataMap.dataLiquidResource_minority['2014'] } ,
                { data: dataMap.dataLiquidConsumeSum_minority['2014'] } ,
                { data: dataMap.dataLiquidRemaining_minority['2014'] } 
        	]
        },
    ]
}

chart_3.setOption(options);