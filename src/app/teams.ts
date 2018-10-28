export class Teams {
    public teamName: String;
    public city: String;
    public teamState: String;
    public division: String;

    constructor(teamName: String, city: String, teamState: String, division: String) {
        this.teamName = teamName;
        this.city = city;
        this.teamState = teamState;
        this.division = division;
    }
}
