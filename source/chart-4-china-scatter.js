var chart_4 = echarts.init(document.getElementById('chart-4-china-scatter'));

option = {
    title : {
        text: '2005年-2014年全国分省废水排放量与化学需氧量排放量分布',
        subtext: '抽样调查来自: Heinz  2003'
    },
    grid: {
        left: '3%',
        right: 100,
        bottom: 60,
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
			if (params.value.length > 1) {
			    return params.seriesName + ' <br/>'
					+ params.name + ' :<br/>'
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
        	'2005年','2006年','2007年','2008年','2009年',
        	'2010年','2011年','2012年','2013年','2014年'
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
                end: 33
            }
        ],
    series : [
        {
            name:'2005年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2005'],
            itemStyle: {
                normal: {
                    color: '#FF6666',
                    opacity: 0.1
                }
            },
        },
        {
            name:'2006年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2006'],
            itemStyle: {
                normal: {
                    color: '#FF6666',
                    opacity: 0.2
                }
            },
        },
        {
            name:'2007年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2007'],
            itemStyle: {
                normal: {
                    color: '#FF6666',
                    opacity: 0.3
                }
            },
        },
        {
            name:'2008年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2008'],
            itemStyle: {
                normal: {
                    color: '#FF6666',
                    opacity: 0.4
                }
            },
        },
        {
            name:'2009年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2009'],
            itemStyle: {
                normal: {
                    color: '#FF6666',
                    opacity: 0.5
                }
            },
        },
        {
            name:'2010年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2010'],
            itemStyle: {
                normal: {
                    color: '#D35559',
                    opacity: 0.6
                }
            },
        },
        {
            name:'2011年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2011'],
            itemStyle: {
                normal: {
                    color: '#D35559',
                    opacity: 0.7
                }
            },
        },
        {
            name:'2012年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2012'],
            itemStyle: {
                normal: {
                    color: '#D35559',
                    opacity: 0.8
                }
            },
        },
        {
            name:'2013年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2013'],
            itemStyle: {
                normal: {
                    color: '#D35559',
                    opacity: 0.9
                }
            },
        },
        {
            name:'2014年',
            type:'scatter',
            data: dataMap.dataCOD_WasteWater['2014'],
            itemStyle: {
                normal: {
                    color: '#BE4D53',
                    opacity: 1
                }
            },
        }
    ]
};


chart_4.setOption(option);