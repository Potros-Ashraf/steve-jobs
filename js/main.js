$(document).ready(function(){

    $("header").width($(window).width());
    $("header").height($(window).height());
    
    $(window).resize(function(){

        $("header").height($(window).height());
        $("header").width($(window).width());

    });
    $("header .main").css({
        marginTop:($(window).height()-$(".main").height())/2.5
    });
    $("header li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    $("header li a").click(function(){
        $("html , body").animate({
            scrollTop:$("#"+$(this).data("value")).offset().top
        },2000);
    });
    $("header button").click(function(){
        $("html , body").animate({
            scrollTop:$("#about").offset().top
        },1000);
    });
});