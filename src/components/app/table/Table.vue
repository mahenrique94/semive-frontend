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
            disable-initial-sort
            :headers="headers"
            :hide-actions="checkList()"
            :loading="fetching"
            :items="list"
            :no-data-text="$t('message.table.empty')"
            :no-results-text="$t('message.table.noResult')"
            :rows-per-page-items="[10, 25, 50, 100, {'text' : $t('label.all'), 'value' : -1}]"
            :rows-per-page-text="$t('message.table.linePerPage')"
            :search="filter"
        >
            <template slot="items" slot-scope="props">
                <td v-for="column in columns" :key="column">{{ props.item[column] }}</td>
                <td class="justify-center layout px-0">
                    <v-btn class="mx-0" icon :to="`${$t(`link.${component}`)}/${props.item.id}`">
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
            columns : {
                required : true,
                type : Array
            },
            component : {
                required : true,
                type : String
            },
            fetching : {
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
            },
            remove : {
                required : true,
                type : Function
            },
            search : {
                default : () => false,
                type : Boolean
            }
        }
    }
</script>

<style scoped>
</style>