<template>
    <div id="test">
        <p>{{ test }}</p>
        <button v-on:click="update">Update</button>
    </div>
    
</template>

<script>
export default  {
    data() {
        return {
            test: new Date().toString()
        }
        
    },
    methods: {
        update() {
            this.test = 'updated'
            console.log("update")
        }
    }
}
</script>