var chart_5 = echarts.init(document.getElementById('chart-5-world-map'));

option = {
    title: {
        text: '改善水源情况',
        subtext: '数据来自: WHO/UNICEF Joint Monitoring Programme (JMP) for Water Supply and Sanitation.',
        sublink: 'http://www.wssinfo.org/',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 1,
        max: 100,
        text:['100%','0'],
        realtime: false,
        calculable: true,
        // color: ['orangered','yellow','lightskyblue']
        inRange: {
        	color: ['#F14937'],
            colorAlpha: [0.2, 1]
        },
        outOfRange: {
            color: ['#F14937']
        },
        controller: {
            inRange: {
                color: ['#F14937']
            },
            outOfRange: {
                color: ['#eee']
            }
        }
    },
    series: [
        {
            name: '改善水源情况',
            type: 'map',
            mapType: 'world',
            // roam: true,
            itemStyle:{
                normal: {
                    areaColor: '#fdfdfd',
                    borderColor: '#ccc'
                },
                emphasis:{
                	label:{
                		show:true
                	},
                    areaColor: '#F16C42'
                }
            },
            data: dataMap.dataLiquidWrold['2005']
        }
    ]
};


chart_5.setOption(option);