
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

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: [
                '2005-01-01', '2006-01-01', '2007-01-01',
                '2008-01-01', '2009-01-01', '20010-01-01',
                '20011-01-01', '20012-01-01', '2013-01-01',
                '2014-01-01'
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            subtext: '第一个是板块——中国各省水资源与人均水资源概况'
        },
        tooltip: {
            trigger:'item'
        },
        legend: {
            data: ['水资源总量', '人均水资源量'],
            left: 'auto',
            top: 80
        },
        visualMap: [
            {
                min: 0,
                max: 4500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            {
                bottom: 'bottom',
                left: 'auto',
                dimension: 2,
                min: 0,
                max: 8000,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：水资源总量（亿立方米）'],
                textGap: 30,
                textStyle: {
                    color: '#333'
                },
                inRange: {
                    symbolSize: [10, 50]
                },
                outOfRange: {
                    symbolSize: [10, 50],
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#d94e5d']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        geo: {
            map: 'china',
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
            {
            	name: '水资源总量',
            	type: 'map',
                mapType: 'china',
            	label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#d94e5d'
                    }
                }
            },
            {
                name: '人均水资源量',
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
                        color: '#d94e5d'
                    }
            }
        },
        ]
    },
    options: [
        {
            title: {text: '2005年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2005'])},
                {data: convertData(dataMap.dataLiquidPersonal['2005'])}
            ]
        },
        {
            title: {text: '2006年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2006'])},
                {data: convertData(dataMap.dataLiquidPersonal['2006'])}
            ]
        },
        {
            title: {text: '2007年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2007'])},
                {data: convertData(dataMap.dataLiquidPersonal['2007'])}
            ]
        },
        {
            title: {text: '2008年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2008'])},
                {data: convertData(dataMap.dataLiquidPersonal['2008'])}
            ]
        },
        {
            title: {text: '2009年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2009'])},
                {data: convertData(dataMap.dataLiquidPersonal['2009'])}
            ]
        },
        {
            title: {text: '2010年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2010'])},
                {data: convertData(dataMap.dataLiquidPersonal['2010'])}
            ]
        },
        {
            title: {text: '2011年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2011'])},
                {data: convertData(dataMap.dataLiquidPersonal['2011'])}
            ]
        },
        {
            title: {text: '2012年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2012'])},
                {data: convertData(dataMap.dataLiquidPersonal['2012'])}
            ]
        },
        {
            title: {text: '2013年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2013'])},
                {data: convertData(dataMap.dataLiquidPersonal['2013'])}
            ]
        },
        {
            title: {text: '2014年各省水资源总量与人均水资源量情况'},
            series: [
                {data: convertData(dataMap.dataLiquidResource['2014'])},
                {data: convertData(dataMap.dataLiquidPersonal['2014'])}
            ]
        }
    ]
};

chart_1.setOption(option);