<template>
    <div>
        <v-toolbar app color="cyan" dark dense fixed>
            <v-toolbar-title><router-link class="menu__link" to="/">{{ $t("title.app") }}</router-link></v-toolbar-title>
            <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator">
                    <v-icon>storage</v-icon>
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-toolbar-title>
                <v-list>
                    <v-list-tile @click="mock">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ $t("menu.mock") }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="unmock" center>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ $t("menu.unmock") }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
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
                <v-list-tile @click="toggle" :to="$t('link.productsCattegory')">
                    <v-list-tile-action>
                        <v-icon>view_array</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t("menu.productsCattegory") }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="toggle" :to="$t('link.productsType')">
                    <v-list-tile-action>
                        <v-icon>view_carousel</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t("menu.productsType") }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import { http } from "../../api/"

    export default {
        data() {
            return {
                show : false
            }
        },
        methods : {
            database(method, type) {
                this.$swal({
                    cancelButtonColor : "#FF8080",
                    cancelButtonText : this.$t("button.no"),
                    confirmButtonColor : "#00CC99",
                    confirmButtonText : this.$t("button.yes"),
                    showCancelButton : true,
                    showCloseButton : true,
                    text : this.$t(`message.confirm.${type}`),
                    title : this.$t("title.confirm"),
                    type : "warning"
                }).then(result => {
                    if (result.value) {
                        http({
                            method,
                            url : "mock"
                        }).then(() => this.$router.push({ name : "Dashboard" }));
                    }
                })
            },
            mock() {
                this.database("post", "mock")
            },
            navigate(path) {
                this.$router.replace(path)
                this.toggle()
            },
            toggle() {
                this.show = !this.show
            },
            unmock() {
                this.database("delete", "unmock")
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