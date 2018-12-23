export default class GameFilter {
    constructor(type, gamelist){
        this.type = type;
        this.gamelist = gamelist;
    }

    update(){
        this.gamelist.updateGames()
    }
}