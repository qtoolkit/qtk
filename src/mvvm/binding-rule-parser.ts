/**
 * 解析数据绑定规则的接口。
 */
export interface IBindingRuleParser {
	parse(rule:any) : any;
}

/**
 * 一个简陋的解析数据绑定规则的实现。
 */
export class BindingRuleParser implements IBindingRuleParser {
	parse(rule:any) : any {
		if(typeof rule === "string") {
			rule = {value: {path : rule}};
		}
		
		for(var key in rule) {
			var dataSource = rule[key];

			if(typeof dataSource === "string") {
				rule[key] = {path:dataSource};
			}

			var path = dataSource.path;
			if(path && path.charAt(0) !== '/') {
				dataSource.path = '/' + dataSource.path;
			}
		}

		return rule;
	}

	public static defParser = new BindingRuleParser();
	public static parse(rule:any) : any {
		if(!rule) {
			return null;
		}

		return BindingRuleParser.defParser.parse(rule);
	}
}
