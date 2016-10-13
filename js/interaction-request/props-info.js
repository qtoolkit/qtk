"use strict";
var PropsInfo = (function () {
    function PropsInfo(pagePropsDesc, data, mutable, w) {
        this.w = w;
        this.data = data;
        this.mutable = mutable;
        this.pagePropsDesc = pagePropsDesc;
    }
    PropsInfo.create = function (pagePropsDesc, data, mutable, w) {
        return new PropsInfo(pagePropsDesc, data, mutable, w);
    };
    return PropsInfo;
}());
exports.PropsInfo = PropsInfo;
;
