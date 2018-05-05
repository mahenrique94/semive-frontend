<template>
    <div>
        <BreadCrumb :items="['menu.register', 'menu.person']"/>
        <v-btn bottom color="pink" dark fab fixed right to="/cadastro/pessoas/form"><v-icon>add</v-icon></v-btn>
        <Table :headers="headers" :list="list" search/>
    </div>
</template>

<script>
    import * as ActionsTypes from "../../../constants/ActionsTypes"
    import * as GettersTypes from "../../../constants/GettersTypes"
    import { mapGetters } from "vuex"

    import BreadCrumb from "../BreadCrumb"
    import Table from "../table/Table"

    export default {
        components : {
            BreadCrumb,
            Table
        },
        computed : {
            ...mapGetters({
                list : GettersTypes.PERSON_GET_LIST
            })
        },
        created() {
            this.$store.dispatch(ActionsTypes.PERSON_LIST)
        },
        data() {
            return {
                headers : [
                    { text : this.$t("label.name"), value : "name" },
                    { sortable: false, text : this.$t("label.date.born"), value : "dateBorn" },
                    { sortable: false, text: "", value: "" }
                ]
            }
        },
        methods : {
            edit(id) {
                console.log(id)
            },
            remove(id) {
                console.log(id)
            }
        },
        name: "PersonList"
    }
</script>

<style scoped>
    .btn__content .icon {
        display: flex;
    }
</style>