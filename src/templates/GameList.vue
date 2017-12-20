<template>
    <div class="page-container" id="game_list">
        <GameTile 
            v-for="game in list.games"
            v-bind:game="game"
            v-bind:key="game.appid">
        </GameTile>
        <md-button md-raised v-on:click="update">Update</md-button>
    </div>    
</template>

<script>
import { getJSON } from '../util'
import GameTile from './GameTile.vue'
var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=E51495C5B4B623417D6B5FED7D044C23&steamid=76561198043928225&format=json&include_appinfo=1'

export default  {
    data() {
        return {
            list : {
                games: []
            }
        }
        
    },
    components: {
        GameTile
    },
    methods: {
        update() {
            getJSON(url).then(
            response => {
                this.list = response.response;
                console.log(this.list);
            }, 
            err => {
                console.log(err)
            });
        }

    },
    created: () => {
        getJSON(url).then(
            response => {
                this.list = response;
                console.log(this.list);
            }, 
            err => {
                console.log(err)
            });
    }

}
</script>