$(document).ready(function(){
    $(".gnb li").mouseover(function(){
        $(".sub_menu").stop().slideDown();
        $(".gnb_bg").stop().slideDown();
    })
    $(".gnb li").mouseleave(function(){
        $(".sub_menu").stop().slideUp();
        $(".gnb_bg").stop().slideUp();
    })

    var num = 1
    setInterval(function(){

        if(num < 3){
            $("#mainSlider ul").animate({
                marginLeft : -1200 * num
            })
            num++
        } else if(num == 3){
            $("#mainSlider ul").animate({
                marginLeft : 0
            })
            num = 1
        }   
    }, 3000)
    
    $("#popup1").click(function(){
        $("#popup").fadeIn();
        return false
    });
    
});


var closeBtn = document.getElementsByClassName("close")

for(var i = 0; i < closeBtn.length; i++){
    closeBtn[i].addEventListener("click", function(){
        var popup = document.getElementById("popup");
        popup.style.display = "none"
    })
}
