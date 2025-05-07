$(function() {
    "use strict";



// chart 1

var options = {
            chart: {
                height: 125,
                type: 'area',
                zoom: {
                      enabled: false
                    },
             foreColor: 'rgba(255, 255, 255, 0.65)',
             toolbar: {
                  show: false
                },
          sparkline:{
              enabled:true,
            },
            dropShadow: {
                    enabled: false,
                    opacity: 0.15,
                    blur: 3,
                    left: -7,
                    top: 15,
                    //color: 'rgba(0, 158, 253, 0.65)',
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '10%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3, 
                curve: 'straight'
            },
            series: [{
                name: 'دنبال کنندگان توییتر',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94] // use the array for displaying data from mysql or .net remove the hard number-->
            }],

            xaxis: {
                type: 'month',
                categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
                }

            },
            fill: {
				type: 'gradient',
				  gradient: {
					  shade: 'light',
					  //gradientToColors: ['rgba(255, 255, 255, 0.12)'],
					  shadeIntensity: 1,
					  type: 'vertical',
					  opacityFrom: 0.7,
					  opacityTo: 0.1,
					  stops: [0, 100, 100, 100]
				  },
			  },
			colors: ["#fff"],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                  radius: 50,
                  width: 10,
                  height: 10
                }
              },
            grid:{
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#twitter-followers"),
            options
        );

        chart.render();
		
		
		
		
	// chart 2

    var options = {
            chart: {
                height: 270,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
					startAngle: -135,
                    endAngle: 225,
					hollow: {
						margin: 0,
						size: '75%',
						background: 'transparent',
						dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                        }
					  },
                    track: {
                      background: 'rgba(255, 255, 255, 0.12)',
                      strokeWidth: '100%',
                      margin: 0, // margin is in pixels
                      dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                      }
                    },
                    dataLabels: {
                        name: {
                            fontSize: '14px',
                            color: '#fff',
                            offsetY: -10
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '22px',
                            color: '#fff',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                },
            },
            stroke: {
                dashArray: 4
            },
            fill: {
              type: 'gradient',
              gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.15,
              gradientToColors: ['#fff'],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
            }
         },
		  colors: ["#fff"],
          series: [75],
          labels: ['نسبت متوسط'],
            
        }

       var chart = new ApexCharts(
            document.querySelector("#total-visitors"),
            options
        );
        
        chart.render();

         



  // chart 3

  var options = {
            chart: {
                height: 35,
                type: 'bar',
                zoom: {
                      enabled: false
                    },
             foreColor: 'rgba(255, 255, 255, 0.65)',
             toolbar: {
                  show: false
                },
          sparkline:{
              enabled:true,
            },
            dropShadow: {
                    enabled: true,
                    opacity: 0.1,
                    blur: 3,
                    left: -7,
                    top: 15,
                    //color: 'rgba(0, 158, 253, 0.65)',
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '10%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3, 
                curve: 'straight'
            },
            series: [{
                name: 'تعداد بازدید صفحه فیسبوک',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }],

            xaxis: {
                type: 'month',
                categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
                }

            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#fff'],
                    shadeIntensity: 1,
                    type: 'vertical',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 80, 100]
                },
            },
            colors: ['#fff'],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                  radius: 50,
                  width: 10,
                  height: 10
                }
              },
            grid:{
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#facebook-pageviews"),
            options
        );

        chart.render();
		
		
		
		

// chart 4


