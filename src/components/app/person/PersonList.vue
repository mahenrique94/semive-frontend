<template>
    <div>
        <BreadCrumb :items="['person', 'list']"/>
        <Table :columns="['name', 'fullSex', 'dateBornBrazilian', 'active']" component="person" :fetching="fetching" :headers="headers" :list="list" :remove="remove" search/>
        <New component="person"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    import BreadCrumb from "../BreadCrumb"
    import New from "../New"
    import Table from "../table/Table"

    export default {
        components : {
            BreadCrumb,
            New,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "person/fetching",
                list : "person/list"
            })
        },
        created() {
            this.$store.dispatch("person/list")
        },
        data() {
            return {
                headers : [
                    { text : this.$t("label.name"), value : "name" },
                    { sortable : false, text : this.$t("label.sex"), value : "sex" },
                    { sortable : false, text : this.$t("label.date.born"), value : "dateBorn" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            remove(id) {
                console.log(id)
            }
        },
        name: "PersonList"
    }
</script>

<style scoped>
</style>