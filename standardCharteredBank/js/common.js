
/* 서브 테이블 탭 스크립트 */
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


