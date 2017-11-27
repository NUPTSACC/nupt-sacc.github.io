var myScroll;

	function loaded () {
		myScroll = new IScroll('#wrapper',
			{
				scrollX: true,
				scrollY: false,
				eventPassthrough: true,
				preventDefault: false,
				momentum: false,
				snap: "li",
				snapSpeed: 600,
				keyBindings: true,
				indicators: {
					el: document.getElementById('detail'),
					resize: false,
					vScrollbar: false,
					listenY: false,
					listenX: true,
					ignoreBoundaries: true
				}
			});
			myScroll.on('scrollEnd',function(){
				$("#history li a").removeClass('active');
				$("#history li a").eq(myScroll.currentPage.pageX).addClass('active');
			});
	}

	function pC(index) {
		if(index > myScroll.currentPage.pageX) {
			myScroll.next();
		}else if(index < myScroll.currentPage.pageX) {
			myScroll.prev();
		}
	}

$(function(){
	loaded ();
	$('[data-toggle="popover"]').popover();
	$(".menu-btn").on('click',function(){
		$(".strunk-menu").slideToggle("slow");
	});

	$(".more").on('click',function(){
		$(".section").css('display','block');
		$(".more").css('display','none');
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 800)
			$(".to-top").fadeIn(1000);
		else
			$(".to-top").fadeOut(1000);
	});

	$(".to-top").on('click',function(){
		$('body,html').animate({scrollTop:0},1000);
	});

	$(".container-fluid").on('click',function(){
		window.open("https://register.nuptsacc.com");
	});

	$(".prevent").on('click',function(event){
		event.stopPropagation();
	});
})
