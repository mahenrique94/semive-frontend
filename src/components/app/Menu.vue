<template>
    <div>
        <v-toolbar app color="cyan" dark dense fixed>
            <v-toolbar-title><router-link class="menu__link" to="/" v-lang.title.app/></v-toolbar-title>
            <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-navigation-drawer fixed v-model="show" app>
            <v-list dense>
                <v-list-tile to="/" @click="toggle">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-lang.menu.dashboard/>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/pedidos" @click="toggle">
                    <v-list-tile-action>
                        <v-icon>note</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-lang.menu.orders/>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/cadastro/pessoas" @click="toggle">
                    <v-list-tile-action>
                        <v-icon>group</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-lang.menu.person/>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/cadastro/produtos" @click="toggle">
                    <v-list-tile-action>
                        <v-icon>storage</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-lang.menu.products/>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                show : false
            }
        },
        methods: {
            navigate(path) {
                this.$router.replace(path)
                this.toggle()
            },
            toggle() {
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>
    .menu__link {
        color: #FFFFFF;
        font-weight: bold;
        text-decoration: none;
    }
</style>