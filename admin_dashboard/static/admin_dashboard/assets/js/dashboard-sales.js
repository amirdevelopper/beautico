$(function () {
	"use strict";
	
	
	
	// chart 1
	var options = {
		series: [{
			name: 'کل سفارشات',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var options = {
		series: [{
			name: 'کل درآمد',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart2"), options);
	chart.render();
	// chart 3
	var options = {
		series: [{
			name: 'کل کاربران',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart3"), options);
	chart.render();
	// chart 4
	var options = {
		series: [{
			name: 'نظرات',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	
	
	
	// chart 5
	Highcharts.chart('chart5', {
		chart: {
			type: 'area',
			height: 420,
			styledMode: true
		},
		credits: {
			enabled: false
		},
		accessibility: {
			//description: 'شرح تصویر: نمودار منطقه ای ذخایر هسته ای ایالات متحده آمریکا و اتحاد جماهیر شوروی/روسیه را بین سال های 1945 و 2017 مقایسه می کند. تعداد سلاح های هسته ای در محور Y و سال ها در محور X رسم شده است. نمودار تعاملی است و سطوح موجودی سال به سال را می توان برای هر کشور ردیابی کرد. ایالات متحده در آغاز عصر هسته ای در سال 1945 دارای 6 سلاح هسته ای است. این تعداد تا سال 1950 با ورود اتحاد جماهیر شوروی به رقابت تسلیحاتی به تدریج به 369 افزایش یافت. در این مرحله، ایالات متحده به سرعت شروع به ساخت انبارهای خود کرد که در سال 1966 به 32040 کلاهک در مقایسه با 7089 کلاهک اتحاد جماهیر شوروی به اوج رسید. از این اوج در سال 1966، ذخایر ایالات متحده به تدریج با گسترش ذخایر اتحاد جماهیر شوروی کاهش یافت. تا سال 1978 اتحاد جماهیر شوروی شکاف هسته ای را به 25393 کاهش داد. ذخایر اتحاد جماهیر شوروی همچنان به رشد خود ادامه می دهد تا اینکه در سال 1986 به اوج 45000 دستگاه رسید در مقایسه با زرادخانه ایالات متحده که 24401 بود. از سال 1986، ذخایر هسته ای هر دو کشور شروع به کاهش کرد. تا سال 2000، این تعداد برای ایالات متحده و روسیه به ترتیب به 10577 و 21000 کاهش یافته است. این کاهش تا سال 2017 ادامه دارد و در آن زمان ایالات متحده دارای 4018 سلاح در مقایسه با روسیه 4500 سلاح است..'
		},
		title: {
			text: 'گزارش سالانه فروش و ترافیک'
		},
		
		xAxis: {
			allowDecimals: false,
			type: 'datetime',
			labels: {
				formatter: function () {
					return this.value; // clean, unformatted number for year
				}
			},
			accessibility: {
				//rangeDescription: 'محدوده: 1940 تا 2017.'
			}
		},
		yAxis: {
			title: {
				text: ''
			},
			labels: {
				formatter: function () {
					return this.value / 1000 + 'k';
				}
			}
		},
		tooltip: {
			pointFormat: '{series.name} انبار کرده بود <b>{point.y:,.0f}</b><br/>کلاهک در {point.x}'
		},
		plotOptions: {
			area: {
				pointStart: 1940,
				marker: {
					enabled: false,
					symbol: 'circle',
					radius: 2,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			}
		},
		series: [{
			name: 'فروش',
			data: [
				null, null, null, null, null, 6, 11, 32, 110, 235,
				369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
				20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
				26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
				24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
				21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
				10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
				5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
			]
		}, {
			name: 'ترافیک',
			data: [null, null, null, null, null, null, null, null, null, null,
				5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
				1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
				11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
				30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
				37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
				21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
				12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
			]
		}]
	});
	
	
	// chart 6
	var options = {
		chart: {
			height: 300,
			type: 'radialBar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			radialBar: {
				//startAngle: -135,
				//endAngle: 225,
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
					background: 'rgba(255, 255, 255, 0.15)',
					//strokeWidth: '67%',
					margin: 0, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
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
				shade: 'light',
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
		series: [68],
		stroke: {
			lineCap: 'round',
			//dashArray: 4
		},
		labels: ['رسیده'],
	}
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();
	
	
	
	// chart 7
	Highcharts.chart('chart7', {
		chart: {
			type: 'variablepie',
			height: 330,
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'کل ترافیک بر اساس منبع'
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
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series: [{
			minPointSize: 10,
			innerSize: '65%',
			zMin: 0,
			name: 'ترافیک',
			data: [{
				name: 'اورگانیک',
				y: 505370,
				z: 92.9
			}, {
				name: 'پولی',
				y: 551500,
				z: 118.7
			}, {
				name: 'ایمیل',
				y: 312685,
				z: 124.6
			}, {
				name: 'گوگل',
				y: 78867,
				z: 137.5
			}, {
				name: 'دایرکت',
				y: 301340,
				z: 201.8
			}, {
				name: 'بینگ',
				y: 357022,
				z: 235.6
			}]
		}]
	});


	// chart 8

var options = {
    series: [{
        name: 'فروش آنلاین',
        data: [33, 44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 68]
    }, {
        name: 'فروش آفلاین',
        data: [38, 35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 43]
    }],
    chart: {
        foreColor: 'rgba(255, 255, 255, 0.75)',
        type: 'bar',
        height:280,
        stacked: true,
        toolbar: {
            show: false
		},
		
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
	},
	grid: {
		borderColor: 'rgba(255, 255, 255, 0.12)',
		show: true,
	},
	legend: {
		show: true,
		position: 'top',
		horizontalAlign: 'right'
	  },
	  stroke: {
		show: !0,
		width: 2,
		colors: ["transparent"]
	},
	colors: ["#fff", "rgba(255, 255, 255, 0.25)"],
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "" + val + " هزار"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();


// chart 9
var options = {
	series: [{
		name: 'کل سفارشات',
		data: [340, 160, 671, 414, 555,  414, 555, 257]
	}],
	chart: {
		type: 'area',
		height: 180,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		},
		dropShadow: {
			enabled: true,
			top: 3,
			left: 14,
			blur: 4,
			opacity: 0.12,
			color: '#16bf0b',
		},
		sparkline: {
			enabled: true
		}
	},
	markers: {
		size: 0,
		colors: ["#16bf0b"],
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
		width: 2.4,
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
		  opacityFrom: 0.5,	
		  opacityTo: 0.2,
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
var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();




   // نقشه جهان
	
	jQuery('#geographic-map-3').vectorMap({
		map: 'world_mill_en',
		backgroundColor: 'transparent',
		borderColor: '#818181',
		borderOpacity: 0.25,
		borderWidth: 1,
		zoomOnScroll: false,
		color: '#009efb',
		regionStyle: {
			initial: {
				fill: '#fff'
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
		hoverColor: '#009efb',
		markers: [{
			latLng: [21.00, 78.00],
			name: 'من عاشق ایرانم'
		}],
		series: {
			regions: [{
				values: {
					IN: 'rgba(255, 255, 255, 0.20)',
					US: 'rgba(255, 255, 255, 0.60)',
					RU: 'rgba(255, 255, 255, 0.80)',
					AU: 'rgba(255, 255, 255, 0.10)'
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