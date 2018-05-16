<template>
    <div>
        <PersonContactForm/>
        <Table :columns="['name', 'areaCode', 'telephone', 'cellphone', 'email', 'active']" component="personContact" crud :edit="edit" :fetching="fetching" :headers="headers" :list="list" :remove="remove"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import PersonContactForm from "./PersonContactForm"
    import Table from "../../table/Table"

    export default {
        components : {
            PersonContactForm,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "personContact/fetching",
                list : "personContact/list"
            })
        },
        created() {
            const idPerson = this.$route.params.idPerson
            if (idPerson) {
                this.$store.dispatch("personContact/listByIdPerson", idPerson)
            }
        },
        data() {
            return {
                headers : [
                    { sortable : false, text : this.$t("label.name"), value : "name" },
                    { sortable : false, text : this.$t("label.areaCode"), value : "areaCode" },
                    { sortable : false, text : this.$t("label.telephone"), value : "telephone" },
                    { sortable : false, text : this.$t("label.cellphone"), value : "cellphone" },
                    { sortable : false, text : this.$t("label.email"), value : "email" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            edit(personContact) {
                event.$emit("personContact/edit", personContact.id)
            },
            remove(id) {
                this.$store.dispatch("personContact/remove", id)
            }
        },
        name: "PersonContactList"
    }
</script>

<style scoped>
</style>