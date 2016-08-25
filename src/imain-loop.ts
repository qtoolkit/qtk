/**
 * 主循环
 */
export interface IMainLoop {
	requestRedraw();
 	on(type:string, callback:Function);
	off(type:string, callback:Function);
}

