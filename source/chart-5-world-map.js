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
            if(params.value != 0) {
            	return params.name + ' : ' + params.value + '%';
            } else {
            	var rst = '暂无数据';
            	return params.name + ' : ' + rst;
            }
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        bottom: 60,
    },
    visualMap: {
    	left: 'right',
    	align: 'left',
        min: 50,
        max: 100,
        text:['100%','0'],
        realtime: false,
        calculable: true,
        itemHeight: 120,
        text: ['明暗程度： 百分比'],
        textGap: 30,
        // color: ['orangered','yellow','lightskyblue']
        inRange: {
        	color: ['#F14937'],
            colorAlpha: [0.2, 1]
        },
        outOfRange: {
            color: ['#fdfdfd']
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
            data: dataMap.dataLiquidWorld_fillEmpty['2005']
        }
    ]
};


chart_5.setOption(option);