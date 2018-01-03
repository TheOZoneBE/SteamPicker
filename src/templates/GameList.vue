<template>
    <div class="page-container" id="game_list">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">SteamPicker</span>
                <md-button md-raised v-on:click="update">Refresh Game Data</md-button>
            </md-app-toolbar>
            <md-app-content>
                <md-tabs md-alignment="centered">            
                    <md-tab id="filters" md-label="Filters" class="md-layout md-gutter md-alignment-center">                    
                        <GameFilterWrapper
                            v-for="filter in filters"
                            v-bind:filter="filter"
                            v-bind:key="filter.id">
                        </GameFilterWrapper>
                    </md-tab>
                    <md-tab id="results" md-label="Results" class="md-layout md-gutter md-alignment-center">
                        <GameTile 
                            v-for="game in list.games"
                            v-bind:game="game"
                            v-bind:key="game.appid">
                        </GameTile>
                    </md-tab>
                </md-tabs >
            </md-app-content>      
        </md-app>
    </div>    
</template>

<script>
import { getJSON } from '../util'
import GameTile from './GameTile.vue'
import GameFilterWrapper from './GameFilterWrapper.vue'
var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=E51495C5B4B623417D6B5FED7D044C23&steamid=76561198043928225&format=json&include_appinfo=1'

export default  {
    data() {
        return {
            list : {
                games: []
            },
            filters : [{type: 'playtime', title: 'Playtime:', id:1}]
        }
        
    },
    components: {
        GameTile,
        GameFilterWrapper
    },
    methods: {
        update() {
            getJSON(url).then(
            response => {
                this.list = response.response;
            }, 
            err => {
                console.log(err)
            });
        }

    }
}
</script>

<style>
    .hidden {
        display: none;
    }
</style>
