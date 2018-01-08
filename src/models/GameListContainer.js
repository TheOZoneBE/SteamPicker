export default class GameListContainer {
    constructor(){
        this.games = []
        this.allGames = []
        this.filters = new Map();
    }

    setGames(allGames){
        this.allGames = allGames
        this.updateGames();
    }

    addFilter(filter){
        this.filters.set(filter.name, filter)
    }

    removeFilter(filter){
        this.filters.delete(filter.name)        
    }

    updateGames(){
        this.games = []
        for(let game of this.allGames){
            let pass = true;
            for(let filter of this.filters.values()){
                if (!filter.pass(game)){
                    pass = false;
                    break;
                }
            }
            if (pass){
                this.games.push(game)
            }
        }
        
    }
}