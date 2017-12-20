<template>
    <md-card md-with-hover>
        <md-card-header>
            <div class="md-title">{{ game.name }}</div>
        </md-card-header>
    </md-card>
</template>

<script>
export default {
    props: ['game'],
}

</script>