<template>
    <v-btn bottom color="pink" dark fab fixed right :to="`${$t(`link.${component}`)}/form`"><v-icon>add</v-icon></v-btn>
</template>

<script>
    export default {
        name: "New",
        props : {
            component : {
                required : true,
                type : String
            }
        }
    }
</script>

<style scoped>
    .btn__content .icon {
        display: flex;
    }
</style>