$(document).ready(function(){
    $(".gnb ul > li").mouseover(function(){
        $(this).find(".sub_gnb").stop().slideDown()
    })
    $(".gnb ul > li").mouseleave(function(){
        $(this).find(".sub_gnb").stop().slideUp()
    })

    $("#tab1").click(function(){
        $("#tab2").removeClass("active")
        $(this).removeClass("active");
        $(this).addClass("active");
        $(this).parent().siblings().eq(2).removeClass("active")
        $(this).parent().siblings().eq(1).addClass("active")
    })
    $("#tab2").click(function(){
        $("#tab1").removeClass("active")
        $(this).removeClass("active");
        $(this).addClass("active");
        $(this).parent().siblings().eq(1).removeClass("active")
        $(this).parent().siblings().eq(2).addClass("active")
    })
    
    var curruntIndex = 0

    $("#mainSlider li").fadeOut(0);
    $("#mainSlider li").eq(curruntIndex).fadeIn(0);

    setInterval(function(){
        if(curruntIndex < 2){
            curruntIndex++
        } else {
            curruntIndex = 0
        }
        $("#mainSlider li").fadeOut(1000);
        $("#mainSlider li").eq(curruntIndex).fadeIn(1000);
    }, 3000)
})

var popOpen = document.getElementById("popOpen")
var popUp = document.getElementById("popup")
var closeBtn = document.getElementById("close")

popOpen.addEventListener("click", function(){
    popUp.style.display = "block";
}, false)

closeBtn.addEventListener("click", function(){
    popUp.style.display = "none"
})