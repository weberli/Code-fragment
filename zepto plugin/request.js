//参数处理
function request(paras) {
    var url = location.href;
    var paramStr = url.substring(url.indexOf('?') + 1, url.length).split('&');
    var j;
    var paramObj = {};
    for (var i = 0; j = paramStr[i]; i++) {
        paramObj[j.substring(0, j.indexOf('=')).toLowerCase()] = j.substring(j.indexOf('=') + 1, j.length);
    }

    var returnValue=paramObj[paras.toLowerCase()];

    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}