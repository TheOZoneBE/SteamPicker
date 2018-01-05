import fs from 'fs'
import os from 'os'
import path from 'path'
import { getJSON, saveImage } from './util'
import { url } from './constants'



export default class CacheManager {
    constructor(gameList){
        this.cache = false;
        this.gameList = gameList;
    }

    startup(){
        if (fs.existsSync(path.join(os.homedir(), '.steampicker/'))){
            console.log("exists")
        }
        else {
            fs.mkdir(path.join(os.homedir(), '.steampicker'));
            this.cache = false;
        }
    }

    update(){
        //get all games
        //save to json
        var games;
        getJSON(url.games).then(
        response => {
            games = response.response;
            fs.writeFileSync(path.join(os.homedir(), '.steampicker', 'games.json'), JSON.stringify(games));  
            this.updateGames();
        }, 
        err => {
            console.log(err)
        });

    
    }

    updateGames(){

        var games = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.steampicker', 'games.json')));
        console.log(games);
        for(let game of games.games){
            this.updateGame(game);
        }
    }

    updateGame(game){
        //for each game check if directory otherwise make one
        //download imgs and other stuff
        
        if (!fs.existsSync(path.join(os.homedir(), '.steampicker', String(game.appid)))){
            fs.mkdir(path.join(os.homedir(), '.steampicker', String(game.appid)));
        }
        var image = `${url.img}${game.appid}/${game.img_logo_url}.jpg`
        console.log(image);
        saveImage(image, path.join(os.homedir(), '.steampicker', String(game.appid), game.img_logo_url + '.jpg'))

    }

}