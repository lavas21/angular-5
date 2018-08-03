export class Camp {
    public location: string;
    public campDate: Date;
    public estimate: number;
    constructor( location:string,  campDate: Date,  estimate: number){
        this.location = location;
        this.campDate = campDate;
        this.estimate = estimate;
    }

    toString(){
        return `${this.location},${this.campDate},${this.estimate}`;
    }
}
