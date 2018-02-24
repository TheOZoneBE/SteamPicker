import PlaytimeFilter from './filters/PlaytimeFilter.js'

export default class GameListContainer {
    constructor(){
        this.games = []
        this.allGames = []
        this.filters = []
        this.filterMap = new Map();
        this.addFilter(new PlaytimeFilter())
    }

    setGames(allGames){
        this.allGames = allGames
        this.updateGames();
    }

    addFilter(filter){
        this.filterMap.set(filter.name, filter)
        this.filters.push(filter);
        this.updateGames();
    }

    removeFilter(filter){
        this.filterMap.delete(filter.name)   
        this.filters.slice(filter);
        this.updateGames();  
    }

    updateGames(){
        this.games = []
        for(let game of this.allGames){
            let pass = true;
            for(let filter of this.filterMap.values()){
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