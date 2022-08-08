"use strict";
! function(NioApp, $) {
    var enrolement = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dataUnit: "USD",
        stacked: !0,
        datasets: [{
            label: "Sales Revenue",
            color: [NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), NioApp.hexRGB("#6576ff", .2), "#6576ff"],
            data: [11e3, 8e3, 12500, 5500, 9500, 14299, 11e3, 8e3, 12500, 5500, 9500, 14299]
        }]
    };

    function enrolementChart(selector, set_data) {
        var $selector = $(selector || ".student-enrole");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, _d_legend = void 0 !== _get_data.legend && _get_data.legend, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                data: _get_data.datasets[i].data,
                backgroundColor: _get_data.datasets[i].color,
                borderWidth: 2,
                borderColor: "transparent",
                hoverBorderColor: "transparent",
                borderSkipped: "bottom",
                barPercentage: .7,
                categoryPercentage: .7
            });
            var chart = new Chart(selectCanvas, {
                type: "bar",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: _get_data.legend || !1,
                        labels: {
                            boxWidth: 30,
                            padding: 20,
                            fontColor: "#6783b8"
                        }
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return !1
                            },
                            label: function(a, t) {
                                return t.labels[a.index] + " " + t.datasets[a.datasetIndex].data[a.index]
                            }
                        },
                        backgroundColor: "#eff6ff",
                        titleFontSize: 11,
                        titleFontColor: "#6783b8",
                        titleMarginBottom: 4,
                        bodyFontColor: "#9eaecf",
                        bodyFontSize: 10,
                        bodySpacing: 3,
                        yPadding: 8,
                        xPadding: 8,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            stacked: _get_data.stacked || !1,
                            ticks: {
                                beginAtZero: !0
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            stacked: _get_data.stacked || !1,
                            ticks: {
                                reverse: NioApp.State.isRTL
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        enrolementChart()
    });
    var courseProgress = {
        labels: ["Web Development", "Mobile Application", "Graphics Design", "Database", "Marketing", "Machine Learning", "Data Science"],
        stacked: !0,
        datasets: [{
            label: "Weekly Enrole",
            color: ["#f98c45", "#6baafe", "#8feac5", "#6b79c8", "#79f1dc", "#FF65B6", "#6A29FF"],
            data: [1740, 2500, 1820, 1200, 1600, 2500, 2250, 3410]
        }, {
            label: "Monthly Enrole",
            color: [NioApp.hexRGB("#f98c45", .2), NioApp.hexRGB("#6baafe", .4), NioApp.hexRGB("#8feac5", .4), NioApp.hexRGB("#6b79c8", .4), NioApp.hexRGB("#79f1dc", .4), NioApp.hexRGB("#FF65B6", .4), NioApp.hexRGB("#6A29FF", .4)],
            data: [2420, 1820, 3e3, 5e3, 2450, 1820, 2e3, 1890]
        }]
    };

    function courseProgressChart(selector, set_data) {
        var $selector = $(selector || ".course-progress-chart");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, _d_legend = void 0 !== _get_data.legend && _get_data.legend, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                data: _get_data.datasets[i].data,
                backgroundColor: _get_data.datasets[i].color,
                borderWidth: 2,
                borderColor: "transparent",
                hoverBorderColor: "transparent",
                borderSkipped: "bottom",
                barThickness: "8",
                categoryPercentage: .5,
                barPercentage: 1
            });
            var chart = new Chart(selectCanvas, {
                type: "horizontalBar",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: _get_data.legend || !1,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth: 30,
                            padding: 20,
                            fontColor: "#6783b8"
                        }
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return t.labels[a[0].index]
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index] + " " + t.datasets[a.datasetIndex].label
                            }
                        },
                        backgroundColor: "#eff6ff",
                        titleFontSize: 13,
                        titleFontColor: "#6783b8",
                        titleMarginBottom: 6,
                        bodyFontColor: "#9eaecf",
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            stacked: _get_data.stacked || !1,
                            ticks: {
                                beginAtZero: !0,
                                padding: 0
                            },
                            gridLines: {
                                color: NioApp.hexRGB("#526484", .2),
                                tickMarkLength: 0,
                                zeroLineColor: NioApp.hexRGB("#526484", .2)
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            stacked: _get_data.stacked || !1,
                            ticks: {
                                fontSize: 9,
                                fontColor: "#9eaecf",
                                source: "auto",
                                padding: 0,
                                reverse: NioApp.State.isRTL
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength: 0,
                                zeroLineColor: "transparent"
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        courseProgressChart()
    });
    var analyticAuData = {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit: "People",
        lineTension: .1,
        datasets: [{
            label: "Active Users",
            color: "#9cabff",
            background: "#9cabff",
            data: [1110, 1220, 1310, 980, 900, 770, 1060, 830, 690, 730, 790, 950, 1100, 800, 1250, 850, 950, 450, 900, 1e3, 1200, 1250, 900, 950, 1300, 1200, 1250, 650, 950, 750]
        }]
    };

    function analyticsAu(selector, set_data) {
        var $selector = $(selector || ".analytics-au-chart");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                tension: _get_data.lineTension,
                backgroundColor: _get_data.datasets[i].background,
                borderWidth: 2,
                borderColor: _get_data.datasets[i].color,
                data: _get_data.datasets[i].data,
                barPercentage: .7,
                categoryPercentage: .7
            });
            var chart = new Chart(selectCanvas, {
                type: "bar",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: _get_data.legend || !1,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth: 12,
                            padding: 20,
                            fontColor: "#6783b8"
                        }
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return !1
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index]
                            }
                        },
                        backgroundColor: "#eff6ff",
                        titleFontSize: 9,
                        titleFontColor: "#6783b8",
                        titleMarginBottom: 6,
                        bodyFontColor: "#9eaecf",
                        bodyFontSize: 9,
                        bodySpacing: 4,
                        yPadding: 6,
                        xPadding: 6,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !0,
                            position: NioApp.State.isRTL ? "right" : "left",
                            ticks: {
                                beginAtZero: !1,
                                fontSize: 12,
                                fontColor: "#9eaecf",
                                padding: 0,
                                display: !1,
                                stepSize: 300
                            },
                            gridLines: {
                                color: NioApp.hexRGB("#526484", .2),
                                tickMarkLength: 0,
                                zeroLineColor: NioApp.hexRGB("#526484", .2)
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            ticks: {
                                fontSize: 12,
                                fontColor: "#9eaecf",
                                source: "auto",
                                padding: 0,
                                reverse: NioApp.State.isRTL
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength: 0,
                                zeroLineColor: "transparent",
                                offsetGridLines: !0
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        analyticsAu()
    });
    var totalSells = {
            labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
            dataUnit: "Orders",
            lineTension: .3,
            datasets: [{
                label: "Courses",
                color: "#6A29FF",
                background: NioApp.hexRGB("#6A29FF", .25),
                data: [85, 125, 105, 115, 130, 106, 141, 110, 95, 120, 111, 105, 113, 107, 122, 100, 95, 110, 120, 107, 100, 105, 123, 115, 110, 117, 125, 75, 95, 101]
            }]
        },
        weeklySells = {
            labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
            dataUnit: "Students",
            lineTension: .3,
            datasets: [{
                label: "Students",
                color: "#4258FF",
                background: NioApp.hexRGB("#4258FF", .25),
                data: [92, 105, 125, 85, 110, 106, 131, 105, 110, 115, 135, 105, 120, 85, 122, 100, 125, 110, 120, 125, 85, 105, 123, 115, 90, 117, 125, 100, 95, 65]
            }]
        };

    function courseSellsChart(selector, set_data) {
        var $selector = $(selector || ".courseSells");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                label: _get_data.datasets[i].label,
                tension: _get_data.lineTension,
                backgroundColor: _get_data.datasets[i].background,
                borderWidth: 2,
                borderColor: _get_data.datasets[i].color,
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: _get_data.datasets[i].color,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 4,
                data: _get_data.datasets[i].data
            });
            var chart = new Chart(selectCanvas, {
                type: "line",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: _get_data.legend || !1,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth: 12,
                            padding: 20,
                            fontColor: "#6783b8"
                        }
                    },
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return t.labels[a[0].index]
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                            }
                        },
                        backgroundColor: "#1c2b46",
                        titleFontSize: 10,
                        titleFontColor: "#fff",
                        titleMarginBottom: 4,
                        bodyFontColor: "#fff",
                        bodyFontSize: 10,
                        bodySpacing: 4,
                        yPadding: 6,
                        xPadding: 6,
                        footerMarginTop: 0,
                        displayColors: !1
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                beginAtZero: !0,
                                fontSize: 12,
                                fontColor: "#9eaecf",
                                padding: 0
                            },
                            gridLines: {
                                color: NioApp.hexRGB("#526484", .2),
                                tickMarkLength: 0,
                                zeroLineColor: NioApp.hexRGB("#526484", .2)
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            ticks: {
                                fontSize: 12,
                                fontColor: "#9eaecf",
                                source: "auto",
                                padding: 0,
                                reverse: NioApp.State.isRTL
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength: 0,
                                zeroLineColor: NioApp.hexRGB("#526484", .2),
                                offsetGridLines: !0
                            }
                        }]
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        courseSellsChart()
    });
    var TrafficChannelDoughnutData = {
        labels: ["Organic Search", "Social Media", "Referrals", "Others"],
        dataUnit: "People",
        legend: !1,
        datasets: [{
            borderColor: "#fff",
            background: ["#9d72ff", "#b8acff", "#ffa9ce", "#f9db7b"],
            data: [4305, 859, 482, 138]
        }]
    };

    function analyticsDoughnut(selector, set_data) {
        var $selector = $(selector || ".analytics-doughnut");
        $selector.each(function() {
            for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
                backgroundColor: _get_data.datasets[i].background,
                borderWidth: 2,
                borderColor: _get_data.datasets[i].borderColor,
                hoverBorderColor: _get_data.datasets[i].borderColor,
                data: _get_data.datasets[i].data
            });
            var chart = new Chart(selectCanvas, {
                type: "doughnut",
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data
                },
                options: {
                    legend: {
                        display: _get_data.legend || !1,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth: 12,
                            padding: 20,
                            fontColor: "#6783b8"
                        }
                    },
                    rotation: -1.5,
                    cutoutPercentage: 70,
                    maintainAspectRatio: !1,
                    tooltips: {
                        enabled: !0,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(a, t) {
                                return t.labels[a[0].index]
                            },
                            label: function(a, t) {
                                return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                            }
                        },
                        backgroundColor: "#1c2b46",
                        titleFontSize: 13,
                        titleFontColor: "#fff",
                        titleMarginBottom: 6,
                        bodyFontColor: "#fff",
                        bodyFontSize: 12,
                        bodySpacing: 4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: !1
                    }
                }
            })
        })
    }
    NioApp.coms.docReady.push(function() {
        analyticsDoughnut()
    })
}(NioApp, jQuery);
var totalSales = {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit: "Sales",
        lineTension: .3,
        datasets: [{
            label: "Sales",
            color: "#9d72ff",
            background: NioApp.hexRGB("#9d72ff", .25),
            data: [130, 105, 125, 115, 110, 95, 131, 110, 115, 120, 111, 97, 113, 107, 122, 100, 85, 110, 130, 107, 90, 105, 123, 115, 100, 117, 125, 95, 137, 101]
        }]
    },
    totalOrders = {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit: "Orders",
        lineTension: .3,
        datasets: [{
            label: "Orders",
            color: "#7de1f8",
            background: NioApp.hexRGB("#7de1f8", .25),
            data: [85, 125, 105, 115, 130, 106, 141, 110, 95, 120, 111, 105, 113, 107, 122, 100, 95, 110, 120, 107, 100, 105, 123, 115, 110, 117, 125, 75, 95, 101]
        }]
    },
    activeStudents = {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit: "Students",
        lineTension: .3,
        datasets: [{
            label: "Students",
            color: "#7de1f8",
            background: NioApp.hexRGB("#7de1f8", .25),
            data: [85, 125, 105, 115, 130, 106, 141, 110, 95, 120, 111, 105, 113, 107, 122, 100, 95, 110, 120, 107, 100, 105, 123, 115, 110, 117, 125, 75, 95, 101]
        }]
    },
    newStudents = {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit: "Students",
        lineTension: .3,
        datasets: [{
            label: "Students",
            color: "#83bcff",
            background: NioApp.hexRGB("#83bcff", .25),
            data: [92, 105, 125, 85, 110, 106, 131, 105, 110, 115, 135, 105, 120, 85, 122, 100, 125, 110, 120, 125, 85, 105, 123, 115, 90, 117, 125, 100, 95, 65]
        }]
    },
    totalCustomers = {
        labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit: "Customers",
        lineTension: .3,
        datasets: [{
            label: "Customers",
            color: "#83bcff",
            background: NioApp.hexRGB("#83bcff", .25),
            data: [92, 105, 125, 85, 110, 106, 131, 105, 110, 115, 135, 105, 120, 85, 122, 100, 125, 110, 120, 125, 85, 105, 123, 115, 90, 117, 125, 100, 95, 65]
        }]
    };

