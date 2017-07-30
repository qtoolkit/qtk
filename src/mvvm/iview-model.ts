import {BindingDataSource} from "./binding-rule";

/**
 * ViewModel的接口定义。
 */
export interface IViewModel {
	/**
	 * 当前ViewModel是否集合。
	 */
	isCollection : boolean;

	/**
	 * 获取属性的值。
	 * @param path 属性的路径。请参考：https://github.com/manuelstofer/json-pointer
	 * @returns 属性的值。
	 */
	getProp(path:string) : any; 
	
	/**
	 * 设置属性的值。
	 * @param path 属性的路径。请参考：https://github.com/manuelstofer/json-pointer
	 * @param value 属性的值。
	 * @returns 返回ValidationResult, ValidationResult.code为0表示设置成功。
	 */
	setProp(path:string, value:any) : boolean ;
	
	/**
	 * 注册数据改变事件。
	 * @param callback 事件处理函数。
	 * @returns 返回IViewModel本身。
	 */
	onChange(callback:Function) : IViewModel;
	
	/**
	 * 注销数据改变事件。
	 * @param callback 事件处理函数。
	 * @returns 返回IViewModel本身。
	 */
	offChange(callback:Function) : IViewModel;

	/**
	 * 判断指定的命令能否执行。
	 * @param name 命令的名称。
	 * @returns 命令能否执行。
	 */
	canExecute(name:string, args:any) : boolean;

	/**
	 * 执行指定的命令。
	 * @param name 命令的名称。
	 * @param args 命令的参数。
	 * @returns 命令是否执行成功。
	 */
	execCommand(name:string, args:any) : boolean;
	
	/**
	 * 将数据value转换成适合在界面上显示的格式。
	 * @param name 转换器的名称。
	 * @param value 值
	 * @returns 转换后的值。
	 */
	convert(name:string, value:any) : any;

	/**
	 * 将数据value转换成适合存储的格式。
	 * @param name 转换器的名称。
	 * @param value 值
	 * @returns 转换后的值。
	 */
	convertBack(name:string, value:any) : any;

	/**
	 * 检查数据是否有效。
	 * @param name 校验器的名称。
	 * @param value 值
	 * @returns 是否有效。
	 */
	isValueValid(name:string, value:any, msg:any) : boolean;
};

/**
 * 集合的ViewModel。
 */
export interface ICollectionViewModel extends IViewModel {
	/**
	 * 集合中数据项的总数。
	 */
	total : number;

	/**
	 * 当前项的索引。
	 */
	current : number;

	/**
	 * 获取指定索引的数据项的ViewModel。
	 */
	getItemViewModel(index:number) : IViewModel;
	
	/**
	 * 注册数据项改变事件。
	 * @param callback 事件处理函数。
	 * @returns 返回IViewModel本身。
	 */
	onItemsChange(callback:Function) : ICollectionViewModel;
	
	/**
	 * 注销数据项改变事件。
	 * @param callback 事件处理函数。
	 * @returns 返回IViewModel本身。
	 */
	offItemsChange(callback:Function) : ICollectionViewModel;

	/**
	 * 删除指定的项。
	 * @param index 指定项的索引。
	 * @returns 返回IViewModel本身。
	 */
	removeItem(index:number) : ICollectionViewModel;

	/**
	 * 增加一项数据。
	 * @param data 指定项的数据。
	 * @param index 指定项的索引。
	 * @returns 返回IViewModel本身。
	 */
	addItem(data:any, index?:number) : ICollectionViewModel;
};

/**
 * 数据绑定模式。
 */
export enum BindingMode {
	/**
	 * 双向数据绑定。
	 * 界面数据变化时自动更新ViewModel，ViewModel数据有变化时自动更新界面。
	 */
	TWO_WAY = 0,
	/**
	 * 单向数据绑定。
	 * 界面数据变化时不更新ViewModel，ViewModel数据有变化时自动更新界面。
	 */
	ONE_WAY,
	/**
	 * 只在初始化时绑定。
	 * 界面数据变化时不更新ViewModel，ViewModel数据有变化时不更新界面。
	 */
	ONCE,
	/**
	 * 单向数据绑定。
	 * 界面数据变化时自动更新ViewModel，ViewModel数据有变化时不更新界面。
	 */
	ONE_WAY_TO_SOURCE
};

const BindingModeNames = ["two-way", "one-way", "one-time", "one-way-to-source"];
export function toBindingMode(name:string) : BindingMode {
	return <BindingMode>Math.max(0, BindingModeNames.indexOf(name));
}

/**
 * 更新ViewModel的时机。
 */
export enum UpdateTiming {
	/**
	 * 有变化时立即更新(如编辑器正在输入)。
	 */
	CHANGING = 0,
	/**
	 * 变化完成时才更新(如编辑器失去焦点时)。
	 */
	CHANGED,
	/**
	 * 手动更新。
	 */
	EXPLICIT
};

const UpdateTimingNames = ["changing", "changed", "explicit"];
export function toUpdateTiming(name:string) : UpdateTiming {
	return <UpdateTiming>Math.max(0, UpdateTimingNames.indexOf(name));
}

