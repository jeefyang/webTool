
/**
 * 百家姓计算
 * @param {string} s
 * @param {"encode"|"decode"} type
 * @returns {string}
 */
function calBaijiaxing(s, type) {
    var t = 'magnet:?xt=urn:btih:';
    var obja = {
        "赵": "0", "钱": "1", "孙": "2", "李": "3", "周": "4", "吴": "5", "郑": "6", "王": "7", "冯": "8", "陈": "9",
        "褚": "a", "卫": "b", "蒋": "c", "沈": "d", "韩": "e", "杨": "f", "朱": "g", "秦": "h", "尤": "i", "许": "j",
        "何": "k", "吕": "l", "施": "m", "张": "n", "孔": "o", "曹": "p", "严": "q", "华": "r", "金": "s", "魏": "t",
        "陶": "u", "姜": "v", "戚": "w", "谢": "x", "邹": "y", "喻": "z", "福": "A", "水": "B", "窦": "C", "章": "D",
        "云": "E", "苏": "F", "潘": "G", "葛": "H", "奚": "I", "范": "J", "彭": "K", "郎": "L", "鲁": "M", "韦": "N",
        "昌": "O", "马": "P", "苗": "Q", "凤": "R", "花": "S", "方": "T", "俞": "U", "任": "V", "袁": "W", "柳": "X",
        "唐": "Y", "罗": "Z", "薛": ".", "伍": "-", "余": "_", "米": "+", "贝": "=", "姚": "/", "孟": "?", "顾": "#",
        "尹": "%", "江": "&", "钟": "*"
    };
    function cy(array, val, isReveser) {
        for (var key in array) {
            if (isReveser) {
                if (array[key] == val) {
                    return key
                }
            }
            else if (key == val) {
                return array[key];
            }
        }
        return '';
    }

    var str = s;
    str = str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    // 加密需要去除magnet头
    if (type == "encode") {
        let a = str.split(t)
        str = a[a.length - 1]
    }
    var strc = str.split("");
    let b = type == "encode"
    let c = ""
    for (var i = 0; i < strc.length; i++) {
        var o = cy(obja, strc[i], b);
        c += o;
    }
    if (!b) {
        c = t + c
    }
    return c
}

/**
     * 复制字符串到剪切板
     * @param {string|number} str 字符串
     * @param {boolean} [isMobile] 是否移动端
     * @returns {boolean} 返回是否成功
     */
function copyStr(str, isMobile) {
    if (isMobile) {
        let div = document.createElement("div")
        div.innerHTML = str.toString()
        document.body.appendChild(div)
        let range = document.createRange()
        range.selectNode(div)
        const selection = window.getSelection()
        if (selection.rangeCount > 0) {
            selection.removeAllRanges()
        }
        selection.addRange(range);
        let check = document.execCommand("copy")
        document.body.removeChild(div)
        return check
    }
    let textArea = document.createElement('textarea')
    textArea.innerHTML = str.toString()
    document.body.appendChild(textArea)
    textArea.select();
    let check = document.execCommand('copy')
    document.body.removeChild(textArea)
    return check
}
