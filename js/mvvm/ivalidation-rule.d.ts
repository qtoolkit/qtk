/**
 * 数据有效性检查的结果。
 */
export declare class ValidationResult {
    /**
     * 结果代码。0表示数据有效，其它表示数据无效。
     */
    code: number;
    /**
     * 具体原因。
     */
    message: string;
    constructor(code: number, message: string);
    /**
     * 数据有效时，可以共用的结果，不能在运行时修改。
     */
    static validResult: ValidationResult;
    /**
     * 数据无效时，可以共用的结果，不能在运行时修改。
     */
    static invalidResult: ValidationResult;
    /**
     * 创建函数。
     */
    static create(code: number, message: string): ValidationResult;
}
/**
 * 检查数据是否有效的接口。
 */
export interface IValidationRule {
    /**
     * 检查数据是否有效。
     * @param value 要检查的数据。
     * @returns 数据是否有效的具体信息。
     */
    validate(value: any): ValidationResult;
}
