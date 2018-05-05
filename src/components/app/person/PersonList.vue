<template>
    <div>
        <v-card>
            <v-card-title>
                <v-breadcrumbs divider="/">
                    <v-breadcrumbs-item>{{ $t("menu.register") }}</v-breadcrumbs-item>
                    <v-breadcrumbs-item>{{ $t("menu.person") }}</v-breadcrumbs-item>
                </v-breadcrumbs>
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="filter"
                        append-icon="search"
                        :label="$t('placeholder.search')"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    class="elevation-1"
                    :headers="headers"
                    :hide-actions="checkList()"
                    :items="getList"
                    :no-data-text="$t('message.table.empty')"
                    :no-results-text="$t('message.table.noResult')"
                    :rows-per-page-text="$t('message.table.linePerPage')"
                    :search="filter"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.dateBorn_brazilian }}</td>
                    <td class="justify-center layout px-0">
                        <v-btn icon class="mx-0" @click="edit(props.item.id)">
                            <v-icon color="teal">edit</v-icon>
                        </v-btn>
                        <v-btn icon class="mx-0" @click="remove(props.item.id)">
                            <v-icon color="pink">delete</v-icon>
                        </v-btn>
                    </td>
                </template>
                <template slot="pageText" slot-scope="props">
                    {{ $t("message.table.lines") }} {{ props.pageStart }} - {{ props.pageStop }} {{ $t("message.table.of") }} {{ props.itemsLength }}
                </template>
            </v-data-table>
        </v-card>
        <v-btn
            fixed
            dark
            fab
            bottom
            right
            color="pink"
            to="/cadastro/pessoas/form"
        >
            <v-icon>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import ArrayHelper from "../../../helpers/ArrayHelper"

    export default {
        name: "PersonList",
        computed : {
            ...mapGetters(["getList"])
        },
        data() {
            return {
                filter : "",
                headers : [
                    { text : "Nome", value : "name" },
                    { text : "Data de Nascimento", value : "dateBorn" },
                    { text: "", value: "", sortable: false }
                ]
            }
        },
        created() {
            this.$store.dispatch("list")
        },
        methods : {
            checkList() {
                return ArrayHelper.isEmpty(this.getList)
            },
            remove(id) {
                console.log(id)
            },
            edit(id) {
                console.log(id)
            }
        }
    }
</script>

<style scoped>
    .btn__content .icon {
        display: flex;
    }
</style>