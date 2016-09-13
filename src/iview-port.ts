/**
 * 表示屏幕大小和密度。
 */
export interface IViewPort {
	w : number;
	h : number;
	width : number;
	height : number;
	density : number;
 	
 	on(type:string, callback:Function);
	off(type:string, callback:Function);
}

