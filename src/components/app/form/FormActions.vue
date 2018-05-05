<template>
    <v-speed-dial
        bottom
        direction="top"
        v-model="fab"
        right
        transition="slide-y-reverse-transition"
    >
        <v-btn color="blue darken-2" dark fab hover v-model="fab" slot="activator">
            <v-icon>settings</v-icon>
            <v-icon>close</v-icon>
        </v-btn>
        <v-btn color="indigo" dark fab small :to="$t(`link.${component}`)">
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn color="green" dark fab small type="submit">
            <v-icon>save</v-icon>
        </v-btn>
    </v-speed-dial>
</template>

<script>
    export default {
        data() {
            return {
                fab : false
            }
        },
        name: "FormActions",
        props : {
            component : {
                required : true,
                type : String
            }
        }
    }
</script>

<style scoped>
    .speed-dial {
        position: absolute;
    }
    .btn--floating {
        position: relative;
    }
    .btn__content .icon {
        display: flex;
    }
</style>