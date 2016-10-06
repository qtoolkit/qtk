/**
 * 数据有效性检查的结果。
 */
export class ValidationResult {
	/**
	 * 结果代码。0表示数据有效，其它表示数据无效。
	 */
	public code : number;
	/**
	 * 具体原因。
	 */
	public message : string;
	constructor(code:number, message:string) {
		this.code = code;
		this.message = message;
	}

	/**
	 * 数据有效时，可以共用的结果，不能在运行时修改。
	 */
	public static validResult = ValidationResult.create(0, "valid");
	
	/**
	 * 数据无效时，可以共用的结果，不能在运行时修改。
	 */
	public static invalidResult = ValidationResult.create(-1, "invalid");

	/**
	 * 创建函数。
	 */
	public static create(code:number, message:string) {
		return new ValidationResult(code, message);
	}
};

/**
 * 检查数据是否有效的接口。
 */
export interface IValidationRule {
	/**
	 * 检查数据是否有效。
	 * @param value 要检查的数据。
	 * @returns 数据是否有效的具体信息。
	 */
	validate(value:any) : ValidationResult;
}
