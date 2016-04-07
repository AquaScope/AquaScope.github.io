var chart_5 = echarts.init(document.getElementById('chart-5-world-map'));

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
	        text: '太平洋地区获得改善水源的人口比例',
	        subtext: '数据来自: WHO/UNICEF Joint Monitoring Programme (JMP) for Water Supply and Sanitation.',
	        sublink: 'http://www.wssinfo.org/',
	        left: 'center',
	        top: 'top',
	        backgroundColor: '#fff'
	    },
	    textStyle: {
	    	fontFamily: "Microsoft Yahei"
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function (params) {
	            if(params.data) {
	            	return params.name + ' : ' + params.value + '%';
	            } else {
	            	var rst = '暂无数据';
	            	return rst;
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
	    visualMap: {
	    	left: 'right',
	    	align: 'left',
	        min: 30,
	        max: 100,
	        text:['100%','30%%'],
	        realtime: false,
	        calculable: true,
	        itemHeight: 120,
	        text: ['明暗程度： 百分比'],
	        textGap: 30,
	        inRange: {
	        	color: ['rgba(68,172,224,0.1)','rgba(42,135,198,1)'],
	        },
	        outOfRange: {
	            color: ['#fdfdfd']
	        },
	        controller: {
	            inRange: {
	                color: ['rgba(68,172,224,0.1)', 'rgba(42,135,198,1)']
	            },
	            outOfRange: {
	                color: ['#eee']
	            }
	        }
	    },
	    series: [
	        {
	            name: '太平洋地区获得改善水源的人口比例',
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
	                    areaColor: '#677CD1'
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
                    subtext: '数据来自: 中华人民共和国国家统计局\n数值为百分比',
                    sublink: null,
                    left: 'left'
                },
                tooltip: {
                    show: false,
                },
                visualMap: [
                    {
                        show: false,
                    }
                ],
                timeline: {
                    right: 0,
                    left: 0,
                    bottom: 0,
                    autoPlay: false,
                    playInterval: 2000
                }
            }
        }
	],
	options: [
        {
            title: {text: '2005年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2005'] } 
        	]
        },
        {
            title: {text: '2006年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2006'] } 
        	]
        },
        {
            title: {text: '2007年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2007'] } 
        	]
        },
        {
            title: {text: '2008年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2008'] } 
        	]
        },
        {
            title: {text: '2009年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2009'] } 
        	]
        },
        {
            title: {text: '2010年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2010'] } 
        	]
        },
        {
            title: {text: '2011年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2011'] } 
        	]
        },
        {
            title: {text: '2012年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2012'] } 
        	]
        },
        {
            title: {text: '2013年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2013'] } 
        	]
        },
        {
            title: {text: '2014年太平洋地区获得改善水源的人口比例'},
            series: [
                { data: dataMap.dataLiquidWrold['2014'] } 
        	]
        },
    ]
}

chart_5.setOption(options);