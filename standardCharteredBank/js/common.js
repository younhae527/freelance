
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

$(function(){
    $(".tableType01 td .layerview").css("display","none");
    $(".tableType01 td a").click(function(){
        $(this).siblings(".layerview").css("display","block");
        $("#dim").css("display","block");
    });
    $(".closeLayer").click(function(){
        $(".layerview").css("display","none");
        $("#dim").css("display","none");
    });
});

