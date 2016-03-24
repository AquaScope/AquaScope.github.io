var chart_3 = echarts.init(document.getElementById('chart-3-bar'));
option = {
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
        },
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
	        	lang: ['2005至2014年水资源无法自给的省份', '关闭', '刷新']
	        },
	        saveAsImage: {}
	    }
	},
	grid: {
		top: 100,
	    left: '5%',
	    right: '10%',
	    bottom: 0,
	    containLabel: true
	},
	xAxis : [
	    {
	    	name: '单位（亿立方米）',
	        type : 'value',
	        max: 700,
	        splitLine: {
	        	lineStyle: {
	        	    type: 'dashed'
	        	}
	        }
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
                    show: true,
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    color: '#2F4554'
                }
            },
			data: dataMap.dataLiquidResource_minority['2014']
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
            itemStyle: {
                normal: {
                    color: '#61A0A8'
                }
            },
			data: dataMap.dataLiquidConsumeSum_minority['2014']
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
            itemStyle: {
                normal: {
                    color: '#C23531'
                }
            },
			data: dataMap.dataLiquidRemaining_minority['2014']
		},
	]
};

chart_3.setOption(option);