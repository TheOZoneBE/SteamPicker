<template>
    <div id="test">
        <p>{{ test }}</p>
        <button v-on:click="update">Update</button>
    </div>
    
</template>

<script>
import { getJSON } from '../util'
var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=E51495C5B4B623417D6B5FED7D044C23&steamid=76561198043928225&format=json'

export default  {
    data() {
        return {
            test: 'updating...'
        }
        
    },
    methods: {
        update() {
            getJSON(url).then(
                response => {
                    console.log(response)
                }, 
                err => {
                    console.log(err)
                });
            this.test = 'updated';
            console.log("update");
        }

    }

}
</script>