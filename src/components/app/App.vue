<template>
    <div id="app">
        <v-app>
            <Header/>
            <v-content>
                <v-container class="pa-4" fluid>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12 lg12>
                            <router-view/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import Header from "./Header"

    export default {
        components: {
            Header
        },
        name: 'app'
    }
</script>

<style>
    body {
        font-family: Arial, sans-serif;
    }
</style>
