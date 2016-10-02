/**
 * 管理各种服务。
 */
export class ServiceLocator {
	private services : any;

	constructor() {
		this.services = {};
	}

	register(name:string, service:any) : ServiceLocator {
		this.services[name] = service;

		return this;
	}

	get(name:string) : any {
		return this.services[name];
	}
};
