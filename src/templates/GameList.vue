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
                            v-for="filter in cache.gameList.filters"
                            v-bind:filter="filter"
                            v-bind:key="filter.id">
                        </GameFilterWrapper>
                    </md-tab>
                    <md-tab id="results" md-label="Results" class="md-layout md-gutter md-alignment-center">
                        <GameTile 
                            v-for="game in cache.gameList.games"
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
import GameTile from './GameTile.vue'
import GameFilterWrapper from './GameFilterWrapper.vue'
import CacheManager from '../CacheManager.js'

export default  {
    data() {
        return {
            cache : new CacheManager(),
        }
        
    },
    components: {
        GameTile,
        GameFilterWrapper
    },
    methods: {
        update() {
            this.cache.update();
        }
    }
}
</script>

<style>
    .hidden {
        display: none;
    }
</style>
