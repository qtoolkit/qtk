export class Settings {
    constructor() {
        this.name = "demo";
        this.path = "/home/jim/";
        this.fullpath = this.path + this.name;
    }

    public canSave(args:string) : boolean {
        return true;
    }

    public save(args:string) : boolean {
        console.log("save clicked.");
        return true;
    }

    public name : string;
    public path : string;
    public fullpath : string;
}

