$(document).ready(init);

function init() {
$(".div_1").click(submit01);
    
function submit01 (){
    
    $(".A1").attr("src","img/after01.jpg")
    
    setTimeout(function(){
        $(".A1").attr("src","img/before01.jpg")
        }, 5000);}
    
$(".div_2").click(submit02);
    
function submit02 (){
    
    $(".A2").attr("src","img/after02.jpg")
    
    setTimeout(function(){
        $(".A2").attr("src","img/before02.jpg")
        }, 5000);}
    
$(".div_3").click(submit03);
    
         function submit03 (){ $(".A3").attr("src","img/after03.jpg")
    
    setTimeout(function(){
        $(".A3").attr("src","img/before03.jpg")
        }, 5000)
    
}
    
    
}

