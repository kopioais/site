var _0x86cc = ["http://www.kopioais.com", "hash", "location", "#0", "#search", "substr", "\x58\x65\x6D\x20\x74\x68\xEA\x6D", "\x4C\xE0\x6D\x20\x6C\u1EA1\x69", "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif", "\x3C\x73\x70\x61\x6E\x3E\x43\x68\u1EDD\x20\x78\xED\x75\x20\u0111\x61\x6E\x67\x20\x74\u1EA3\x69\x2E\x2E\x2E\x3C\x2F\x73\x70\x61\x6E\x3E", "\x3C\x73\x70\x61\x6E\x3E\x54\xEC\x6D\x20\x6B\x69\u1EBF\x6D\x2E\x2E\x2E\x3C\x2F\x73\x70\x61\x6E\x3E", "No Result", "getElementById", "head", "getElementsByTagName", "feedContainer", "feedNav", "orderFeedBy", "labelSorter", "input", "postSearcher", "resultDesc", "<", "split", "length", ">", "indexOf", "substring", " ", "join", "category", "feed", "", "<select id=\'labelSorter\' onchange=\'changeSort(this.value);\'>", "<option value=\'\' selected>CATEGORY</option>", "<option value=\'", "term", "\'>", "toUpperCase", "</option>", "</select>", "innerHTML", "entry", "undefined", "feedNum", "$t", "title", "link", "rel", "alternate", "href", "next", "replies", "type", "text/html", "content", "summary", "media$thumbnail", "/s", "thumbWidth", "-c", "replace", "url", "noImage", "published", "MonthNames", "<li><div>", "<a href=\'", "\' target=\'_blank\'><img style=\'float:left;width:", "px;height:", "px;margin-right:10px;\' src=\'", "\' alt=\'", "\' /></a>", "<b><a href=\'", "\' title=\'", "\' target=\'_blank\'>", "</a></b>", "<br/><div>", "numChars", "&hellip;</div>", "<b><span>", "</span>/<span>", "</span></b></div></div></li>", "value", "<span>Search Result for Keyword <strong>&quot;", "&quot;</strong></span>", "<a href=\'javascript:initResult(2);\' class=\'next\'>", "navText", "</a>", "<a href=\'javascript:initResult(1);\' class=\'next\'>", "<a href=\'#table-outer\' onclick=\'jQuery(&apos;html, body&apos;).animate({scrollTop: jQuery(&apos;#table-outer&apos;).offset().top}, 1500); return false\' class=\'front\'>", "frontText", "disabled", "removeAttribute", "select", "noResult", "<a href=\'?reload=true\'>", "?", "/-/", "?start-index=1&max-results=", "&orderby=", "&alt=json-in-script", "&callback=showFeedList", "temporer-script", "removeChild", "parentNode", "script", "createElement", "text/javascript", "src", "protocol", "//", "host", "/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels", "appendChild", "loading", "labelName", "/feeds/posts/summary/-/", "/feeds/posts/summary", "id", "?alt=json-in-script&max-results=", "searching", "/feeds/posts/summary?alt=json-in-script&orderby=published&q=", "&max-results=9999&callback=showFeedList", "onsubmit", "onchange", "onload"];
var tocConfig = {
    url: _0x86cc[0],
    feedNum: 20,
    feedNum: 20,
    labelName: (window['location']['hash'] && window['location']['hash'] != '#0' && window['location']['hash'] != '#search') ? encodeURIComponent(window['location']['hash']['substr'](1)) : false,
    numChars: 100,
    thumbWidth: 60,
    navText: 'View More',
    frontText: 'Home',
    noImage: 'http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif',
    loading: '<span>Loading post...</span>',
    searching: '<span>Searching...</span>',
    MonthNames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    noResult: 'No Result'
};

