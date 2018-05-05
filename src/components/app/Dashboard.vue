<template>
    <v-jumbotron class="pa-5" color="cyan" dark>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3" v-lang.title.welcome/>
                    <span class="subheading" v-lang.describe.app/>
                    <v-divider class="my-3"/>
                    <div class="title mb-3" v-lang.message.app.enjoy/>
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