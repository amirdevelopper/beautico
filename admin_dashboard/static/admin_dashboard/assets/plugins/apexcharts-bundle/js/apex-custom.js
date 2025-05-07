$(function () {
	"use strict";
	// chart 1
	var options = {
		series: [{
			name: 'دوست دارد',
			data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 400,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.10,
			}
		},
		stroke: {
			width: 5,
			curve: 'smooth'
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
		},
		xaxis: {
			type: 'datetime',
			categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
		},
		title: {
			text: 'نمودار خطی',
			align: 'left',
			style: {
				fontSize: "16px",
				color: '#fff'
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				gradientToColors: ['#fff'],
				shadeIntensity: 1,
				type: 'horizontal',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100]
			},
		},
		markers: {
			size: 4,
			colors: ["#000"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		colors: ["#fff"],
		yaxis: {
			title: {
				text: 'نامزدی',
			},
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var optionsLine = {
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 420,
			type: 'line',
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 2,
				blur: 4,
				opacity: 0.1,
			}
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		colors: ["#fff", '#fff', '#fff'],
		series: [{
			name: "موزیک",
			data: [1, 15, 26, 20, 33, 27]
		}, {
			name: "تصاویر",
			data: [3, 33, 21, 42, 19, 32]
		}, {
			name: "فایل ها",
			data: [0, 39, 52, 11, 29, 43]
		}],
		title: {
			text: 'نمودار چند خطی',
			align: 'left',
			offsetY: 25,
			offsetX: 20
		},
		subtitle: {
			text: 'آمار',
			offsetY: 55,
			offsetX: 20
		},
		markers: {
			size: 4,
			strokeWidth: 0,
			hover: {
				size: 7
			}
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
		},
		labels: ['1400/12/15', '1400/02/14', '1400/11/12', '1400/08/20', '1400/05/08', '1400/12/30'],
		xaxis: {
			tooltip: {
				enabled: false
			}
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			offsetY: -20
		}
	}
	var chartLine = new ApexCharts(document.querySelector('#chart2'), optionsLine);
	chartLine.render();
	// chart 4
	var options = {
		series: [{
			name: 'سری های دو',
			data: [31, 40, 28, 51, 42, 109, 100]
		}, {
			name: 'سری های یک',
			data: [11, 32, 45, 32, 34, 52, 41]
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 400,
			type: 'area',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		colors: ["#fff", '#fff'],
		title: {
			text: 'نمودار مساحتی',
			align: 'left',
			style: {
				fontSize: "16px",
				color: '#fff'
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
		},
		xaxis: {
			type: 'datetime',
			categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	// chart 5
	var options = {
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 300,
			type: 'area',
			zoom: {
				enabled: false
			},
		},
		dataLabels: {
			enabled: false
		},
		plotOptions: {
			area: {
				isRange: true
			}
		},
		stroke: {
			curve: 'straight'
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
		},
		colors: ["#fff"],
		series: [{
			name: 'range',
			data: [{
				x: new Date(1538780400000),
				y: [6632.01, 6643.59]
			}, {
				x: new Date(1538782200000),
				y: [6630.71, 6648.95]
			}, {
				x: new Date(1538784000000),
				y: [6635.65, 6651]
			}, {
				x: new Date(1538785800000),
				y: [6638.24, 6640]
			}, {
				x: new Date(1538787600000),
				y: [6624.53, 6636.03]
			}, {
				x: new Date(1538789400000),
				y: [6624.61, 6632.2]
			}, {
				x: new Date(1538791200000),
				y: [6617, 6627.62]
			}, {
				x: new Date(1538793000000),
				y: [6605, 6608.03]
			}, {
				x: new Date(1538794800000),
				y: [6604.5, 6614.4]
			}, {
				x: new Date(1538796600000),
				y: [6608.02, 6610.68]
			}, {
				x: new Date(1538798400000),
				y: [6608.91, 6618.99]
			}, {
				x: new Date(1538800200000),
				y: [6612, 6615.13]
			}, {
				x: new Date(1538802000000),
				y: [6612, 6624.12]
			}, {
				x: new Date(1538803800000),
				y: [6603.91, 6623.91]
			}, {
				x: new Date(1538805600000),
				y: [6611.69, 6618.74]
			}, {
				x: new Date(1538807400000),
				y: [6611, 6622.78]
			}, {
				x: new Date(1538809200000),
				y: [6614.9, 6626.2]
			}]
		}],
		title: {
			text: 'محدوده نمودار منطقه',
			align: 'left',
			style: {
				fontSize: '16px'
			}
		},
		xaxis: {
			type: 'datetime',
		},
	}
	var chart = new ApexCharts(document.querySelector("#chart5"), options);
	chart.render();
	// chart 6
	var options = {
		series: [{
			name: 'شمال',
			data: [{
				x: 1996,
				y: 322
			}, {
				x: 1997,
				y: 324
			}, {
				x: 1998,
				y: 329
			}, {
				x: 1999,
				y: 342
			}, {
				x: 2000,
				y: 348
			}, {
				x: 2001,
				y: 334
			}, {
				x: 2002,
				y: 325
			}, {
				x: 2003,
				y: 316
			}, {
				x: 2004,
				y: 318
			}, {
				x: 2005,
				y: 330
			}, {
				x: 2006,
				y: 355
			}, {
				x: 2007,
				y: 366
			}, {
				x: 2008,
				y: 337
			}, {
				x: 2009,
				y: 352
			}, {
				x: 2010,
				y: 377
			}, {
				x: 2011,
				y: 383
			}, {
				x: 2012,
				y: 344
			}, {
				x: 2013,
				y: 366
			}, {
				x: 2014,
				y: 389
			}, {
				x: 2015,
				y: 334
			}]
		}, {
			name: 'جنوب',
			data: [{
				x: 1996,
				y: 162
			}, {
				x: 1997,
				y: 90
			}, {
				x: 1998,
				y: 50
			}, {
				x: 1999,
				y: 77
			}, {
				x: 2000,
				y: 35
			}, {
				x: 2001,
				y: -45
			}, {
				x: 2002,
				y: -88
			}, {
				x: 2003,
				y: -120
			}, {
				x: 2004,
				y: -156
			}, {
				x: 2005,
				y: -123
			}, {
				x: 2006,
				y: -88
			}, {
				x: 2007,
				y: -66
			}, {
				x: 2008,
				y: -45
			}, {
				x: 2009,
				y: -29
			}, {
				x: 2010,
				y: -45
			}, {
				x: 2011,
				y: -88
			}, {
				x: 2012,
				y: -132
			}, {
				x: 2013,
				y: -146
			}, {
				x: 2014,
				y: -169
			}, {
				x: 2015,
				y: -184
			}]
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			type: 'area',
			height: 300,
			zoom: {
				enabled: false
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		title: {
			text: 'منطقه با مقادیر منفی',
			align: 'left',
			style: {
				fontSize: '14px'
			}
		},
		xaxis: {
			type: 'datetime',
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			tickAmount: 4,
			floating: false,
			labels: {
				style: {
					colors: '#fff',
				},
				offsetY: -7,
				offsetX: 0,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			}
		},
		fill: {
			opacity: 0.5
		},
		colors: ["#fff", 'rgba(255, 255, 255, 0.50)'],
		tooltip: {
			x: {
				format: "yyyy",
			},
			fixed: {
				enabled: false,
				position: 'topRight'
			}
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
		},
		
	};
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();
	// chart 7
	var options = {
		series: [{
			name: 'سود خالص',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: 'درآمد',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: 'جریان نقدی آزاد',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			type: 'bar',
			height: 400
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '35%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		title: {
			text: 'نمودار ستونی',
			align: 'left',
			style: {
				fontSize: '14px'
			}
		},
		colors: ["#fff", 'rgba(255, 255, 255, 0.50)', 'rgba(255, 255, 255, 0.20)'],
		xaxis: {
			categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر"],
		},
		yaxis: {
			title: {
				text: '<toman> تومان </toman>(هزار)'
			}
		},
		fill: {
			opacity: 1
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
			y: {
				formatter: function (val) {
					return val +  "<toman> تومان </toman>"
				}
			}
		}
	};
	var optionsProgress3 = {
		chart: {
			height: 70,
			type: 'bar',
			foreColor: 'rgba(255, 255, 255, 0.65)',
			stacked: true,
			sparkline: {
				enabled: true,
				reverse: true // معکوس کردن جهت نوار
			}
		},
		plotOptions: {
			bar: {
				horizontal: true,
				barHeight: '15%',
				colors: {
					backgroundBarColors: ['rgba(255, 255, 255, 0.12)']
				}
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 0
		},
		series: [{
			name: 'رفرال',
			data: [74]
		}],
		title: {
			floating: true,
			align: 'right', // تنظیم متن به سمت راست
			offsetX: -20, // فاصله 10 پیکسل از سمت راست
			offsetY: 5,
			text: 'رفرال',
			style: {
				cssClass: 'apexcharts-title'
			}
		},
		subtitle: {
			floating: true,
			align: 'left', // تنظیم درصد به سمت چپ
			offsetX: 5, // فاصله 5 پیکسل از سمت چپ
			offsetY: 0,
			text: '74%',
			style: {
				fontSize: '20px',
				textAlign: 'left'
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				gradientToColors: ['#fff']
			}
		},
		colors: ['#fff'],
		tooltip: {
			theme: 'dark',
			x: {
				show: false
			},
			enabled: true
		},
		xaxis: {
			categories: ['رفرال'],
			labels: {
				offsetX: -20,
				style: {
					direction: 'rtl',
					textAlign: 'right'
				}
			}
		},
		yaxis: {
			max: 100,
			reversed: true, // معکوس کردن محور y برای تغییر جهت نوار
			labels: {
				style: {
					direction: 'rtl',
					textAlign: 'right'
				}
			}
		}
	  };
	  
	  var chartProgress3 = new ApexCharts(document.querySelector('#chart3'), optionsProgress3);
	  chartProgress3.render();
	var chart = new ApexCharts(document.querySelector("#chart7"), options);
	chart.render();
	// chart 8
	var options = {
		series: [{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380].reverse()
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			type: 'bar',
			height: 350,
			toolbar: {
				show: false
			}
		},
		colors: ["#fff"],
		plotOptions: {
			bar: {
				horizontal: true,
				distributed: true,
				dataLabels: {
					position: 'bottom' // تغییر موقعیت برچسب‌های داده در صورت نیاز
				}
			}
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
			y: {
				formatter: function (val) {
					return val + " تومان";
				}
			}
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			categories: ['کره جنوبی', 'کانادا', 'بریتانیا', 'هلند', 'ایتالیا', 'فرانسه', 'ژاپن', 'ایالات متحده', 'چین', 'آلمان'].reverse(),
			labels: {
				style: {
					cssClass: 'apexcharts-xaxis-label',
					direction: 'rtl',
					textAlign: 'right'
				}
			}
		},
		yaxis: {
			labels: {
				style: {
					cssClass: 'apexcharts-yaxis-label',
					direction: 'rtl',
					textAlign: 'right'
				}
			},
			reversed: true // معکوس کردن جهت محور y
		},
		legend: {
			horizontalAlign: 'right'
		},
		tooltip: {
			theme: 'dark',
			y: {
				formatter: function (val) {
					return val + " تومان";
				}
			},
			style: {
				direction: 'rtl',
				textAlign: 'right'
			}
		}
	};
	
	var chart = new ApexCharts(document.querySelector("#chart8"), options);
	chart.render();
	
	// chart 9
	var options = {
		series: [{
			name: 'وب سایت / وبلاگ',
			type: 'column',
			data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
		}, {
			name: 'رسانه های اجتماعی',
			type: 'line',
			data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 350,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		stroke: {
			width: [0, 4]
		},
		colors: ['rgba(255, 255, 255, 0.20)', "#fff"],
		title: {
			text: 'ترافیک منابع'
		},
		dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',
			y: {
				formatter: function (val) {
					return val +  "<toman> تومان </toman>" + " "
				}
			}
		},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
		xaxis: {
			type: 'datetime'
		},
		yaxis: [{
			title: {
				text: 'وب سایت / وبلاگ',
			},
		}, {
			opposite: true,
			title: {
				text: 'رسانه های اجتماعی'
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart9"), options);
	chart.render();
	// chart 10
	var options = {
		series: [{
			name: 'تیم A',
			type: 'column',
			data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
		}, {
			name: 'تیم B',
			type: 'area',
			data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
		}, {
			name: 'تیم C',
			type: 'line',
			data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
		}],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 350,
			type: 'line',
			stacked: false,
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		colors: ["#fff", 'rgba(255, 255, 255, 0.50)', 'rgba(255, 255, 255, 0.20)'],
		stroke: {
			width: [0, 2, 5],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '50%'
			}
		},
		fill: {
			opacity: [0.85, 0.25, 1],
			gradient: {
				inverseColors: false,
				shade: 'light',
				type: "vertical",
				opacityFrom: 0.85,
				opacityTo: 0.55,
				stops: [0, 100, 100, 100]
			}
		},
		labels: ['01/02/1403', '02/02/1403', '03/02/1403', '04/02/1403', '05/02/1403', '06/02/1403', '07/02/1403', '08/02/1403', '09/02/1403', '10/02/1403', '11/02/1403'],
		markers: {
			size: 0
		},
		xaxis: {
			type: 'datetime'
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		yaxis: {
			title: {
				text: 'Points',
			},
			min: 0
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + " points";
					}
					return y;
				}
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart10"), options);
	chart.render();
	// chart 11
	var options = {
		series: [44, 55, 13, 43, 22],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 380,
			type: 'pie',
		},
		colors: ["#673ab7", "#32ab13", "#f02769", "#ffc107", "#198fed"],
		labels: ['تیم A', 'تیم B', 'تیم C', 'تیم D', 'تیم E'],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 360
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart11"), options);
	chart.render();
	// chart 12
	var options = {
		series: [44, 55, 41, 17, 15],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 380,
			type: 'donut',
		},
		colors: ["#673ab7", "#32ab13", "#f02769", "#ffc107", "#198fed"],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 320
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart12"), options);
	chart.render();
	
});