var chart_1 = echarts.init(document.getElementById('chart-1-china-map'));

var categoryData = [
    '北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
    '上海','江苏','浙江','安徽','福建','江西','山东','河南',
    '湖北','湖南','广东','广西','海南','重庆','四川','贵州',
    '云南','西藏','陕西','甘肃','青海','宁夏','新疆'
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option= {
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
                    color: '#52B3FF',
                }
            },
            checkpointStyle: {
                color: '#52B3FF',
                borderWidth: 0
            }
        },
        title: {
            text: '2005年-2014年全国分省水资源总量与人均水资源占有量情况',
            subtext: '数据来自: 中华人民共和国国家统计局',
            sublink: 'http://data.stats.gov.cn/',
            left: 'center',
            textStyle: {
                color: '#333'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter : function (params) {
                if (params.value.length > 1) {
                    return params.name + ' :<br/>'
                        + "水资源总量：" + params.value[2] + '亿立方米 ' + '<br/>'
                        + "人均水资源占有量：" + params.value[3] + '立方米 ';
                }
                else {
                    return false
                }
            },
        },
        textStyle: {
            fontFamily: 'Microsoft Yahei'
        },
        legend: {
            show: false,
            data:['水资源情况'],
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            textStyle: {
                color: '#333'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            // roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#f6f6f6',
                    borderColor: '#ccc'
                },
                emphasis: {
                    areaColor: '#f1f1f1'
                }
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                align: 'left',
                dimension: 2,
                min: 0,
                max: 4000,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：水资源总量（亿立方米）'],
                textGap: 30,
                textStyle: {
                    color: '#1B8BFF'
                },
                inRange: {
                    symbolSize: [10, 100]
                },
                outOfRange: {
                    symbolSize: [10, 100],
                    color: ['rgba(255,255,255,.5)']
                },
                controller: {
                    inRange: {
                        color: ['#1B8BFF']
                    },
                    outOfRange: {
                        color: ['#fff']
                    }
                }
            },
            {
                left: 'right',
                bottom: '5%',
                align: 'left',
                dimension: 3,
                min: 0,
                max: 5000,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['明暗：人均水资源占有量（立方米）'],
                textGap: 30,
                textStyle: {
                    color: '#1B8BFF'
                },
                inRange: {
                    colorAlpha: [0.2, 1],
                },
                outOfRange: {
                    color: ['rgba(255,255,255,.5)']
                },
                controller: {
                    inRange: {
                        color: ['#1B8BFF']
                    },
                    outOfRange: {
                        color: ['#eee']
                    }
                }
            }
        ],
        series: [
            {
                name: '水资源情况',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#1B8BFF'
                    }
                }
            }
        ]
    },
    media: [
        {
            option: {
            }
        },
        {
            query: {maxWidth: 640},
            option: {
                title: {
                    textStyle: {
                        fontSize: 14
                    },
                    subtext: '数据来自: 中华人民共和国国家统计局\n气泡大小为水资源总量(亿立方米)\n气泡明暗为人均水资源占有量(立方米)',
                    sublink: null,
                    left: 'left'
                },
                legend: {
                    top: 45,
                    left: 'left',
                    itemGap: 5
                },
                tooltip: {
                    show: false,
                },
                visualMap: [
                    {
                        show: false,
                    },
                    {
                        show: false
                    }
                ],
                timeline: {
                    right: 0,
                    left: 0,
                    bottom: 0,
                    autoPlay: false,
                    playInterval: 2000
                },
                series: {
                    roam: true
                }
            }
        }
    ],
    options: [
        {
            title: {text: '2005年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2005']) 
            } 
        ]
        },
        {
            title: {text: '2006年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2006']) 
            } 
        ]
        },
        {
            title: {text: '2007年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2007']) 
            } 
        ]
        },
        {
            title: {text: '2008年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2008']) 
            } 
        ]
        },
        {
            title: {text: '2009年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2009']) 
            } 
        ]
        },
        {
            title: {text: '2010年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2010']) 
            } 
        ]
        },
        {
            title: {text: '2011年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2011']) 
            } 
        ]
        },
        {
            title: {text: '2012年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2012']) 
            } 
        ]
        },
        {
            title: {text: '2013年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2013']) 
            } 
        ]
        },
        {
            title: {text: '2014年全国水资源总量与人均水资源占有量情况'},
            series: [ { 
                data: convertData(dataMap.dataLiquidResource_Personal['2014']) 
            } 
        ]
        },
    ]
}


chart_1.setOption(option);