function getID(_0x1bf8x3) {
    return document[_0x86cc[12]](_0x1bf8x3);
};
var head = document[_0x86cc[14]](_0x86cc[13])[0],
    tocContainer = getID(_0x86cc[15]),
    feedNav = getID(_0x86cc[16]),
    orderByer = getID(_0x86cc[17]),
    labelSorter = getID(_0x86cc[18]),
    input = getID(_0x86cc[20])[_0x86cc[14]](_0x86cc[19])[0],
    resultDesc = getID(_0x86cc[21]),
    nextPage, feedArchive, startPage = 0;

function cropFeed(_0x1bf8xf, _0x1bf8x10) {
    var _0x1bf8x11 = _0x1bf8xf[_0x86cc[23]](_0x86cc[22]);
    for (var _0x1bf8x12 = 0; _0x1bf8x12 < _0x1bf8x11[_0x86cc[24]]; _0x1bf8x12++) {
        if (_0x1bf8x11[_0x1bf8x12][_0x86cc[26]](_0x86cc[25]) != -1) {
            _0x1bf8x11[_0x1bf8x12] = _0x1bf8x11[_0x1bf8x12][_0x86cc[27]](_0x1bf8x11[_0x1bf8x12][_0x86cc[26]](_0x86cc[25]) + 1, _0x1bf8x11[_0x1bf8x12][_0x86cc[24]]);
        };
    };
    _0x1bf8x11 = _0x1bf8x11[_0x86cc[29]](_0x86cc[28]);
    _0x1bf8x11 = _0x1bf8x11[_0x86cc[27]](0, _0x1bf8x10 - 1);
    return _0x1bf8x11;
};

function showLabels(_0x1bf8x10) {
    var _0x1bf8x14 = _0x1bf8x10[_0x86cc[31]][_0x86cc[30]],
        _0x1bf8xf = _0x86cc[32];
    _0x1bf8xf = _0x86cc[33];
    _0x1bf8xf += _0x86cc[34];
    for (var _0x1bf8x3 = 0; _0x1bf8x3 < _0x1bf8x14[_0x86cc[24]]; _0x1bf8x3++) {
        _0x1bf8xf += _0x86cc[35] + decodeURIComponent(_0x1bf8x14[_0x1bf8x3][_0x86cc[36]]) + _0x86cc[37] + _0x1bf8x14[_0x1bf8x3][_0x86cc[36]][_0x86cc[38]]() + _0x86cc[39];
    };
    _0x1bf8xf += _0x86cc[40];
    labelSorter[_0x86cc[41]] = _0x1bf8xf;
};

