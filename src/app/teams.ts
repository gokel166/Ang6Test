export class Teams {
    id: Number;
    teamName: String;
    city: String;
    teamState: String;
    division: String;

    constructor(id: Number, teamName: String, city: String, teamState: String, division: String) {
        this.id = id;
        this.teamName = teamName;
        this.city = city;
        this.teamState = teamState;
        this.division = division;
    }
}
