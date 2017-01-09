"use strict";
/**
 * @class PropsInfo
 * InteractionRequest.props的参数。
 */
var PropsInfo = (function () {
    function PropsInfo(pagePropsDesc, data, mutable, w) {
        this.w = w;
        this.data = data;
        this.mutable = mutable;
        this.pagePropsDesc = pagePropsDesc;
    }
    /**
     * @method create
     * @static
     * 创建PropsInfo对象。
     *
     * @param {PagePropsDesc} pagePropsDesc 属性描述对象。
     * @param {any} data 与pagePropsDesc对应的数据。
     * @param {boolean} mutable修改原始数据还是拷贝一份新的。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {PropsInfo}
     */
    PropsInfo.create = function (pagePropsDesc, data, mutable, w) {
        return new PropsInfo(pagePropsDesc, data, mutable, w);
    };
    return PropsInfo;
}());
exports.PropsInfo = PropsInfo;
;