function showFeedList(_0x1bf8x16) {
    var _0x1bf8x17 = _0x1bf8x16[_0x86cc[31]][_0x86cc[42]],
        _0x1bf8x18, _0x1bf8x19, _0x1bf8x1a, _0x1bf8x1b, _0x1bf8x12, _0x1bf8x1c, _0x1bf8x1d, _0x1bf8x1e, _0x1bf8x1f, _0x1bf8x20, _0x1bf8x10 = _0x86cc[32];
    if (typeof (_0x1bf8x16[_0x86cc[31]][_0x86cc[42]]) !== _0x86cc[43]) {
        for (var _0x1bf8x11 = 0; _0x1bf8x11 < tocConfig[_0x86cc[44]]; _0x1bf8x11++) {
            _0x1bf8x18 = (_0x1bf8x17) ? _0x1bf8x17[_0x1bf8x11] : _0x86cc[32];
            nextPage = _0x86cc[32];
            if (_0x1bf8x11 == _0x1bf8x16[_0x86cc[31]][_0x86cc[42]][_0x86cc[24]]) {
                break;
            };
            _0x1bf8x19 = _0x1bf8x18[_0x86cc[46]][_0x86cc[45]];
            for (var _0x1bf8xf = 0; _0x1bf8xf < _0x1bf8x18[_0x86cc[47]][_0x86cc[24]]; _0x1bf8xf++) {
                if (_0x1bf8x18[_0x86cc[47]][_0x1bf8xf][_0x86cc[48]] == _0x86cc[49]) {
                    _0x1bf8x1a = _0x1bf8x18[_0x86cc[47]][_0x1bf8xf][_0x86cc[50]];
                    break;
                };
            };
            for (var _0x1bf8x3 = 0; _0x1bf8x3 < _0x1bf8x16[_0x86cc[31]][_0x86cc[47]][_0x86cc[24]]; _0x1bf8x3++) {
                if (_0x1bf8x16[_0x86cc[31]][_0x86cc[47]][_0x1bf8x3][_0x86cc[48]] == _0x86cc[51]) {
                    nextPage = _0x1bf8x16[_0x86cc[31]][_0x86cc[47]][_0x1bf8x3][_0x86cc[50]];
                };
            };
            for (var _0x1bf8x14 = 0; _0x1bf8x14 < _0x1bf8x18[_0x86cc[47]][_0x86cc[24]]; _0x1bf8x14++) {
                if (_0x1bf8x18[_0x86cc[47]][_0x1bf8x14][_0x86cc[48]] == _0x86cc[52] && _0x1bf8x18[_0x86cc[47]][_0x1bf8x14][_0x86cc[53]] == _0x86cc[54]) {
                    _0x1bf8x20 = _0x1bf8x18[_0x86cc[47]][_0x1bf8x14][_0x86cc[46]];
                    break;
                };
            };
            if (_0x86cc[55] in _0x1bf8x18) {
                _0x1bf8x12 = _0x1bf8x18[_0x86cc[55]][_0x86cc[45]];
            } else {
                if (_0x86cc[56] in _0x1bf8x18) {
                    _0x1bf8x12 = _0x1bf8x18[_0x86cc[56]][_0x86cc[45]];
                } else {
                    _0x1bf8x12 = _0x86cc[32];
                };
            }; if (_0x86cc[57] in _0x1bf8x18) {
                _0x1bf8x1b = _0x1bf8x18[_0x86cc[57]][_0x86cc[62]][_0x86cc[61]](/\/s[0-9]+\-c/, _0x86cc[58] + tocConfig[_0x86cc[59]] + _0x86cc[60]);
            } else {
                _0x1bf8x1b = tocConfig[_0x86cc[63]][_0x86cc[61]](/\/s[0-9]+\-c/, _0x86cc[58] + tocConfig[_0x86cc[59]] + _0x86cc[60]);
            };
            postdate = _0x1bf8x18[_0x86cc[64]][_0x86cc[45]][_0x86cc[27]](0, 10);
            _0x1bf8x1c = postdate[_0x86cc[27]](0, 4);
            _0x1bf8x1d = postdate[_0x86cc[27]](5, 7);
            _0x1bf8x1e = postdate[_0x86cc[27]](8, 10);
            _0x1bf8x1f = tocConfig[_0x86cc[65]][parseInt(_0x1bf8x1d, 10) - 1];
            _0x1bf8x10 += _0x86cc[66];
            _0x1bf8x10 += _0x86cc[67] + _0x1bf8x1a + _0x86cc[68] + tocConfig[_0x86cc[59]] + _0x86cc[69] + tocConfig[_0x86cc[59]] + _0x86cc[70] + _0x1bf8x1b + _0x86cc[71] + _0x1bf8x19 + _0x86cc[72];
            _0x1bf8x10 += _0x86cc[73] + _0x1bf8x1a + _0x86cc[74] + _0x1bf8x19 + _0x86cc[75] + _0x1bf8x19 + _0x86cc[76];
            _0x1bf8x10 += _0x86cc[77] + cropFeed(_0x1bf8x12, tocConfig[_0x86cc[78]]) + _0x86cc[79];
            _0x1bf8x10 += _0x86cc[80] + _0x1bf8x1e + _0x86cc[81] + _0x1bf8x1f + _0x86cc[81] + _0x1bf8x1c + _0x86cc[82];
        };
        if (input[_0x86cc[83]] !== _0x86cc[32] && window[_0x86cc[2]][_0x86cc[1]] == _0x86cc[4]) {
            resultDesc[_0x86cc[41]] = _0x86cc[84] + input[_0x86cc[83]] + _0x86cc[85];
        } else {
            resultDesc[_0x86cc[41]] = _0x86cc[32];
        };
        feedContainer[_0x86cc[41]] += _0x1bf8x10;
        if (nextPage) {
            if (window[_0x86cc[2]][_0x86cc[1]] && window[_0x86cc[2]][_0x86cc[1]] !== _0x86cc[3]) {
                _0x1bf8x10 = _0x86cc[86] + tocConfig[_0x86cc[87]] + _0x86cc[88];
            } else {
                _0x1bf8x10 = _0x86cc[89] + tocConfig[_0x86cc[87]] + _0x86cc[88];
            };
        } else {
            _0x1bf8x10 = _0x86cc[90] + tocConfig[_0x86cc[91]] + _0x86cc[88];
        };
        feedNav[_0x86cc[41]] = _0x1bf8x10;
        input[_0x86cc[83]] = _0x86cc[32];
        labelSorter[_0x86cc[14]](_0x86cc[94])[0][_0x86cc[93]](_0x86cc[92]);
        orderByer[_0x86cc[93]](_0x86cc[92]);
    } else {
        feedContainer[_0x86cc[41]] = _0x86cc[32];
        alert(tocConfig[_0x86cc[95]]);
        feedNav[_0x86cc[41]] = _0x86cc[96] + tocConfig[_0x86cc[91]] + _0x86cc[88];
        searchDesc[_0x86cc[41]] = _0x86cc[32];
    };
};

