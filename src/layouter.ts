import {Widget} from "./widget";

export class Layouter {
	public get name() : string {
		return "dummy";
	}

	public toJson() : any {
		return {name: this.name};
	}

	public fromJson(json:any) {
		return;
	}

	public layoutChildren(widget:Widget, children:Array<Widget>) {
	}

	public static creators = {};
	public static register(name:string, creator:Function) {
		Layouter.creators[name] = creator;
	}

	public static create(name:string) : Layouter {
		var create = Layouter.creators[name];

		return create ? <Layouter>create() : null;
	}

	public static createFromJson(json:any) {
		var layouter = Layouter.create(json.name);
		layouter.fromJson(json);

		return layouter;
	}
};

