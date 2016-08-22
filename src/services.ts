export const THEME_MANAGER = "qtk-keyup";

/**
 * 管理各种服务。
 */
export class Manager {
	private services : any;

	constructor() {
		this.services = {};
	}

	register(name:string, service:any) : Manager {
		this.services[name] = service;

		return this;
	}

	get(name:string) : any {
		return this.services[name];
	}
};
