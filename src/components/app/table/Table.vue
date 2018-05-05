<template>
    <v-card class="mt-4">
        <v-container class="pt-0" fluid>
            <v-layout row wrap>
                <v-spacer/>
                <v-flex v-if="search" xs4>
                    <v-text-field append-icon="search" hide-details :label="$t('placeholder.search')" v-model="filter" single-line/>
                </v-flex>
            </v-layout>
        </v-container>
        <v-data-table
            class="elevation-1"
            :headers="headers"
            :hide-actions="checkList()"
            :items="list"
            :no-data-text="$t('message.table.empty')"
            :no-results-text="$t('message.table.noResult')"
            :rows-per-page-text="$t('message.table.linePerPage')"
            :search="filter"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.dateBorn_brazilian }}</td>
                <td class="justify-center layout px-0">
                    <v-btn class="mx-0" @click="edit(props.item.id)" icon>
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn class="mx-0" @click="remove(props.item.id)" icon>
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>
            </template>
            <template slot="pageText" slot-scope="props">
                {{ $t("message.table.lines") }} {{ props.pageStart }} - {{ props.pageStop }} {{ $t("message.table.of") }} {{ props.itemsLength }}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import ArrayHelper from "../../../helpers/ArrayHelper"

    export default {
        data() {
            return {
                filter : ""
            }
        },
        methods : {
            checkList() {
                return ArrayHelper.isEmpty(this.list)
            }
        },
        name: "Table",
        props : {
            search : {
                default : () => false,
                type : Boolean
            },
            headers : {
                required : true,
                type : Array
            },
            list : {
                required : true,
                type : Array
            }
        }
    }
</script>

<style scoped>
</style>