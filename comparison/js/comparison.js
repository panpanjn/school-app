var $window = $(window);
	revealOnScroll();
	$window.on("scroll", revealOnScroll);

	function revealOnScroll() {
		var rings = $(".ring-chart");

		var data = new Array();

		rings.each(function() {
			var chart = $(this);
			var win_height_padded = $window.height() * 1.1;
			var scrolled = $window.scrollTop();
			var offsetTop = chart.parents(".chart-wrap").offset().top;
			var offsetBottom =
				chart.parents(".chart-wrap").offset().top +
				parseInt(chart.parents(".chart-wrap").outerHeight());
			/* Clipping */
			var width = chart.width();
			var height = chart.height();
			var clipmask =
				"rect(0," + width + "px," + height + "px," + width / 2 + "px)";
			var clipfill = "rect(0," + width / 2 + "px," + height + "px,0)";
			chart.find(".mask").css({
				clip: clipmask
			});
			chart
				.find(".mask")
				.find(".fill")
				.css({
					clip: clipfill
				});

			if (scrolled + win_height_padded > offsetTop) {
				/* Percentage */
				var per = parseInt(chart.attr("data-progress"));
				var csshalf = {
					"-webkit-transform": "rotate(" + 180 * per / 100 + "deg)",
					transform: "rotate(" + 180 * per / 100 + "deg)"
				};
				var cssfull = {
					"-webkit-transform": "rotate(" + 360 * per / 100 + "deg)",
					transform: "rotate(" + 360 * per / 100 + "deg)"
				};
				setTimeout(function() {
					chart.find(".mask.full").css(csshalf);
					chart.find(".fill").css(csshalf);
					chart.find(".fix").css(cssfull);
				}, 500);
			} 
			else if (scrolled + win_height_padded < offsetTop) {
				var cssempty = {
					"-webkit-transform": "rotate(0deg)",
					transform: "rotate(0deg)"
				};
				setTimeout(function() {
					chart.find(".mask.full").css(cssempty);
					chart.find(".fill").css(cssempty);
					chart.find(".fix").css(cssempty);
				}, 0);
			}
		});
	};

// get json data
	$.getJSON('js/fee.json', function(jd){
		var output = "";
		
		for (var i in jd) {
			output += 
				"<div class='chart-legend'>" + 
				"<div id='list1'>" + 
				"<p class='datastage1'>"+
					"<strong>" + jd[i].title1 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage2'>"+
					"<strong>" + jd[i].title2 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage3'>"+
					"<strong>" + jd[i].title3 + "</strong>"+
		    	"</p>" +
		    	"</div>" +
		    	"</div>"
		};
		$("#list1").html(output);
	});
	
	$.getJSON('js/acceptance.json', function(jd){
		var output = "";
		
		for (var i in jd) {
			output += 
				"<div class='chart-legend'>" + 
				"<div id='list2'>" +
				"<p class='datastage4'>"+
					"<strong>" + jd[i].title4 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage5'>"+
					"<strong>" + jd[i].title5 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage6'>"+
					"<strong>" + jd[i].title6 + "</strong>"+
		    	"</p>" +
		    	"</div>" +
		    	"</div>"
		};
		$("#list2").html(output);
	});

	$.getJSON('js/graduation-rate.json', function(jd){
		var output = "";
		
		for (var i in jd) {
			output += 
				"<div class='chart-legend'>" + 
				"<div id='list3'>" +
				"<p class='datastage7'>"+
					"<strong>" + jd[i].title7 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage8'>"+
					"<strong>" + jd[i].title8 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage9'>"+
					"<strong>" + jd[i].title9 + "</strong>"+
		    	"</p>" +
		    	"</div>" +
		    	"</div>"
		};
		$("#list3").html(output);
	});
	
	$.getJSON('js/need.json', function(jd){
		var output = "";
		
		for (var i in jd) {
			output += 
				"<div class='chart-legend'>" + 
				"<div id='list4'>" +
				"<p class='datastage10'>"+
					"<strong>" + jd[i].title10 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage11'>"+
					"<strong>" + jd[i].title11 + "</strong>"+
		    	"</p>"+ 
				"<p class='datastage12'>"+
					"<strong>" + jd[i].title12 + "</strong>"+
		    	"</p>" +
		    	"</div>" +
		    	"</div>"
		};
		$("#list4").html(output);
	});





















