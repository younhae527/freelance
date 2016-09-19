/* 메인하단 배너 슬라이드 */
$(document).ready(function(){
  $('.banner_slider').bxSlider({
    auto: false,
    displaySlideQty: 1,
    moveSlideQty: 1,
    nextText:'',
    prevText:'',
    pager: false
  });
});

/* 서브 테이블 탭 게시판 탭 스크립트 */
$(function(){
	$(".tabTitle00 li").eq(0).find("a").addClass("on");
	$(".tabConAll00 .tab00").eq(0).show();
	$(".tabTitle00 li").click(function(){
		var _tab = $(this).find("a").attr("href");
		$(".tabConAll00 .tab00" + _tab).show().siblings().hide();
		$(this).find("a").addClass("on");
		$(this).siblings().find("a").removeClass("on");
	});
});

/* 서브 컨텐츠 레이어팝업 */
$(function(){
	$(".mainMenu01").click(function(){
		$(".smarLearningPop").addClass("on");	
        $("#dim").css("display","block");
	});
	$(".smarLearningPopX").click(function(){
		$(".smarLearningPop").removeClass("on");	
        $("#dim").css("display","none");
	});

	//사이트맵
	$(".siteMap").hide();
	$(".siteMaponBtn").click(function(){
		$(".siteMap").show();	
        $("#dim").css("display","block");
	});

	$(".siteMapoffBtn").click(function(){
		$(".siteMap").hide();	
        $("#dim").css("display","none");
	});


    $(".layerview").css("display","none");
    $(".listTitle").click(function(){
        $(this).siblings(".layerview").css("display","block");
        $("#dim").css("display","block");
    });
    $(".closeLayer").click(function(){
        $(".layerview").css("display","none");
        $("#dim").css("display","none");
    });
});

/* 서브 컨텐츠 탭 스크립트 */
$(document).ready(function(){
	$(".subTabContWrap > div").hide();
	$(".subTabCont00").show();

	$(".subTab li").click(function(event) {
		$(".tab00").css("display","block");
		$(".subTabContWrap > div").hide();
		var i = $(this).index();

		console.log(i);  // 0번째
		console.log($(".subTabCont0"+i));

		$(".subTabCont0"+i).show();
		

		//탭 불들어오기
		$(".subTab li").removeClass("on");
		$(this).addClass("on");
	});
});



