/**
 * 可循环的创建器。
 */
export class RecyclableCreator<T> {
	private cache : Array<T>;
	private ctor : Function;
	constructor(ctor:Function) {
		this.cache = [];
		this.ctor = ctor;
	}

	/**
	 * 回收对象。
	 */
	public recycle(obj:T) {
		if(obj) {
			this.cache.push(obj);
		}
	}

	/**
	 * 创建对象。优先从缓存中取对象，如果缓存中没有对象，则创建新对象。
	 */
	public create() : T {
		var me = this;

		if(this.cache.length) {
			return this.cache.pop();
		}else{
			var obj = <T>(this.ctor());
			(<any>obj).recycle = function() {
				me.recycle(this);
			}

			return obj;
		}
	}
};
