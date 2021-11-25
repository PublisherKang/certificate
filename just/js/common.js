$(document).ready(function(){
    $(".main_menu > li").mouseover(function(){
        $(".sub_gnb").stop().slideDown();
    });
    $(".main_menu > li").mouseleave(function(){
        $(".sub_gnb").stop().slideUp();
    });
    
    $(".notice > a, .gallery > a").click(function(){
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        return false;
    })
    
    
    num = 1;
    setInterval(function(){
        if (num < 3) {
            $('.slideIn ul').animate({
                marginTop: -300 * num
            });
            num ++;
        } else if (num == 3){
            $('.slideIn ul').animate({
                marginTop: 0
            })
            num = 1;
        }
    },3000);

})