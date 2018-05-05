<template>
    <div>
        <v-toolbar app color="cyan" dark dense fixed>
            <v-toolbar-title><router-link class="menu__link" to="/">{{ $t("title.app") }}</router-link></v-toolbar-title>
            <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-navigation-drawer app fixed v-model="show">
            <v-list dense>
                <v-list-tile @click="toggle" :to="$t('link.dashboard')">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t("menu.dashboard") }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="toggle" :to="$t('link.orders')">
                    <v-list-tile-action>
                        <v-icon>note</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t("menu.orders") }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="toggle" :to="$t('link.person')">
                    <v-list-tile-action>
                        <v-icon>group</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t("menu.person") }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="toggle" :to="$t('link.products')">
                    <v-list-tile-action>
                        <v-icon>storage</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t("menu.products") }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
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
        },
        name: "Menu"
    }
</script>

<style scoped>
    .menu__link {
        color: #FFFFFF;
        font-weight: bold;
        text-decoration: none;
    }
</style>