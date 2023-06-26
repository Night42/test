$(function () {

    /*ceshis();*/
    ceshis1();
    ceshis2();
    ceshis3();
    ceshis4();
    ceshis5();




    function ceshis1() {
        var myChart = echarts.init(document.getElementById('chart2'));
        $.ajax({
            url:"http://127.0.0.1:5000/bigdata/chart2",
            success:function(data){
                var ydata = data.ydata;
                console.log(ydata);
                var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301", "#57e7ec", "#cf9ef1"]
                var xdata = data.xdata;
                console.log(xdata);
                option19 = {
            /*backgroundColor: "rgba(255,255,255,1)",*/
            color: color,
            legend: {
                orient: "vartical",
                x: "left",
                top: "center",
                left: "53%",
                bottom: "0%",
                data: xdata,
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#fff'
                },
                /*itemGap: 16,*/
                /*formatter:function(name){
                  var oa = option.series[0].data;
                  var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
                  for(var i = 0; i < option.series[0].data.length; i++){
                      if(name==oa[i].name){
                          return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
                      }
                  }
                }*/

                formatter: function(name) {
                    return '' + name
                }
            },
            series: [{
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 2, //最小的扇区角度（0 ~ 360）
                radius: ["20%", "60%"],
                center: ["30%", "45%"],
                avoidLabelOverlap: false,
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 1,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{c} ({d}%)',
                        rich: {
                            text: {
                                color: "#fff",
                                fontSize: 14,
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 8
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 24,
                        }
                    }
                },
                data: ydata
            }]
        };
                myChart.setOption(option19);

            },
            error:function(xhr, type, errorThrown){
            }
        });

        setTimeout(function() {
            myChart.on('mouseover', function(params) {
                if (params.name == ydata[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function(params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        }, 1000);

        myChart.currentIndex = -1;

        setInterval(function () {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);

        // 使用刚指定的配置项和数据显示图表。
        /*myChart.setOption(option);*/
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


   function getStatus(){
  	 var jsonstr = [];
		var dataList
		 $.ajax({
   		 type:"post",
	        url:"admin/statusList?rstatus=0",
	        dataType:"json",
	       async: false, //设置为同步请求
			  success: function(d){
	        	 dataList=d.data
	        	//console.log(dataList)
	        	for (var i = 0; i < dataList.length; i++) {

                     var json = {};
				      json = dataList[i];
				     jsonstr.push(json);
			}
	        	console.log(jsonstr)

		}
	})
	return jsonstr;
   }


    // function get_chart3(){
    //     let chart_data;
    //     $.ajax({
    //         url:"http://127.0.0.1:5000/bigdata/chart3",
    //         success:function(data){
    //             ceshis2(data);
    //             chart_data=data;
    //             console.log(chart_data);
    //         },
    //         error:function(xhr, type, errorThrown){
    //         }
    //     });
    // }
    function ceshis2() {
        var myChart = echarts.init(document.getElementById('chart3'));
        $.ajax({
            url:"http://127.0.0.1:5000/bigdata/chart3",
            success:function(data){
               var option12 = {
            /*backgroundColor: '#000',*/
            "animation": true,
            "title": {
                /*"text": 24,*/
               /* "subtext": "沥青工",*/
                "x": "center",
                "y": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 10,
                    "fontWeight": "normal",
                    "align": "center",
                    "width": "200px"
                },
                "subtextStyle": {
                    "color": "#fff",
                    "fontSize": 12,
                    "fontWeight": "normal",
                    "align": "center"
                }
            },
            "legend": {
                "width": "100%",
                "left": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 12
                },
                "icon": "circle",
                "right": "0",
                "bottom": "0",
                "padding": [15, 20],
                "itemGap": 5,
                "data": ["手机", "服装", "电脑", "化妆品", "书籍", "厨具", "奢侈品", "其它"]
            },
            "series": [{
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["20%", "43%"],
                "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
                "startAngle": 135,
                "labelLine": {
                    "normal": {
                        "length": 15
                    }
                },
                "label": {
                    "normal": {
                        "formatter": "{b|{b}:}  {per|{d}%} ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 12,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#b3e5ff",
                                "fontSize": 16,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 8],
                                "borderRadius": 2
                            }
                        },
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 16
                        }
                    }
                },
                "emphasis": {
                    "label": {
                        "show": true,
                        "formatter": "{b|{b}:}  {per|{d}%}  ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 22,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#fff",
                                "fontSize": 14,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 6],
                                "borderRadius": 2
                            }
                        }
                    }
                },
                "data": data
            }, {
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["15%", "14%"],
                "label": {
                    "show": false
                },
                "data": [{
                    "value": 78,
                    "name": "实例1",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 1,
                                "y2": 0,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "#9F17FF"
                                }, {
                                    "offset": 0.2,
                                    "color": "#01A4F7"
                                }, {
                                    "offset": 0.5,
                                    "color": "#FE2C8A"
                                }, {
                                    "offset": 0.8,
                                    "color": "#FEE449"
                                }, {
                                    "offset": 1,
                                    "color": "#00FFA8"
                                }]
                            }
                        }
                    }
                }]
            }]
        };
               myChart.setOption(option12);
                console.log(data);
            },
            error:function(xhr, type, errorThrown){
            }
        });

        // 使用刚指定的配置项和数据显示图表。
        myChart.currentIndex = -1;
        //myChart.setOption(option);
        //console.log(option.series[0].data[0]);
        setInterval(function () {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);

        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis3() {
        var myChart = echarts.init(document.getElementById('chart4'));
        $.ajax({
            url:"http://127.0.0.1:5000/bigdata/chart4",
            success:function(data){
            var colors = ['rgb(46, 199, 201)', 'rgb(90, 177, 239)', 'rgb(255, 185, 128)'];
            var data1 = data.monthvalue;
            var data2 = data.ordervalue;
            var data3 = data.pays;
            var data4 = data.avgs;
        option4 = {
            color: colors,

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                formatter: function(params) {
                    // 系列
                    let html = params[0].name + "<br>";

                    for (var i = 0; i < params.length; i++) {

                        // 获取每个系列对应的颜色值
                        html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';

                        // 通过判断指定系列增加 % 符号
                        if (option.series[params[i].seriesIndex].type == "line") {
                            html += params[i].seriesName + ": " + params[i].value + "%<br>";
                        } else {
                            html += params[i].seriesName + ": " + params[i].value + "<br>";
                        }
                    }
                    return html;
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                textStyle: {
                    color: '#fff'
                },
                data: ['下单量', '付款量', '平均值']
            },
            // 缩放组件
            /*dataZoom: {
                type: 'slider'
            },*/
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    formatter: '{value} 万',
                    textStyle: {
                        color: "#ffffff" //X轴文字颜色
                    }
                },
                data: data1,
            }],
            yAxis: [{
                type: 'value',
                name: '下单量',
                min: 0,
                max: 250,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} 万'
                }
            },
                {
                    type: 'value',
                    name: '付款量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    offset: 80,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} 万'
                    }
                },
                {
                    type: 'value',
                    name: '平均值',
                    min: 0,
                    max: 25,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} 万'
                    }
                }
            ],
            series: [{
                name: '下单量',
                type: 'bar',
                data: data2,
                itemStyle: {
                    normal: {
                        barBorderRadius: 2
                    }
                }
            },
                {
                    barGap: '-50%', // 增加偏移量使重叠显示
                    name: '付款量',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: data3,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 2
                        }
                    }
                },
                {
                    name: '平均值',
                    type: 'line',
                    yAxisIndex: 2,
                    data: data4,
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option4);
            },
            error:function(xhr, type, errorThrown){
            }
        });
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis4() {
        var myChart = echarts.init(document.getElementById('chart5'));
                $.ajax({
            url:"http://127.0.0.1:5000/bigdata/chart5",
            success:function(data){
                var labelimg = "";
                option = {
                    /*backgroundColor: "#0E233E",*/
                    "grid": {
                        "left": "6%",
                        "top": "10%",
                        "right": "3%",
                        "bottom": "15%"
                    },
                    "legend": {
                        "data": [
                            "日本",
                            "韩国",
                            "美国",
                            "澳大利亚",
                            "俄罗斯",
                            "法国",
                            "英国"
                        ],
                        "top": "92%",
                        "icon": "circle",
                        "textStyle": {
                            "color": "#0DCAD2"
                        }
                    },
                    "color": [
                        "#534EE1",
                        "#ECD64F",
                        "#00E4F0",
                        "#44D16D",
                        "#124E91",
                        "#BDC414",
                        "#C8CCA5"
                    ],
                    "tooltip": {
                        "position": "top",
                    },
                    "xAxis": {
                        "type": "category",
                        "data": data.CountryName,
                        "axisLabel": {
                            "show": false,
                            "color": "#999999",
                            "fontSize": 16
                        },
                        "axisTick": {
                            "show": false
                        },
                        "axisLine": {
                            "show": false
                        },
                        "splitLine": {
                            "show": false
                        }
                    },
                    "yAxis": {
                        "type": "value",
                        "axisLabel": {
                            "show": false,
                            "color": "#999999",
                            "fontSize": 16
                        },
                        "axisTick": {
                            "show": false
                        },
                        "axisLine": {
                            "show": false
                        },
                        "splitLine": {
                            "show": false
                        }
                    },
                    "series": [{
                        "name": "日本",
                        "data": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "stack": "a",
                        "type": "bar"
                    },
                        {
                            "name": "韩国",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "stack": "a",
                            "type": "bar"
                        },
                        {
                            "name": "美国",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "stack": "a",
                            "type": "bar"
                        },
                        {
                            "name": "澳大利亚",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "stack": "a",
                            "type": "bar"
                        },
                        {
                            "name": "俄罗斯",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "stack": "a",
                            "type": "bar"
                        },
                        {
                            "name": "法国",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "stack": "a",
                            "type": "bar"
                        },
                        {
                            "name": "英国",
                            "data": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "stack": "a",
                            "type": "bar"
                        },
                        {
                            "type": "pictorialBar",
                            "name": "提示框值",
                            "data": [{
                                "name": "",
                                "value": data.CountryValue[0],
                                "label": {
                                    "show": true,
                                    "position": "top",
                                    formatter: function(params) {
                                        var index = params.dataIndex;
                                        var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                        return str;
                                    },
                                    "rich": {
                                        "a": {
                                            "fontSize": 18,
                                            "color": "#534EE1",
                                            "align": "center",
                                            "height": 40
                                        },
                                        "c": {
                                            "fontSize": 18,
                                            "color": "#fff",
                                            "padding": [
                                                -2,
                                                0,
                                                2,
                                                0
                                            ],
                                            "backgroundColor": {
                                                "image": labelimg
                                            },
                                            "align": "center",
                                            "verticalAlign": "bottom",
                                            "height": 50,
                                            "lineHeight": 40,
                                            "width": 100
                                        }
                                    }
                                },
                                "itemStyle": {
                                    "normal": {
                                        "color": {
                                            "type": "linear",
                                            "x": 0,
                                            "y": 0,
                                            "x2": 0,
                                            "y2": 1,
                                            "colorStops": [{
                                                "offset": 0,
                                                "color": "rgba(83,78,225,1)"
                                            },
                                                {
                                                    "offset": 1,
                                                    "color": "rgba(83,78,225,0)"
                                                }
                                            ],
                                            "global": false
                                        }
                                    }
                                }
                            },
                                {
                                    "name": "",
                                    "value": data.CountryValue[1],
                                    "label": {
                                        "show": true,
                                        "position": "top",
                                        formatter: function(params) {
                                            var index = params.dataIndex;
                                            var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                            return str;
                                        },
                                        "rich": {
                                            "a": {
                                                "fontSize": 18,
                                                "color": "#ECD64F",
                                                "align": "center",
                                                "height": 40
                                            },
                                            "c": {
                                                "fontSize": 18,
                                                "color": "#fff",
                                                "padding": [
                                                    -4,
                                                    0,
                                                    8,
                                                    0
                                                ],
                                                "backgroundColor": {
                                                    "image": labelimg
                                                },
                                                "align": "center",
                                                "verticalAlign": "bottom",
                                                "height": 45,
                                                "lineHeight": 40,
                                                "width": 100
                                            }
                                        }
                                    },
                                    "itemStyle": {
                                        "normal": {
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(236,214,79,1)"
                                                },
                                                    {
                                                        "offset": 1,
                                                        "color": "rgba(236,214,79,0)"
                                                    }
                                                ],
                                                "global": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": "",
                                    "value": data.CountryValue[2],
                                    "label": {
                                        "show": true,
                                        "position": "top",
                                        formatter: function(params) {
                                            var index = params.dataIndex;
                                            var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                            return str;
                                        },
                                        "rich": {
                                            "a": {
                                                "fontSize": 18,
                                                "color": "#00E4F0",
                                                "align": "center",
                                                "height": 40
                                            },
                                            "c": {
                                                "fontSize": 18,
                                                "color": "#fff",
                                                "padding": [
                                                    -4,
                                                    0,
                                                    8,
                                                    0
                                                ],
                                                "backgroundColor": {
                                                    "image": labelimg
                                                },
                                                "align": "center",
                                                "verticalAlign": "bottom",
                                                "height": 45,
                                                "lineHeight": 40,
                                                "width": 100
                                            }
                                        }
                                    },
                                    "itemStyle": {
                                        "normal": {
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(0,228,240,1)"
                                                },
                                                    {
                                                        "offset": 1,
                                                        "color": "rgba(0,228,240,0)"
                                                    }
                                                ],
                                                "global": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": "",
                                    "value": data.CountryValue[3],
                                    "label": {
                                        "show": true,
                                        formatter: function(params) {
                                            var index = params.dataIndex;
                                            var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                            return str;
                                        },
                                        "position": "top",
                                        "rich": {
                                            "a": {
                                                "fontSize": 18,
                                                "color": "#44D16D",
                                                "align": "center",
                                                "height": 40
                                            },
                                            "c": {
                                                "fontSize": 18,
                                                "color": "#fff",
                                                "padding": [
                                                    -4,
                                                    0,
                                                    8,
                                                    0
                                                ],
                                                "backgroundColor": {
                                                    "image": labelimg
                                                },
                                                "align": "center",
                                                "verticalAlign": "bottom",
                                                "height": 45,
                                                "lineHeight": 40,
                                                "width": 100
                                            }
                                        }
                                    },
                                    "itemStyle": {
                                        "normal": {
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(68,209,109,1)"
                                                },
                                                    {
                                                        "offset": 1,
                                                        "color": "rgba(68,209,109,0)"
                                                    }
                                                ],
                                                "global": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": "",
                                    "value": data.CountryValue[4],
                                    "label": {
                                        "show": true,
                                        "position": "top",
                                        formatter: function(params) {
                                            var index = params.dataIndex;
                                            var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                            return str;
                                        },
                                        "rich": {
                                            "a": {
                                                "fontSize": 18,
                                                "color": "#124E91",
                                                "align": "center",
                                                "height": 30
                                            },
                                            "c": {
                                                "fontSize": 18,
                                                "color": "#fff",
                                                "padding": [
                                                    -4,
                                                    0,
                                                    8,
                                                    0
                                                ],
                                                "backgroundColor": {
                                                    "image": labelimg
                                                },
                                                "align": "center",
                                                "verticalAlign": "bottom",
                                                "height": 45,
                                                "lineHeight": 40,
                                                "width": 100
                                            }
                                        }
                                    },
                                    "itemStyle": {
                                        "normal": {
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(18,78,145,1)"
                                                },
                                                    {
                                                        "offset": 1,
                                                        "color": "rgba(18,78,145,0)"
                                                    }
                                                ],
                                                "global": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": "",
                                    "value": data.CountryValue[5],
                                    "label": {
                                        "show": true,
                                        "position": "top",
                                        formatter: function(params) {
                                            var index = params.dataIndex;
                                            var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                            return str;
                                        },
                                        "rich": {
                                            "a": {
                                                "fontSize": 18,
                                                "color": "#BDC414",
                                                "align": "center",
                                                "height": 30
                                            },
                                            "c": {
                                                "fontSize": 18,
                                                "color": "#fff",
                                                "padding": [
                                                    -4,
                                                    0,
                                                    8,
                                                    0
                                                ],
                                                "backgroundColor": {
                                                    "image": labelimg
                                                },
                                                "align": "center",
                                                "verticalAlign": "bottom",
                                                "height": 45,
                                                "lineHeight": 40,
                                                "width": 100
                                            }
                                        }
                                    },
                                    "itemStyle": {
                                        "normal": {
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(189,196,20,1)"
                                                },
                                                    {
                                                        "offset": 1,
                                                        "color": "rgba(189,196,20,0)"
                                                    }
                                                ],
                                                "global": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": "",
                                    "value": data.CountryValue[6],
                                    "label": {
                                        "show": true,
                                        "position": "top",
                                        formatter: function(params) {
                                            var index = params.dataIndex;
                                            var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                            return str;
                                        },
                                        "rich": {
                                            "a": {
                                                "fontSize": 18,
                                                "color": "#C8CCA5",
                                                "align": "center",
                                                "height": 30
                                            },
                                            "c": {
                                                "fontSize": 18,
                                                "color": "#fff",
                                                "padding": [
                                                    -4,
                                                    0,
                                                    8,
                                                    0
                                                ],
                                                "backgroundColor": {
                                                    "image": labelimg
                                                },
                                                "align": "center",
                                                "verticalAlign": "bottom",
                                                "height": 45,
                                                "lineHeight": 40,
                                                "width": 100
                                            }
                                        }
                                    },
                                    "itemStyle": {
                                        "normal": {
                                            "color": {
                                                "type": "linear",
                                                "x": 0,
                                                "y": 0,
                                                "x2": 0,
                                                "y2": 1,
                                                "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(200,204,165,1)"
                                                },
                                                    {
                                                        "offset": 1,
                                                        "color": "rgba(200,204,165,0)"
                                                    }
                                                ],
                                                "global": false
                                            }
                                        }
                                    }
                                }
                            ],
                            "stack": "a",
                            "symbol": "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z"
                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            error:function(xhr, type, errorThrown){
            }
        });
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function ceshis5() {
        var myChart = echarts.init(document.getElementById('map'));
                $.ajax({
            url:"http://127.0.0.1:5000/bigdata/ceshi5",
            success:function(data){
                var uploadedDataURL = "./js/data-1528971808162-BkOXf61WX.json";

        var geoGpsMap = {
            '1': [116.4071, 39.9046],
            '2': [125.8154, 44.2584],
            '3': [121.4737, 31.2303],
            '4': [117.1582, 36.8701],
            '5': [103.9526, 30.7617],
            '6': [106.6302, 26.6470],

        };
        var geoCoordMap = {
            "江苏": [118.8062, 31.9208],
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京市': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [121.4648, 31.2891],
        };
        var d1 = data.data1;
        var d2 = data.data2;
        var d3 = data.data3;
        var d4 = data.data4;
        var d5 = data.data5;
        var d6 = data.data6;
        var colors = [
            ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
            ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
            ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
            ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
        ];
        var colorIndex = 0;
        $(function() {
            var year = ["北京", "长春", "上海", "青岛", "成都", "贵阳"];
            var mapData = [
                [],
                [],
                [],
                [],
                [],
                [],
            ];
            /*柱子Y名称*/
            var categoryData = [];
            var barData = [];
            for (var key in geoCoordMap) {
                mapData[0].push({
                    "year": '长春',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d1[key] / 100,
                });
                mapData[1].push({
                    "year": '长春',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d2[key] / 100,
                });
                mapData[2].push({
                    "year": '青岛',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d3[key] / 100,
                });
                mapData[3].push({
                    "year": '青岛',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d4[key] / 100,
                });
                mapData[4].push({
                    "year": '成都',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d5[key] / 100,
                });
                mapData[5].push({
                    "year": '成都',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d6[key] / 100,
                });
            }
            for (var i = 0; i < mapData.length; i++) {
                mapData[i].sort(function sortNumber(a, b) {
                    return a.value - b.value
                });
                barData.push([]);
                categoryData.push([]);
                for (var j = 0; j < mapData[i].length; j++) {
                    barData[i].push(mapData[i][j].value1);
                    categoryData[i].push(mapData[i][j].name);
                }
            }
            /*$.getJSON(uploadedDataURL, function(geoJson) {*/
                /*echarts.registerMap('china', geoJson);*/
                /*echarts.registerMap('china', geoJson);*/
                var convertData = function(data) {
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
                var convertToLineData = function(data, gps) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var toCoord = geoCoordMap[dataItem.name];
                        //debugger;
                        var fromCoord = gps; //郑州
                        //  var toCoord = geoGps[Math.random()*3];
                        if (fromCoord && toCoord) {
                            res.push([{
                                coord: fromCoord,
                                value: dataItem.value
                            }, {
                                coord: toCoord,
                            }]);
                        }
                    }
                    return res;
                };
                optionXyMap01 = {
                    timeline: {
                        data: year,
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 3000,
                        left: '10%',
                        right: '10%',
                        bottom: '3%',
                        width: '80%',
                        //  height: null,
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#ddd'
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        symbolSize: 10,
                        lineStyle: {
                            color: '#555'
                        },
                        checkpointStyle: {
                            borderColor: '#777',
                            borderWidth: 2
                        },
                        controlStyle: {
                            showNextBtn: true,
                            showPrevBtn: true,
                            normal: {
                                color: '#666',
                                borderColor: '#666'
                            },
                            emphasis: {
                                color: '#aaa',
                                borderColor: '#aaa'
                            }
                        },

                    },
                    baseOption: {

                        animation: true,
                        animationDuration: 1000,
                        animationEasing: 'cubicInOut',
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: 'cubicInOut',
                        grid: {
                            right: '1%',
                            top: '15%',
                            bottom: '10%',
                            width: '20%'
                        },
                        tooltip: {
                            trigger: 'axis', // hover触发器
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                                shadowStyle: {
                                    color: 'rgba(150,150,150,0.1)' //hover颜色
                                }
                            }
                        },
                        geo: {
                            show: true,
                            map: 'china',
                            roam: true,
                            zoom: 1,
                            center: [113.83531246, 34.0267395887],
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(147, 235, 248, 1)',
                                    borderWidth: 1,
                                    areaColor: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.8,
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    },
                                    shadowColor: 'rgba(128, 217, 248, 1)',
                                    // shadowColor: 'rgba(255, 255, 255, 1)',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 10
                                },
                                emphasis: {
                                    areaColor: '#389BB7',
                                    borderWidth: 0
                                }
                            }
                        },
                    },
                    options: []

                };
                for (var n = 0; n < year.length; n++) {

                    optionXyMap01.options.push({
                        /*backgroundColor: '#013954',*/
                        title:


                            [{
                                text: '物流平台',
                                subtext: '   ',
                                left: '35%',
                                top: '15%',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 25
                                }
                            },
                                {
                                    id: 'statistic',
                                    text: year[n] + "数据统计情况",
                                    left: '75%',
                                    top: '8%',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 25
                                    }
                                }
                            ],
                        xAxis: {
                            type: 'value',
                            scale: true,
                            position: 'top',
                            min: 0,
                            boundaryGap: false,
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                margin: 2,
                                textStyle: {
                                    color: '#aaa'
                                }
                            },
                        },
                        yAxis: {
                            type: 'category',
                            //  name: 'TOP 20',
                            nameGap: 16,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#ddd'
                                }
                            },
                            axisTick: {
                                show: false,
                                lineStyle: {
                                    color: '#ddd'
                                }
                            },
                            axisLabel: {
                                interval: 0,
                                textStyle: {
                                    color: '#ddd'
                                }
                            },
                            data: categoryData[n]
                        },

                        series: [
                            //未知作用
                            {
                                //文字和标志
                                name: 'light',
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                data: convertData(mapData[n]),
                                symbolSize: function(val) {
                                    return val[2] / 10;
                                },
                                label: {
                                    normal: {
                                        formatter: '{b}',
                                        position: 'right',
                                        show: true
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: colors[colorIndex][n]
                                    }
                                }
                            },
                            //地图？
                            {
                                type: 'map',
                                map: 'china',
                                geoIndex: 0,
                                aspectScale: 0.75, //长宽比
                                showLegendSymbol: false, // 存在legend时显示
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: false,
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                },
                                roam: true,
                                itemStyle: {
                                    normal: {
                                        areaColor: '#031525',
                                        borderColor: '#FFFFFF',
                                    },
                                    emphasis: {
                                        areaColor: '#2B91B7'
                                    }
                                },
                                animation: false,
                                data: mapData
                            },
                            //地图点的动画效果
                            {
                                //  name: 'Top 5',
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                data: convertData(mapData[n].sort(function(a, b) {
                                    return b.value - a.value;
                                }).slice(0, 20)),
                                symbolSize: function(val) {
                                    return val[2] / 10;
                                },
                                showEffectOn: 'render',
                                rippleEffect: {
                                    brushType: 'stroke'
                                },
                                hoverAnimation: true,
                                label: {
                                    normal: {
                                        formatter: '{b}',
                                        position: 'right',
                                        show: true
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: colors[colorIndex][n],
                                        shadowBlur: 10,
                                        shadowColor: colors[colorIndex][n]
                                    }
                                },
                                zlevel: 1
                            },
                            //地图线的动画效果
                            {
                                type: 'lines',
                                zlevel: 2,
                                effect: {
                                    show: true,
                                    period: 4, //箭头指向速度，值越小速度越快
                                    trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
                                    symbol: 'arrow', //箭头图标
                                    symbolSize: 5, //图标大小
                                },
                                lineStyle: {
                                    normal: {
                                        color: colors[colorIndex][n],
                                        width: 0.3, //尾迹线条宽度
                                        opacity: 0.8, //尾迹线条透明度
                                        curveness: .3 //尾迹线条曲直度
                                    }
                                },
                                data: convertToLineData(mapData[n], geoGpsMap[n + 1])
                            },
                            //柱状图
                            {
                                zlevel: 1.5,
                                type: 'bar',
                                symbol: 'none',
                                itemStyle: {
                                    normal: {
                                        color: colors[colorIndex][n]
                                    }
                                },
                                data: barData[n]
                            }
                        ]
                    })
                }
                myChart.setOption(optionXyMap01);
            /*});*/
        });
            },
            error:function(xhr, type, errorThrown){
            }
        });

        function randomNum(minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1, 10);
                    break;
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                    break;
                default:
                    return 0;
                    break;
            }
        }

        // 使用刚指定的配置项和数据显示图表。
        //myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }





    function ceshis7() {
        var myChart = echarts.init(document.getElementById('chart_1'));


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
});

