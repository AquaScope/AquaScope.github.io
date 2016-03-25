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
	        text: '改善水源情况',
	        subtext: '数据来自: WHO/UNICEF Joint Monitoring Programme (JMP) for Water Supply and Sanitation.',
	        sublink: 'http://www.wssinfo.org/',
	        left: 'center',
	        top: 'top',
	        backgroundColor: '#fff'
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
	    visualMap: {
	    	left: 'right',
	    	align: 'left',
	        min: 50,
	        max: 100,
	        text:['100%','50%'],
	        realtime: false,
	        calculable: true,
	        itemHeight: 120,
	        text: ['明暗程度： 百分比'],
	        textGap: 30,
	        inRange: {
	        	color: ['#fdfdfd', '#7E97FF','#4E5E9E'],
	        },
	        outOfRange: {
	            color: ['#fdfdfd']
	        },
	        controller: {
	            inRange: {
	                color: ['#7E97FF', '#4E5E9E']
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
	                    areaColor: '#677CD1'
	                }
	            }
	        }
	    ]
	},
	options: [
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2005'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2006'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2007'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2008'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2009'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2010'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2011'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2012'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2013'] } 
        	]
        },
        {
            title: {text: '改善水源情况'},
            series: [
                { data: dataMap.dataLiquidWorld_fillEmpty['2014'] } 
        	]
        },
    ]
}

chart_5.setOption(options);