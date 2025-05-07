$(function () {
	"use strict";

// chart 1
var options = {
    series: [{
        name: 'سکشن ها',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'line',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();



// chart 2
var options = {
    series: [{
        name: 'کل کاربران',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'bar',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();


// chart 3
var options = {
    series: [{
        name: 'بازدید صفحات',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'area',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#fff"],
          inverseColors: true,
          opacityFrom: 0.2,	
          opacityTo: 0.5,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();



// chart 4
var options = {
    series: [{
        name: 'نرح رشد',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'bar',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.4,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();




// chart 5
var options = {
    series: [{
        name: 'میانگین مدت زمان جلسه',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'line',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();




// chart 6
var options = {
    series: [{
        name: 'فروش',
        data: [4, 8, 6, 9, 6, 7, 4, 5, 2.5, 3]
    }],
    chart: {
        type: 'area',
        foreColor: "rgba(255, 255, 255, 0.65)",
        height: 250,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#0d6efd',
        },
        sparkline: {
            enabled: false
        }
    },
    markers: {
        size: 0,
        colors: ["#0d6efd"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#fff'],
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0.5,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    grid: {
        borderColor: 'rgba(255, 255, 255, 0.12)',
        show: true,
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "K";
            }
        },
    },
    xaxis: {
        categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی'],
    },
    
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return "" + val + "K"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();



// chart 7
var options = {
    series: [{
        name: 'بازدید کننده جدید',
        data: [66, 76, 85, 101, 65, 87, 105, 91, 86]

    }, {
        name: 'بازدید کننده قدیمی',
        data: [55, 44, 55, 57, 56, 61, 58, 63, 60]
    }],
    chart: {
        foreColor: "rgba(255, 255, 255, 0.65)",
        type: 'bar',
        height: 260,
        stacked: false,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -20
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#fff", "rgba(255, 255, 255, 0.50)"],
            inverseColors: !1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    colors: ["#fff", "rgba(255, 255, 255, 0.50)"],
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "K";
            }
        },
    },
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    grid: {
        borderColor: 'rgba(255, 255, 255, 0.12)',
        show: true,
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return "" + val + "K"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();



// chart 8
var options = {
    series: [{
        name: 'سکشن ها',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'bar',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#0d6efd',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#0d6efd"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
       // curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();



// chart 9
var options = {
    series: [{
        name: 'سکشن ها',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'area',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
       // curve: 'smooth'
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#fff"],
            inverseColors: !1,
            opacityFrom:0.5,
            opacityTo: 0.2,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();


// chart 10
var options = {
    series: [{
        name: 'سکشن ها',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'area',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
       // curve: 'smooth'
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#fff"],
            inverseColors: !1,
            opacityFrom:0.5,
            opacityTo: 0.2,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart10"), options);
chart.render();



// chart 11
var options = {
    chart: {
        height: 330,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -130,
            endAngle: 130,
            hollow: {
                margin: 0,
                size: '78%',
                //background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: false,
                    top: 3,
                    left: 0,
                    blur: 4,
                    color: 'rgba(0, 169, 255, 0.25)',
                    opacity: 0.65
                }
            },
            track: {
                background: 'rgba(255, 255, 255, 0.12)',
                //strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    color: 'rgba(0, 169, 255, 0.12)',
                    opacity: 0.65
                }
            },
            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -25,
                    show: true,
                    color: '#fff',
                    fontSize: '16px'
                },
                value: {
                    formatter: function (val) {
                        return val + "%";
                    },
                    color: '#fff',
                    fontSize: '45px',
                    show: true,
                    offsetY: 10,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#fff'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    series: [84],
    stroke: {
        lineCap: 'round',
        //dashArray: 4
    },
    labels: ['پویایی امروز'],
}
var chart = new ApexCharts(document.querySelector("#chart11"), options);
chart.render();



// chart 12
	Highcharts.chart('chart12', {
		chart: {
            width: '190',
            height: '190',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
        exporting: {
			buttons: {
				contextButton: {
					enabled: false,
				}
			}
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: false
			}
		},
		series: [{
			name: 'کاربران',
			colorByPoint: true,
			data: [{
				name: 'مرد',
				y: 61.41,
				sliced: true,
				selected: true
			}, {
				name: 'زن',
				y: 11.84
			}]
		}]
	});



// chart 13
	// Create the chart
	Highcharts.chart('chart13', {
		chart: {
			height: 360,
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'وضعیت منابع ترافیک.آذر 1403'
		},
		accessibility: {
			announceNewData: {
				enabled: true
			}
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: 'وضعیت منابع ترافیک'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:.1f}%'
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> از کل<br/>'
		},
		series: [{
			name: "منابع ترافیک",
			colorByPoint: true,
			data: [{
				name: "جستجوی ارگانیک",
				y: 62.74,
				drilldown: "جستجوی ارگانیک"
			}, {
				name: "مستقیم",
				y: 40.57,
				drilldown: "مستقیم"
			}, {
				name: "رفرال",
				y: 25.23,
				drilldown: "رفرال"
			}, {
				name: "دیگر",
				y: 10.58,
				drilldown: "دیگر"
			}]
		}],
		
	});


// chart 14
	// Create the chart
	Highcharts.chart('chart14', {
		chart: {
			height: 360,
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'وضعیت گروه سنی بازدیدکنندگان'
		},
		accessibility: {
			announceNewData: {
				enabled: true
			}
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: 'وضعیت گروه سنی'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:.1f}K'
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> از کل<br/>'
		},
		series: [{
			name: "گروه سنی",
			colorByPoint: true,
			data: [{
				name: "18-24",
				y: 35.74,
				//drilldown: "جستجوی ارگانیک"
			}, {
				name: "25-34",
				y: 65.57,
				//drilldown: "مستقیم"
			}, {
				name: "35-44",
				y: 30.23,
				//drilldown: "رفرال"
			}, {
				name: "45-54",
				y: 20.58,
				//drilldown: "دیگر"
			}, {
				name: "55-64",
				y: 15.58,
				//drilldown: "دیگر"
			}, {
				name: "65-80",
				y: 8.58,
				//drilldown: "دیگر"
			}]
		}],
		
	});



 // نقشه جهان
	
 jQuery('#geographic-map-2').vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    zoomOnScroll: false,
    color: '#009efb',
    regionStyle: {
        initial: {
            fill: 'rgba(255, 255, 255, 1)'
        }
    },
    markerStyle: {
        initial: {
            r: 9,
            'fill': '#fff',
            'fill-opacity': 1,
            'stroke': '#000',
            'stroke-width': 5,
            'stroke-opacity': 0.4
        },
    },
    enableZoom: true,
    hoverColor: '#fff',
    markers: [{
        latLng: [21.00, 78.00],
        name: 'من عاشق ایرانم'
    }],
    series: {
        regions: [{
            values: {
                IN: 'rgba(255, 255, 255, 0.50)',
                US: 'rgba(255, 255, 255, 0.50)',
                CN: 'rgba(255, 255, 255, 0.50)',
                CA: 'rgba(255, 255, 255, 0.50)',
                AU: 'rgba(255, 255, 255, 0.50)'
            }
        }]
    },
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function (element, code, region) {
        var message = 'شما کلیک کردید "' + region + '" که کد را دارد: ' + code.toUpperCase();
        alert(message);
    }
});





});