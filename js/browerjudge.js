(function(){ 
    let browser={ 
        versions:function(){ 
        let u = navigator.userAgent
        return { 
            trident: u.indexOf('Trident') > -1, //IE
            presto: u.indexOf('Presto') > -1, //opera
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //移动终端 
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android/uc
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //iPhone/QQHD
            iPad: u.indexOf('iPad') > -1, //iPad 
            webApp: u.indexOf('Safari') === -1 //web应该程序，没有头部与底部 
            }
        }()
    }
    if(browser.versions.android||browser.versions.iPhone||browser.versions.iPad){
        document.location.assign("http://m.nupt-sacc.com")
    }
}())
