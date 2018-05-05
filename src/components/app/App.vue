<template>
    <div id="app">
        <v-app>
            <Header/>
            <v-content>
                <v-container>
                    <router-view/>
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
