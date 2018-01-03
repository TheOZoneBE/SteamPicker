<template>
    <md-card class="md-layout-item">
        <md-card-header>{{ filter.title}}</md-card-header>
        <md-card-content>
            <PlaytimeFilterBody 
                v-if="filter.type === 'playtime'"
                v-bind:filter="filter">
            </PlaytimeFilterBody>
        </md-card-content>
    </md-card>
</template>

<script>
import PlaytimeFilterBody from './filters/PlaytimeFilterBody.vue'

export default {
    props: ['filter'],
    components: {
        PlaytimeFilterBody
    }
}
</script>


