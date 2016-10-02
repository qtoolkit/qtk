import {Widget} from "./widget";
import {Factory} from "../factory";

/**
 * Widget工厂，注册控件的创建函数和根据控件的类型创建控件。
 * 主要用于根据UI编辑器生成的UI数据创建UI，每个控件都要向WidgetFactory注册。
 *
 * 示例：
 * ```
 * WidgetFactory.register(Button.TYPE, Button.create);
 * ```
 *
 */
export class WidgetFactory {
	private static factory : Factory<Widget> = new Factory<Widget>();

	public static register(type:string, creator:Function) {
		return WidgetFactory.factory.register(type, creator);
	}

	public static create(type:string, options?:any) : Widget {
		return WidgetFactory.factory.create(type, options);
	}
}
