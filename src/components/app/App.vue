<template>
    <div id="app">
        <v-app>
            <Header/>
            <v-content>
                <v-container class="pa-5" fluid>
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
    name: 'app',
    components: {
        Header
    }
}
</script>

<style>
</style>
