var chart_4 = echarts.init(document.getElementById('chart-4-china-scatter'));

option = {
    baseOption: {
            title : {
                text: '2005年-2014年全国分地区废水排放量与化学需氧量排放量分布',
                subtext: '数据来自: 中华人民共和国国家统计局\n\n为计算方便，内蒙古自治区被归为东北地区',
                sublink: 'http://data.stats.gov.cn/',
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
            toolbox: {
                show: false,
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
    },
    media: [
        {
            option: {
                grid: {
                    top: 100,
                    left: '5%',
                    right: '10%',
                    bottom: 80,
                    containLabel: true
                },
            }
        },
        {
            query: {maxWidth: 640},
            option: {
                title: {
                    text: '2005年-2014年全国分地区废水排放量\n与化学需氧量排放量分布',
                    subtext: '数据来自: 中华人民共和国国家统计局\n单位：万吨\n明暗程度为年份变化',
                    textStyle: {
                        fontSize: 14
                    },
                    sublink: null,
                    left: 'left'
                },
                tooltip: {
                    show: false,
                    axisPointer:{
                        show: false
                    }
                },
                legend: {
                    orient: 'horizontal',
                    top: 80,
                    left: 'left',
                    itemGap: 5
                },
                grid: {
                    top: 140,
                    left: 0,
                    right: 10,
                    bottom: 0
                },
                visualMap: [
                    {
                        show: false
                    }
                ],
                xAxis: {
                    nameLocation: 'middle',
                    splitLine: {
                        // show: false
                        splitNumber: 5
                    },
                },
                yAxis: {
                    splitLine: {
                        // show: false
                        splitNumber: 4
                    },
                },
                dataZoom: {
                    show: false
                }
            }
        }
    ]
};


chart_4.setOption(option);