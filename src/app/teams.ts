export class Teams {
    public id: Number;
    public teamName: String;
    public city: String;
    public teamState: String;
    public division: String;

    constructor(id: Number, teamName: String, city: String, teamState: String, division: String) {
        this.id = id;
        this.teamName = teamName;
        this.city = city;
        this.teamState = teamState;
        this.division = division;
    }
}