function lmsLineS1(selector, set_data) {
    var $selector = selector ? $(selector) : $(".lms-line-chart-s1");
    $selector.each(function() {
        for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
            label: _get_data.datasets[i].label,
            tension: _get_data.lineTension,
            backgroundColor: _get_data.datasets[i].background,
            borderWidth: 2,
            borderColor: _get_data.datasets[i].color,
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: _get_data.datasets[i].color,
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 4,
            data: _get_data.datasets[i].data
        });
        var chart = new Chart(selectCanvas, {
            type: "line",
            data: {
                labels: _get_data.labels,
                datasets: chart_data
            },
            options: {
                legend: {
                    display: _get_data.legend || !1,
                    rtl: NioApp.State.isRTL,
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        fontColor: "#6783b8"
                    }
                },
                maintainAspectRatio: !1,
                tooltips: {
                    enabled: !0,
                    rtl: NioApp.State.isRTL,
                    callbacks: {
                        title: function(a, t) {
                            return t.labels[a[0].index]
                        },
                        label: function(a, t) {
                            return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                        }
                    },
                    backgroundColor: "#1c2b46",
                    titleFontSize: 10,
                    titleFontColor: "#fff",
                    titleMarginBottom: 4,
                    bodyFontColor: "#fff",
                    bodyFontSize: 10,
                    bodySpacing: 4,
                    yPadding: 6,
                    xPadding: 6,
                    footerMarginTop: 0,
                    displayColors: !1
                },
                scales: {
                    yAxes: [{
                        display: !1,
                        ticks: {
                            beginAtZero: !0,
                            fontSize: 12,
                            fontColor: "#9eaecf",
                            padding: 0
                        },
                        gridLines: {
                            color: NioApp.hexRGB("#526484", .2),
                            tickMarkLength: 0,
                            zeroLineColor: NioApp.hexRGB("#526484", .2)
                        }
                    }],
                    xAxes: [{
                        display: !1,
                        ticks: {
                            fontSize: 12,
                            fontColor: "#9eaecf",
                            source: "auto",
                            padding: 0,
                            reverse: NioApp.State.isRTL
                        },
                        gridLines: {
                            color: "transparent",
                            tickMarkLength: 0,
                            zeroLineColor: NioApp.hexRGB("#526484", .2),
                            offsetGridLines: !0
                        }
                    }]
                }
            }
        })
    })
}
NioApp.coms.docReady.push(function() {
    lmsLineS1()
});
var storeVisitors = {
    labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
    dataUnit: "People",
    lineTension: .1,
    datasets: [{
        label: "Current Month",
        color: "#9d72ff",
        dash: 0,
        background: "transparent",
        data: [4110, 4220, 4810, 5480, 4600, 5670, 6660, 4830, 5590, 5730, 4790, 4950, 5100, 5800, 5950, 5850, 5950, 4450, 4900, 8e3, 7200, 7250, 7900, 8950, 6300, 7200, 7250, 7650, 6950, 4750]
    }]
};