function initResult(_0x1bf8x14) {
    var _0x1bf8x3, _0x1bf8x10;
    if (_0x1bf8x14 == 1) {
        _0x1bf8x3 = nextPage[_0x86cc[26]](_0x86cc[97]);
        _0x1bf8x10 = nextPage[_0x86cc[27]](_0x1bf8x3);
    } else {
        if (_0x1bf8x14 == 2) {
            _0x1bf8x3 = nextPage[_0x86cc[26]](_0x86cc[97]);
            _0x1bf8x10 = nextPage[_0x86cc[27]](_0x1bf8x3)[_0x86cc[61]](/\?/, _0x86cc[98] + window[_0x86cc[2]][_0x86cc[1]][_0x86cc[5]](1) + _0x86cc[97]);
        } else {
            _0x1bf8x10 = _0x86cc[99] + tocConfig[_0x86cc[44]] + _0x86cc[100] + orderByer[_0x86cc[83]] + _0x86cc[101];
        };
    };
    _0x1bf8x10 += _0x86cc[102];
    updateScript(_0x1bf8x10);
};

function removeScript() {
    var _0x1bf8x14 = getID(_0x86cc[103]);
    _0x1bf8x14[_0x86cc[105]][_0x86cc[104]](_0x1bf8x14);
};

function buildLabels() {
    var _0x1bf8x14 = document[_0x86cc[107]](_0x86cc[106]);
    _0x1bf8x14[_0x86cc[53]] = _0x86cc[108];
    _0x1bf8x14[_0x86cc[109]] = (tocConfig[_0x86cc[62]] === _0x86cc[32] ? window[_0x86cc[2]][_0x86cc[110]] + _0x86cc[111] + window[_0x86cc[2]][_0x86cc[112]] : tocConfig[_0x86cc[62]]) + _0x86cc[113];
    head[_0x86cc[114]](_0x1bf8x14);
};

