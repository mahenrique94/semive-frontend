<template>
    <v-card class="mt-4" :style="styles">
        <v-container class="pt-0" fluid v-if="search">
            <v-layout row wrap>
                <v-spacer/>
                <v-flex xs4>
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
                <td v-for="column in columns" :key="column">
                    <div v-if="typeof props.item[column] === 'boolean'">
                        <v-icon color="cyan" v-if="props.item[column]">done</v-icon>
                        <v-icon color="pink" v-else>clear</v-icon>
                    </div>
                    <div v-else>{{ props.item[column] }}</div>
                </td>
                <td class="justify-center layout px-0">
                    <v-btn class="mx-0" icon v-if="!edit" :to="`${$t(`link.${component}`)}/${props.item.id}`">
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn class="mx-0" icon v-if="edit" @click="edit(props.item)">
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <Confirm color="pink" icon="delete" :onConfirm="remove" :parameters="[ props.item.id ]"/>
                </td>
            </template>
            <template slot="pageText" slot-scope="props">
                {{ $t("message.table.lines") }} {{ props.pageStart }} - {{ props.pageStop }} {{ $t("message.table.of") }} {{ props.itemsLength }}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import Confirm from "../Confirm"

    import ArrayHelper from "../../../helpers/ArrayHelper"

    export default {
        components : {
            Confirm
        },
        data() {
            return {
                filter : "",
                styles : this.crud ? "margin-top: 0 !important;" : ""
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
            crud : {
                default : false,
                type : Boolean
            },
            edit : {
                type : Function
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