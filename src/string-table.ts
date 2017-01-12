import {DeviceInfo} from "./device-info";

export class StringTable {
	private static table:any = {};

	public static set(strTable:any, lang:string) {
		if(!lang) {
			lang = DeviceInfo.language;
		}
		StringTable.table[lang] = strTable;
	}

	public static add(strTable:any, lang:string) {
		if(!lang) {
			lang = DeviceInfo.language;
		}
		if(StringTable.table[lang]) {
			var table = StringTable.table[lang];
			for(var key in strTable) {
				table[key] = strTable[key];
			}
		}else{
			StringTable.table[lang] = strTable;
		}
	}

	public static get(lang:string) {

		return StringTable.table[lang];
	}

	public static tr(str:string) {
		var lang = DeviceInfo.language;
		var table = StringTable.table[lang];
		
		var tr = table ? table[str] : str;
		
		return tr ? tr : str;
	}
};

