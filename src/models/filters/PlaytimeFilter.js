import GameFilter from './GameFilter.js'

export default class PlaytimeFilter extends GameFilter {
    constructor(){
        super("playtime")
        this.minutes = 0
        this.operator = "greater"
        this.timeunit = "minutes"
    }

    pass(game){
        let minutes
        switch(this.timeunit){
            case "hours":
                minutes = 60 * this.time;
                break;
            case "days":
                minutes = 60 * 24 * this.time; 
                break;
            default:
                minutes = this.time;
        }
        switch(this.operator){
            case "less":
                return game.playtime_forever <= minutes;
            case "greater":
                return game.playtime_forever >= minutes;
            case "around":
                return game.playtime_forever > minutes * 0.95 && game.playtime_forever < minutes * 1.05;
            default:
                return true;

        }   
    }
}