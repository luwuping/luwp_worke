

// function test() {
//     'use strict';
//     return '123';
// }
// test();


// var id1 = document.getElementById("menu");
// var name1 = document.getElementsByTagName("dd");
// var class1 = document.getElementsByClassName("cd");

var ack = document.getElementsByTagName('a')[0];
// ack.onclick = ck();
// function ck() {
//     console.log('123');
//     return false;
// }
var ckBsbyVsrsion = IeCheck();
if (ckBsbyVsrsion > 8 || ckBsbyVsrsion === -1) {
    ack.addEventListener('click', function (event) {
        //取消默认跳转操作
        event.preventDefault();
        //取消事件冒泡
        event.stopPropagation();
        IeCheck();
    }/**第三个参数表示此事件执行方式，默认为冒泡 */)
} else {
    ack.attachEvent('onclick', function () {
        var event = window.event;
        //取消默认跳转操作
        event.returnValue = false;
        //取消事件冒泡
        event.cancelBubble = false;
        IeCheck();
    }/**第三个参数表示此事件执行方式，默认为冒泡 */)
}


/**
 * 判断是否是ie浏览器,如不是返回-1.是则返回对应版本.注：Edge返回100
 */
function IeCheck() {
    var bsInfo = navigator.userAgent;
    var isIe = bsInfo.indexOf('compatible') > -1 && bsInfo.indexOf('MSIE') > -1;
    var isEdge = bsInfo.indexOf('Edge') > -1 && !isIe;
    var isIe11 = bsInfo.indexOf('') > -1 && bsInfo.indexOf("rv:11.0") > -1;
    if (isIe) {
        var reIe = new RegExp("MSIE(\\d+\\.\\d+);")
        var ieVersion = parseFloat(bsInfo.match(/MSIE\s+(\d+\.\d+)/)[1]);
        if (ieVersion === 7) {
            return 7;
        } else if (ieVersion === 8) {
            return 8;
        } else if (ieVersion === 9) {
            return 9;
        } else if (ieVersion === 10) {
            return 10;
        } else {
            return 6;
        }
    } else if (isEdge) {
        return 100;

    } else if (isIe11) {
        return 11;
    } else {
        return -1;
    }
}