function updateScript(_0x1bf8x3) {
    if (startPage == 1) {
        removeScript();
    };
    feedNav[_0x86cc[41]] = tocConfig[_0x86cc[115]];
    if (tocConfig[_0x86cc[116]] !== false) {
        feedArchive = (tocConfig[_0x86cc[62]] === _0x86cc[32] ? window[_0x86cc[2]][_0x86cc[110]] + _0x86cc[111] + window[_0x86cc[2]][_0x86cc[112]] : tocConfig[_0x86cc[62]]) + _0x86cc[117] + tocConfig[_0x86cc[116]] + _0x1bf8x3;
    } else {
        feedArchive = (tocConfig[_0x86cc[62]] === _0x86cc[32] ? window[_0x86cc[2]][_0x86cc[110]] + _0x86cc[111] + window[_0x86cc[2]][_0x86cc[112]] : tocConfig[_0x86cc[62]]) + _0x86cc[118] + _0x1bf8x3;
    };
    var _0x1bf8x14 = document[_0x86cc[107]](_0x86cc[106]);
    _0x1bf8x14[_0x86cc[53]] = _0x86cc[108];
    _0x1bf8x14[_0x86cc[109]] = feedArchive;
    _0x1bf8x14[_0x86cc[119]] = _0x86cc[103];
    head[_0x86cc[114]](_0x1bf8x14);
    startPage = 1;
};

function changeSort(_0x1bf8x10) {
    removeScript();
    tocContainer[_0x86cc[41]] = _0x86cc[32];
    feedNav[_0x86cc[41]] = tocConfig[_0x86cc[115]];
    var _0x1bf8x3 = document[_0x86cc[107]](_0x86cc[106]),
        _0x1bf8xf = labelSorter[_0x86cc[14]](_0x86cc[94])[0],
        _0x1bf8x14 = (_0x1bf8x10 !== 0) ? _0x86cc[98] + _0x1bf8x10 : _0x86cc[32];
    _0x1bf8x3[_0x86cc[53]] = _0x86cc[108];
    _0x1bf8x3[_0x86cc[119]] = _0x86cc[103];
    _0x1bf8x3[_0x86cc[109]] = (tocConfig[_0x86cc[62]] === _0x86cc[32] ? window[_0x86cc[2]][_0x86cc[110]] + _0x86cc[111] + window[_0x86cc[2]][_0x86cc[112]] : tocConfig[_0x86cc[62]]) + _0x86cc[118] + _0x1bf8x14 + _0x86cc[120] + tocConfig[_0x86cc[44]] + _0x86cc[100] + orderByer[_0x86cc[83]] + _0x86cc[102];
    head[_0x86cc[114]](_0x1bf8x3);
    _0x1bf8xf[_0x86cc[92]] = true;
    orderByer[_0x86cc[92]] = true;
    window[_0x86cc[2]][_0x86cc[1]] = _0x1bf8x10;
};

function searchPost() {
    removeScript();
    tocContainer[_0x86cc[41]] = _0x86cc[32];
    resultDesc[_0x86cc[41]] = _0x86cc[32];
    feedNav[_0x86cc[41]] = tocConfig[_0x86cc[121]];
    var _0x1bf8x14 = document[_0x86cc[107]](_0x86cc[106]);
    _0x1bf8x14[_0x86cc[53]] = _0x86cc[108];
    _0x1bf8x14[_0x86cc[119]] = _0x86cc[103];
    _0x1bf8x14[_0x86cc[109]] = (tocConfig[_0x86cc[62]] === _0x86cc[32] ? window[_0x86cc[2]][_0x86cc[110]] + _0x86cc[111] + window[_0x86cc[2]][_0x86cc[112]] : tocConfig[_0x86cc[62]]) + _0x86cc[122] + input[_0x86cc[83]] + _0x86cc[123];
    head[_0x86cc[114]](_0x1bf8x14);
    window[_0x86cc[2]][_0x86cc[1]] = _0x86cc[4];
    return false;
};
getID(_0x86cc[20])[_0x86cc[124]] = function () {
    return searchPost();
};
orderByer[_0x86cc[125]] = function () {
    changeSort(0);
};
labelSorter[_0x86cc[14]](_0x86cc[94])[0][_0x86cc[125]] = function () {
    changeSort(this[_0x86cc[83]]);
};
window[_0x86cc[126]] = function () {
    initResult(0);
    buildLabels();
    window[_0x86cc[2]][_0x86cc[1]] = _0x86cc[3];
};
