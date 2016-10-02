/**
 * 数据转换器。
 */
export interface IValueConverter {
    /**
     * 把数据转换成适合在界面上显示的格式。
     */
    convert(data: any): any;
    /**
     * 把数据转换成适合在内部存储的格式。
     */
    convertBack(data: any): any;
}
