let IMGQQ=document.getElementById("QQ_img")
let IMGWECHAT=document.getElementById("wechat_img")
let QQ=document.getElementById("QQ")
let WECHAT=document.getElementById("wechat")

WECHAT.addEventListener('click',function(){
    alert('非手机浏览器，请扫描二维码')
},false)
QQ.addEventListener('mouseover',function(){
    IMGWECHAT.style.cssText = "display:none;"
    IMGQQ.style.cssText = "display:block;"
})
WECHAT.addEventListener('mouseover',function(){
    IMGWECHAT.style.cssText = "display:block;"
    IMGQQ.style.cssText = "display:none;"
})