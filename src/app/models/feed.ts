export class Feed{

    public _id: string;
    public title: string;
    public body: string;
    public image: string;
    public source: string;
    public publisher: string;


    constructor(){
        this._id="";
        this.title="";
        this.body="";
        this.image="";
        this.source="";
        this.publisher="";
    }
}