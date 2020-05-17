//Header slider
var slideIndex = 1;

function slideNP(n) {
	showSlider(slideIndex += n);
}

function showSlider(n) {
	var slides = document.getElementsByClassName('mySlides'),
		i;

	if (n > slides.length) slideIndex = 1;
	if (n < 1) slideIndex = slides.length;

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';

}


// Logo
$(function () {
	$('.header_logo a').hover(function () {
		if (window.pageYOffset == 0) $('.header_logo a').css('top', '6px');
		else $('.header_logo a').css('top', '6px');
	}, function () {
		if (window.pageYOffset == 0) $('.header_logo a').css('top', '6px');
		else $('.header_logo a').css('top', '-20px');
	});


	window.onscroll = function () {
		var currentScrollpos = window.pageYOffset;
		if (0 < currentScrollpos) $('.header_logo a').css('top', '-20px');
		else $('.header_logo a').css('top', '6px');
	}






	$('.about_info-item .img_link').hover(function () {
		$('.about_info-item .img_link:hover').css('top', '-10px');
	}, function () {
		$('.about_info-item .img_link').css('top', '0');
	});





//Portfolio Filter
	var fActive = '';

	function filterTabs(tabs, n) {

		if (!ss(n).hasClass('clicked')) {
			$(ss(n)).addClass('clicked');
			if (fActive != tabs) {
				$('.tabs_content li').filter('.' + tabs).show(400);
				$('.tabs_content li').filter(':not(.' + tabs + ')').hide(400);
				fActive = tabs;
				$('.tabs li').not(ss(n)).removeClass('clicked');
			}
		} else {
			fActive = '';
			$('.tabs li').removeClass('clicked');
			$('.tabs_content li').show(400);
			$('.tabs_content li:nth-child(n+9):nth-child(-n+10)').hide();
		}
	}

	function ss(n) {
		return $('.tabs li:nth-child(' + n + ')');
	}


	ss(1).on('click', function () {
		filterTabs('design', 1)
	});
	ss(2).on('click', function () {
		filterTabs('logo', 2)
	});
	ss(3).on('click', function () {
		filterTabs('photography', 3)
	});
	ss(4).on('click', function () {
		filterTabs('poster', 4)
	});
	ss(5).on('click', function () {
		filterTabs('resources', 5)
	});
	ss(6).on('click', function () {
		filterTabs('retro', 6)
	});
	ss(7).on('click', function () {
		filterTabs('t-shirts', 7)
	});
	ss(8).on('click', function () {
		filterTabs('videos', 8)
	});




//Portfolio modal slider galleries
	$('.tabs_content ul .galleries').on('click', function () {
		$('.galleries_modal').css('display', 'block');
	});
	$('.galleries_modal	.close').on('click', function() {
		$('.galleries_modal').css('display', 'none');
	});

	var currentImgs = parseInt($('.galleries_img').data('current'));
	var imgs = $('.galleries_img');
	$('.galleries_button .right').on('click', function () {
		$(imgs).css('display', 'none');
		if (currentImgs < imgs.length - 1) {
			currentImgs++;
		} else {
			currentImgs = 0;
		}

		$($(imgs)[currentImgs]).show();
	});
	
	$('.galleries_button .left').on('click', function () {
		$(imgs).css('display', 'none');
		if (currentImgs <= 0) {
			currentImgs = imgs.length-1;
		} else {
			currentImgs --;
		}

		$($(imgs)[currentImgs]).show();
	});


	
	//Плавная прокрутка
	$('.header_links li a:nth-child(1)').on('click', function() {
		var elementClick = $(this).attr('href');
		var destination = $(elementClick).offset().top-130;
		$('html, body').animate({scrollTop: destination}, 600);
		return false;
	})






})
