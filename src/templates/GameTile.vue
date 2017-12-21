<template>
    <md-card md-with-hover class="md-layout-item md-large-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
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