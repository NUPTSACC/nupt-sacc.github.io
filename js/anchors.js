$(function() {    
    $(".main #nav ul li a,buttonone,buttontwo").click(function() {    
        $("html, body").animate({    
            scrollTop: $('page'+$(this).attr("href")).offset().top + "px"    
        }, 500);   
        return false;    
    }); 
});
function tangyongquanover(){
  var item1=document.getElementById("jianjie1");
  item1.style.display='block';
}
function tangyongquanout(){
  var item1=document.getElementById("jianjie1");
  item1.style.display='none';
}
function fuhanfengover(){
  var item1=document.getElementById("jianjie2");
  item1.style.display='block';
}
function fuhanfengout(){
  var item1=document.getElementById("jianjie2");
  item1.style.display='none';
}
function dengliangfuover(){
  var item1=document.getElementById("jianjie3");
  item1.style.display='block';
}
function dengliangfuout(){
  var item1=document.getElementById("jianjie3");
  item1.style.display='none';
}
function luoyanjiaoover(){
  var item1=document.getElementById("jianjie4");
  item1.style.display='block';
}
function luoyanjiaoout(){
  var item1=document.getElementById("jianjie4");
  item1.style.display='none';
}
function cuiminghaoover(){
  var item1=document.getElementById("jianjie5");
  item1.style.display='block';
}
function cuiminghaoout(){
  var item1=document.getElementById("jianjie5");
  item1.style.display='none';
}
function guhaifengover(){
  var item1=document.getElementById("jianjie6");
  item1.style.display='block';
}
function guhaifengout(){
  var item1=document.getElementById("jianjie6");
  item1.style.display='none';
}
function chengdanniover(){
  var item1=document.getElementById("jianjie7");
  item1.style.display='block';
}
function chengdanniout(){
  var item1=document.getElementById("jianjie7");
  item1.style.display='none';
}
function qushengover(){
  var item1=document.getElementById("jianjie8");
  item1.style.display='block';
}
function qushengout(){
  var item1=document.getElementById("jianjie8");
  item1.style.display='none';
}
function taozeover(){
  var item1=document.getElementById("jianjie9");
  item1.style.display='block';
}
function taozeout(){
  var item1=document.getElementById("jianjie9");
  item1.style.display='none';
}