function lmsLineS4(selector, set_data) {
    var $selector = selector ? $(selector) : $(".lms-line-chart-s4");
    $selector.each(function() {
        for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
            label: _get_data.datasets[i].label,
            tension: _get_data.lineTension,
            backgroundColor: _get_data.datasets[i].background,
            borderWidth: 2,
            borderDash: _get_data.datasets[i].dash,
            borderColor: _get_data.datasets[i].color,
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: _get_data.datasets[i].color,
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 4,
            data: _get_data.datasets[i].data
        });
        var chart = new Chart(selectCanvas, {
            type: "line",
            data: {
                labels: _get_data.labels,
                datasets: chart_data
            },
            options: {
                legend: {
                    display: _get_data.legend || !1,
                    rtl: NioApp.State.isRTL,
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        fontColor: "#6783b8"
                    }
                },
                maintainAspectRatio: !1,
                tooltips: {
                    enabled: !0,
                    rtl: NioApp.State.isRTL,
                    callbacks: {
                        title: function(a, t) {
                            return t.labels[a[0].index]
                        },
                        label: function(a, t) {
                            return t.datasets[a.datasetIndex].data[a.index]
                        }
                    },
                    backgroundColor: "#1c2b46",
                    titleFontSize: 13,
                    titleFontColor: "#fff",
                    titleMarginBottom: 6,
                    bodyFontColor: "#fff",
                    bodyFontSize: 12,
                    bodySpacing: 4,
                    yPadding: 10,
                    xPadding: 10,
                    footerMarginTop: 0,
                    displayColors: !1
                },
                scales: {
                    yAxes: [{
                        display: !0,
                        stacked: _get_data.stacked || !1,
                        position: NioApp.State.isRTL ? "right" : "left",
                        ticks: {
                            beginAtZero: !0,
                            fontSize: 11,
                            fontColor: "#9eaecf",
                            padding: 10,
                            callback: function(a, t, e) {
                                return "$ " + a
                            },
                            min: 0,
                            stepSize: 3e3
                        },
                        gridLines: {
                            color: NioApp.hexRGB("#526484", .2),
                            tickMarkLength: 0,
                            zeroLineColor: NioApp.hexRGB("#526484", .2)
                        }
                    }],
                    xAxes: [{
                        display: !1,
                        stacked: _get_data.stacked || !1,
                        ticks: {
                            fontSize: 9,
                            fontColor: "#9eaecf",
                            source: "auto",
                            padding: 10,
                            reverse: NioApp.State.isRTL
                        },
                        gridLines: {
                            color: "transparent",
                            tickMarkLength: 0,
                            zeroLineColor: "transparent"
                        }
                    }]
                }
            }
        })
    })
}
NioApp.coms.docReady.push(function() {
    lmsLineS4()
});
var trafficSources = {
    labels: ["Organic Search", "Social Media", "Referrals", "Others"],
    dataUnit: "People",
    legend: !1,
    datasets: [{
        borderColor: "#fff",
        background: ["#b695ff", "#b8acff", "#ffa9ce", "#f9db7b"],
        data: [4305, 859, 482, 138]
    }]
};

