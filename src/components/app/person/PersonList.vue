<template>
    <div>
        <v-card>
            <v-card-title>
                <v-breadcrumbs divider="/">
                    <v-breadcrumbs-item v-lang.menu.register/>
                    <v-breadcrumbs-item v-lang.menu.person/>
                </v-breadcrumbs>
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="filter"
                        append-icon="search"
                        label="Digite aqui para filtrar"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    class="elevation-1"
                    :headers="headers"
                    :items="getList"
                    no-data-text="A tabela está vázia"
                    no-results-text="Nenhum registro encontrado"
                    rows-per-page-text="Linhas por página"
                    :search="filter"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.dateBorn }}</td>
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
                    Linhas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
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