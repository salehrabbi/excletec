		$(document).scroll(function (e) {
		    var scrollTop = $(document).scrollTop();
		    if (scrollTop > 0) {
		        console.log(scrollTop);
		        $('.main-header').removeClass('navbar-static-top').addClass('navbar-fixed-top');
		    } else {
		        $('.main-header').removeClass('navbar-fixed-top').addClass('navbar-static-top');
		    }
		});



		$(".career-content .show-more").click(function () {
		    $(this).parent().addClass("active")
		});
