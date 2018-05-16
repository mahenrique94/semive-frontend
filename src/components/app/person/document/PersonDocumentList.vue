<template>
    <div>
        <PersonDocumentForm/>
        <Table :columns="['document', 'value', 'active']" component="personDocument" crud :edit="edit" :fetching="fetching" :headers="headers" :list="list" :remove="remove"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import PersonDocumentForm from "./PersonDocumentForm"
    import Table from "../../table/Table"

    export default {
        components : {
            PersonDocumentForm,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "personDocument/fetching",
                list : "personDocument/list"
            })
        },
        created() {
            const idPerson = this.$route.params.idPerson
            if (idPerson) {
                this.$store.dispatch("personDocument/listByIdPerson", idPerson)
            }
        },
        data() {
            return {
                headers : [
                    { sortable : false, text : this.$t("label.document"), value : "document" },
                    { sortable : false, text : this.$t("label.value"), value : "value" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            edit(personDocument) {
                event.$emit("personDocument/edit", personDocument.id)
            },
            remove(id) {
                this.$store.dispatch("personDocument/remove", id)
            }
        },
        name: "PersonDocumentList"
    }
</script>

<style scoped>
</style>