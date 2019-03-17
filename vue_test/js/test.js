


// var data = { "name": "詹三", "phone": "13122223333", "money": "200", "msg": "<p>好好学习 天天向上</p>", "select": "", "sel": "" };

// data.select = "<option value=\"\">请选择</option><option value=\"\">1</option><option value=\"\">2</option><option value=\"\">3</option>";

// var monthPay = function () {
//     return this.money * 31;
// }
// var vm = new Vue({
//     el: "#u1",
//     data: data,
//     methods: {
//         monthMoney: monthPay,
//         yearMoney: function () {
//             return this.monthMoney() * 12;
//         }


//     }
// });

var ve = new Vue({
    el: "#u1",
    data: {
        t1: "",
        numStr: ""
    },
    methods: {
        reverseTxt: function () {
            this.t1 = this.t1.split('').reverse().join('')
        }
    },
    filters: {
        deleteNumber: function (str) {
            str = str || "";
            var re = /\d+/g;
            var rt = str.match(re) || "";
            return rt || rt.split('').join('');
        }
    }

})
// new Vue({
//     el: "#u1",
//     data: {
//         ck: false,
//         message: "12345",
//         id:"d1",
//         num: 11
//     }
// })
//判断字符串是否含有数字。有则返回所有数字组成的字符串，反之则返回空。
function ckNumber(str) {
    str = str || "";
    var re = /\d+/g;
    var rt = str.match(re) || "";
    return rt || rt.split('').join('');
}

