/**
 * 把当前对象转换成JSON对象或从JSON对象来初始化当前对象。
 */
export class JsonSerializer {
	public toJson() : any {
		var json:any = {};

		for(var key in this) {
			var value = this[key];
			if(this.hasOwnProperty(key) && typeof value !== "function") {
				json[key] = value;
			}
		}

		return json;
	}

	public fromJson(json:any) {
		for(var key in json) {
			this[key] = json[key]
		}
	}
}

