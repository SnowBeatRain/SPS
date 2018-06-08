// 唤起app
var browser = {
  versions: function () {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1,
      /*IE内核*/
      presto: u.indexOf('Presto') > -1,
      /*opera内核*/
      webKit: u.indexOf('AppleWebKit') > -1,
      /*苹果、谷歌内核*/
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
      /*火狐内核*/
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      /*是否为移动终端*/
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      /*ios终端*/
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      /*android终端或者uc浏览器*/
      iPhone: u.indexOf('iPhone') > -1,
      /*是否为iPhone或者QQHD浏览器*/
      iPad: u.indexOf('iPad') > -1,
      /*是否iPad*/
      webApp: u.indexOf('Safari') == -1,
      /*是否web应该程序，没有头部与底部*/
      souyue: u.indexOf('souyue') > -1,
      superapp: u.indexOf('superapp') > -1,
      weixin: u.toLowerCase().indexOf('micromessenger') > -1,
      Safari: u.indexOf('Safari') > -1,
      qq: u.toLowerCase().indexOf('MQQBrowser') > -1
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
window.startApp = function () { //启动APP
  if (browser.versions.weixin) { //微信中
    // alert("微信中不支持打开，请更换浏览器");
    if (browser.versions.ios) {　　　　 //IOS系统，直接去itunes中，既可以下载也可以打开
      // window.location.href = "JiuTuCar://";
      setTimeout(function () {
        window.location.href = "http://sj.qq.com/myapp/detail.htm?apkName=com.nbhero.jiebo";
      }, 0)
    } else if (browser.versions.android) { //android系统，通过定时器的方式，判断是否安装有APP
      var hasApp = true,
        t = 1000;
      setTimeout(function () { //没有安装APP则跳转至应用宝下载，延时时间设置为2秒
        if (!hasApp) window.location.href =
          "http://sj.qq.com/myapp/detail.htm?apkName=com.nbhero.jiebo"
      }, 2000);
      var t1 = Date.now();
      window.location.href = "nb://jiutuche.com/";
      setTimeout(function () { //t的时间就是出发APP启动的时间，若APP启动了，再次返回页面时t2这行代码执行，hasApp即为true。反之若APP没有启动即为false
        var t2 = Date.now();
        hasApp = !(!t1 || t2 - t1 < t + 150);
      }, t);
    }
  }
  //  else if (browser.versions.qq) {
  //   alert("QQ中不支持打开，请更换浏览器");
  // } 
  else { //非微信中
    if (browser.versions.ios) {　　　　 //IOS系统，直接去itunes中，既可以下载也可以打开
      // window.location.href = "JiuTuCar://";
      setTimeout(function () {
        window.location.href = "http://sj.qq.com/myapp/detail.htm?apkName=com.nbhero.jiebo";
      }, 0)
    } else if (browser.versions.android) { //android系统，通过定时器的方式，判断是否安装有APP
      var hasApp = true,
        t = 1000;
      setTimeout(function () { //没有安装APP则跳转至应用宝下载，延时时间设置为2秒
        if (!hasApp) window.location.href =
          "http://sj.qq.com/myapp/detail.htm?apkName=com.nbhero.jiebo"
      }, 0);
      var t1 = Date.now();
      // window.location.href = "nb://jiutuche.com/";
      setTimeout(function () { //t的时间就是出发APP启动的时间，若APP启动了，再次返回页面时t2这行代码执行，hasApp即为true。反之若APP没有启动即为false
        var t2 = Date.now();
        hasApp = !(!t1 || t2 - t1 < t + 150);
      }, t);
    }
  }
}