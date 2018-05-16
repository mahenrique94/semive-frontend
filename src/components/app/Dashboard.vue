<template>
    <v-jumbotron class="pa-5" color="cyan" dark>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3">{{ $t("title.welcome") }}</h3>
                    <span class="subheading">{{ $t("describe.app") }}</span>
                    <v-divider class="my-3"/>
                    <div class="title mb-3">{{ $t("message.app.enjoy") }}</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
</style>