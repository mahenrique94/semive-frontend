<template>
    <div>
        <v-breadcrumbs divider="/">
            <v-breadcrumbs-item v-lang.menu.register/>
            <v-breadcrumbs-item v-lang.menu.people/>
        </v-breadcrumbs>
        <v-data-table class="elevation-1" :headers="headers" :items="list" no-data-text="A tabela está vázia" no-results-text="Nenhum registro encontrado" rows-per-page-text="Linhas por página">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.dateBorn }}</td>
            </template>
            <template slot="pageText" slot-scope="props">
                Linhas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import { mapState } from "vuex"

    export default {
        name: "PeopleList",
        computed : {
            ...mapState({
                list : state => state.list
            })
        },
        data : () => ({
            headers : [
                { text : "Nome", value : "name" },
                { text : "Data de Nascimento", value : "dateBorn" }
            ],
        }),
        created() {
            this.$store.dispatch("list")
        }
    }
</script>

<style scoped>
</style>