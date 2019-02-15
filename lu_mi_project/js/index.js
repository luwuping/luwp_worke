var tabs = document.getElementById('tabs').getElementsByTagName('li');
var lists = document.getElementById('lists').getElementsByTagName('li');



//实现原生each
var each = function () {
    //如果不是数组或者类数组就都当对象处理
    if (arguments[0].length) {
        for (var i = 0; i < arguments[0].length; i++) {
            if (arguments[1].call(arguments[0], i, arguments[0][i]) === false) {
                break;
            }
        }
    } else {
        for (var k in arguments[0]) {
            if (arguments[0].hasOwnProperty(k)) {
                if (arguments[1].call(arguments[0], k, arguments[0][k]) === false) {
                    break;
                }
            }
        }
    }
}

each(tabs, function (i, t) {
    t.addEventListener('click', function (event) {
        each(lists, function (i, t) {
            tabs[i].className = "";
            t.className = "clearfix";
        })
        t.className = "active";
        lists[i].className = "clearfix active";
    })
})
var seckillNav = document.getElementsByClassName('seckill-nav')[0];
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
    if (scrollTop >= 260) {
        seckillNav.className = "seckill-nav seckill_navfixed";
    } else {
        seckillNav.className = "seckill-nav";

    }
}
// var each = function (obj, callback, args) {
//     var value,
//         i = 0,
//         length = obj.length,
//         isArray = isArraylike(obj);
//     if (args) {
//         if (isArray) {
//             for (; i < length; i++) {
//                 value = callback.apply(obj[i], args);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         } else {
//             for (i in obj) {
//                 value = callback.apply(obj[i], args);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         }

//         // A special, fast, case for the most common use of each
//     } else {
//         if (isArray) {
//             for (; i < length; i++) {
//                 value = callback.call(obj[i], i, obj[i]);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         } else {
//             for (i in obj) {
//                 value = callback.call(obj[i], i, obj[i]);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         }
//     }

//     return obj;
// }

var obj = { "a": "1", "b": "2", "c": "3" }
var arr = [1, 2, 3];
// each(obj, function (i, t) {
//     console.log(i + ":" + t);
// })
//原生的jq的each有第三个参数
each(obj, function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}, arr)





//原生实现each函数

// var each = function (obj, callback, args) {
//     var value,
//         i = 0,
//         length = obj.length,
//         isArray = isArraylike(obj);//判断是否是数组
//     //判断args是否存在
//     if (args) {
//         if (isArray) {
//             //是数组就进行for循环，调用传入的函数进执行
//             for (; i < length; i++) {
//                 value = callback.apply(obj[i], args);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         } else {
//             for (i in obj) {
//                 value = callback.apply(obj[i], args);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         }

//         // A special, fast, case for the most common use of each
//     } else {
//         if (isArray) {
//             for (; i < length; i++) {
//                 value = callback.call(obj[i], i, obj[i]);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         } else {
//             for (i in obj) {
//                 value = callback.call(obj[i], i, obj[i]);

//                 if (value === false) {
//                     break;
//                 }
//             }
//         }
//     }

//     return obj;
// }

// var tabs = document.getElementById('tabs').childNodes;
// each(tabs, function (i, v) {
//     console.log(i + ":" + v);
// })

//判断是否是数组（注不区分类数组和真正的数组）
function isArraylike(obj) {
    var length = obj.length,
        type = jQuery.type(obj);

    if (jQuery.isWindow(obj)) {
        return false;
    }

    if (obj.nodeType === 1 && length) {
        return true;
    }

    return type === "array" || type !== "function" &&
        (length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj);
}











