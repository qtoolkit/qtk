/**
 * @class DeviceInfo
 * 设备信息。可以获取语言，操作系统和浏览器等相关信息(单例对象，直接调用)。
 */
export declare class DeviceInfo {
    /**
     * @property {string} locale
     * 浏览器的locale(语言+国家)。
     */
    static locale: string;
    /**
     * @property {string} locale
     * 浏览器的语言。
     */
    static language: string;
    static isMacOS: boolean;
    static isLinux: boolean;
    static isWindows: boolean;
    static isAndroid: boolean;
    static isIPhone: boolean;
    static isIPad: boolean;
    static isEdge: boolean;
    static isWindowsPhone: boolean;
    static isMobile: boolean;
    static isPointerSupported: boolean;
    static isMSPointerSupported: boolean;
    static isTouchSupported: boolean;
    static init(_locale: string, userAgent: string): void;
}