function lmsDoughnutS1(selector, set_data) {
    var $selector = selector ? $(selector) : $(".lms-doughnut-s1");
    $selector.each(function() {
        for (var $self = $(this), _self_id = $self.attr("id"), _get_data = void 0 === set_data ? eval(_self_id) : set_data, selectCanvas = document.getElementById(_self_id).getContext("2d"), chart_data = [], i = 0; i < _get_data.datasets.length; i++) chart_data.push({
            backgroundColor: _get_data.datasets[i].background,
            borderWidth: 2,
            borderColor: _get_data.datasets[i].borderColor,
            hoverBorderColor: _get_data.datasets[i].borderColor,
            data: _get_data.datasets[i].data
        });
        var chart = new Chart(selectCanvas, {
            type: "doughnut",
            data: {
                labels: _get_data.labels,
                datasets: chart_data
            },
            options: {
                legend: {
                    display: _get_data.legend || !1,
                    rtl: NioApp.State.isRTL,
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        fontColor: "#6783b8"
                    }
                },
                rotation: -1.5,
                cutoutPercentage: 70,
                maintainAspectRatio: !1,
                tooltips: {
                    enabled: !0,
                    rtl: NioApp.State.isRTL,
                    callbacks: {
                        title: function(a, t) {
                            return t.labels[a[0].index]
                        },
                        label: function(a, t) {
                            return t.datasets[a.datasetIndex].data[a.index] + " " + _get_data.dataUnit
                        }
                    },
                    backgroundColor: "#1c2b46",
                    titleFontSize: 13,
                    titleFontColor: "#fff",
                    titleMarginBottom: 6,
                    bodyFontColor: "#fff",
                    bodyFontSize: 12,
                    bodySpacing: 4,
                    yPadding: 10,
                    xPadding: 10,
                    footerMarginTop: 0,
                    displayColors: !1
                }
            }
        })
    })
}
NioApp.coms.docReady.push(function() {
    lmsDoughnutS1()
});