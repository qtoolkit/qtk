
export class ItemsStorage {
	private _prefix : string;
	private getKey(name:string) : string {
		return this._prefix + name;
	}

	public set(name:string, data:string) {
		var key = this.getKey(name);

		localStorage.setItem(key, data);
	}
	
	public remove(name:string) : boolean {
		var key = this.getKey(name);
		localStorage.removeItem(key);

		return true;
	}

	public get(name:string) : string {
		var key = this.getKey(name);
		return localStorage.getItem(key);
	}
	
	public getItems() : Array<string> {
		var n = localStorage.length;
		var items = [];
		var prefix = this._prefix;
		for(var i = 0; i < n; i++) {
			var key = localStorage.key(i);
			if(key.indexOf(prefix) === 0) {
				items.push(key.substr(prefix.length));
			}
		}

		return items;
	}

	constructor(prefix:string) {
		this._prefix = prefix + ".";
	}

	public static create(prefix:string) : ItemsStorage {
		return new ItemsStorage(prefix);
	}
};

