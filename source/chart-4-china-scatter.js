var chart_4 = echarts.init(document.getElementById('chart-4-china-scatter'));

option = {
    title : {
        text: '2005年-2014年全国分地区废水排放量与化学需氧量排放量分布',
        subtext: '抽样调查来自: Heinz  2003'
    },
    grid: {
        left: '3%',
        right: 120,
        bottom: 60,
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
			if (params.value.length > 1) {
			    return params.seriesName + ' <br/>'
					+ params.name + '年 :<br/>'
					+ "化学需氧量排放量：" + params.value[0] + '万吨 ' + '<br/>'
					+ "废水排放量：" + params.value[1] + '万吨 ';
			}
			else {
			    return params.seriesName + ' :<br/>'
					+ params.name + ' : '
					+ params.value + '万吨 ';
			}
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend: {
        data: [
        	'东部地区', '中部地区', '西部地区', '东北地区'
        ],
        left: 'right',
        orient: 'vertical'
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} 万吨'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} 万吨'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
        }
    ],
    visualMap: [
    	{
    		left: 'right',
            bottom: '5%',
            align: 'left',
            dimension: 2,
            min: 2005,
            max: 2014,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：年份变化'],
            textGap: 30,
            textStyle: {
                color: '#333'
            },
            inRange: {
                colorAlpha: [0.1, 1]
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#52B3FF']
                },
                outOfRange: {
                    color: ['#f6f6f6']
                }
            }
    	}
    ],
    series : [
        {
            name:'西部地区',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater_area_year['西部地区'],
            itemStyle: {
                normal: {
                    color: '#03D600',
                }
            },
        },
        {
            name:'东部地区',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater_area_year['东部地区'],
            itemStyle: {
                normal: {
                    color: '#D94720',
                }
            },
        },
        {
            name:'中部地区',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater_area_year['中部地区'],
            itemStyle: {
                normal: {
                    color: '#398BFF',
                }
            },
        },
        {
            name:'东北地区',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater_area_year['东北地区'],
            itemStyle: {
                normal: {
                    color: '#E19508',
                }
            },
        }
    ]
};


chart_4.setOption(option);