var options = {
            chart: {
                height: 35,
                type: 'line',
                zoom: {
                      enabled: false
                    },
             foreColor: 'rgba(255, 255, 255, 0.65)',
             toolbar: {
                  show: false
                },
          sparkline:{
              enabled:true,
            },
            dropShadow: {
                    enabled: true,
                    opacity: 0.15,
                    blur: 3,
                    left: -7,
                    top: 5,
                    //color: 'rgba(0, 158, 253, 0.65)',
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '10%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2.5, 
                curve: 'straight'
            },
            series: [{
                name: 'نرح رشد',
                data: [85, 101, 98, 87, 105, 91, 114, 94]
            }],

            xaxis: {
                type: 'month',
                categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
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
                    stops: [0, 80, 100]
                },
            },
            colors: ['#fff'],
            legend: {
                show: 0,
                position: "top",
                horizontalAlign: "center",
                offsetX: -20,
                fontSize: "12px",
                markers: {
                  radius: 50,
                  width: 10,
                  height: 10
                }
              },
            grid:{
                show: false,
                borderColor: 'rgba(66, 59, 116, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            }
        }

        var chart = new ApexCharts(
            document.querySelector("#bounce-rate"),
            options
        );

        chart.render();
		



 
// chart 5

var options = {
            chart: {
                height: 200,
                type: 'area',
                zoom: {
                      enabled: false
                    },
             foreColor: 'rgba(255, 255, 255, 0.65)',
             toolbar: {
                  show: true
                },
          sparkline:{
              enabled:false,
            },
            dropShadow: {
                    enabled: false,
                    opacity: 0.15,
                    blur: 3,
                    left: -7,
                    top: 15,
                    //color: 'rgba(0, 158, 253, 0.65)',
                }
            },
            plotOptions: {
                bar: {
            columnWidth: '30%',
              endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3, 
                curve: 'smooth'
            },
            series: [{
                name: 'لیست مشترکین',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]
            }],

            xaxis: {
                type: 'month',
                categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],                
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                    return parseInt(val);
                  }
                }

            },

            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#fff'],
                    shadeIntensity: 1,
                    type: 'vertical',
                    opacityFrom: 0.8,
                    opacityTo: 0.2,
                    stops: [0, 100, 100, 100]
                },
            },
            colors: ['#fff'],
            grid:{
                show: true,
                borderColor: 'rgba(255, 255, 255, 0.12)',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },

            },
            title: {
                text: 'لیست مشترکین ماهانه'
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#list-subscribers"),
            options
        );

        chart.render();


     // chart 6

     var optionsProgress1 = {
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
          name: 'دایرکت',
          data: [44]
      }],
      title: {
          floating: true,
          align: 'right', // تنظیم متن به سمت راست
          offsetX: -30, // فاصله 5 پیکسل از سمت راست
          offsetY: 5,
          text: 'دایرکت',
          style: {
              cssClass: 'apexcharts-title'
          }
      },
      subtitle: {
          floating: true,
          align: 'left', // تنظیم درصد به سمت چپ
          offsetX: 5, // فاصله 5 پیکسل از سمت چپ
          offsetY: 0,
          text: '44%',
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
          categories: ['دایرکت'],
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
  
  var chartProgress1 = new ApexCharts(document.querySelector('#direct'), optionsProgress1);
  chartProgress1.render();
  
  





	// chart 7

  var optionsProgress2 = {
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
        name: 'جستجو اورگانیک',
        data: [80]
    }],
    title: {
        floating: true,
        align: 'right', // تنظیم متن به سمت راست
        offsetX: -82, // فاصله 30 پیکسل از سمت راست
        offsetY: 5,
        text: 'جستجو اورگانیک',
        style: {
            cssClass: 'apexcharts-title'
        }
    },
    subtitle: {
        floating: true,
        align: 'left', // تنظیم درصد به سمت چپ
        offsetX: 5, // فاصله 5 پیکسل از سمت چپ
        offsetY: 0,
        text: '80%',
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
        categories: ['جستجو اورگانیک'],
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

var chartProgress2 = new ApexCharts(document.querySelector('#organic-search'), optionsProgress2);
chartProgress2.render();





// chart 8

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

var chartProgress3 = new ApexCharts(document.querySelector('#referral'), optionsProgress3);
chartProgress3.render();

	
	
	
	
	// chart 9

  var optionsProgress4 = {
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
        name: 'شبکه اجتمایی',
        data: [63]
    }],
    title: {
        floating: true,
        align: 'right', // تنظیم متن به سمت راست
        offsetX: -69, // فاصله 30 پیکسل از سمت راست
        offsetY: 5,
        text: 'شبکه اجتمایی',
        style: {
            cssClass: 'apexcharts-title'
        }
    },
    subtitle: {
        floating: true,
        align: 'left', // تنظیم درصد به سمت چپ
        offsetX: 5, // فاصله 5 پیکسل از سمت چپ
        offsetY: 0,
        text: '63%',
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
        categories: ['شبکه اجتمایی'],
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

var chartProgress4 = new ApexCharts(document.querySelector('#social'), optionsProgress4);
chartProgress4.render();




    
   // chart 10

    var options = {
      chart: {
        height: 270,
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
            size: '85%',
            background: 'transparent',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: false,
              top: 3,
              left: 0,
              blur: 4,
              color: 'rgba(255, 255, 255, 0.12)',
              opacity: 0.65
            }
          },
          track: {
            background: 'rgba(255, 255, 255, 0.12)',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: -3,
              left: 0,
              blur: 4,
			  color: 'rgba(255, 255, 255, 0.12)',
              opacity: 0.65
            }
          },

          dataLabels: { 
            showOn: 'always',
            name: {
              offsetY: -5,
              show: false,
              color: '#fff',
              fontSize: '14px'
            },
            value: {
              formatter: function (val) {
						return val + "%";
					},
              color: '#fff',
              fontSize: '35px',
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
      series: [64],
      stroke: {
        lineCap: 'round',
        //dashArray: 4
      },
      labels: ['نرخ باز شدن خبرنامه'],

    }

    var chart = new ApexCharts(
      document.querySelector("#newsletter-open-rate"),
      options
    );

    chart.render();

		
	// chart 11


	var options = {
      chart: {
        height: 270,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
         //startAngle: -135,
         // endAngle: 225,
           hollow: {
            margin: 0,
            size: '85%',
            background: 'transparent',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: false,
              top: 3,
              left: 0,
              blur: 4,
              color: 'rgba(255, 255, 255, 0.12)',
              opacity: 0.65
            }
          },
          track: {
            background: 'rgba(255, 255, 255, 0.12)',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: -3,
              left: 0,
              blur: 4,
			  color: 'rgba(255, 255, 255, 0.12)',
              opacity: 0.65
            }
          },

          dataLabels: { 
            showOn: 'always',
            name: {
              offsetY: -5,
              show: false,
              color: '#fff',
              fontSize: '14px'
            },
            value: {
              formatter: function (val) {
						return val + "%";
					},
              color: '#fff',
              fontSize: '35px',
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
      labels: ['نرخ کلیک'],

    }

    var chart = new ApexCharts(
      document.querySelector("#click-through-rate"),
      options
    );

    chart.render();	











    });