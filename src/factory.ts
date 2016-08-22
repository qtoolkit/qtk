/**
 * 一个通用的工厂类。
 */
export class Factory<T> {
	private creators : any = {};

	public register(type:string, creator:Function) {
		this.creators[type] = creator;
	}

	public create(type:string) : T {
		var obj = null;
		var creator = this.creators[type];

		if(creator) {
			obj = creator();
		}

		return obj;
	}
}
