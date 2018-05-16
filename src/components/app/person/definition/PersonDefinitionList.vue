<template>
    <div>
        <PersonDefinitionForm/>
        <Table :columns="['group', 'active']" component="personDefinition" crud :edit="edit" :fetching="fetching" :headers="headers" :list="list" :remove="remove"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import PersonDefinitionForm from "./PersonDefinitionForm"
    import Table from "../../table/Table"

    export default {
        components : {
            PersonDefinitionForm,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "personDefinition/fetching",
                list : "personDefinition/list"
            })
        },
        created() {
            const idPerson = this.$route.params.idPerson
            if (idPerson) {
                this.$store.dispatch("personDefinition/listByIdPerson", idPerson)
            }
        },
        data() {
            return {
                headers : [
                    { sortable : false, text : this.$t("label.group"), value : "group" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            edit(personDefinition) {
                event.$emit("personDefinition/edit", personDefinition.id)
            },
            remove(id) {
                this.$store.dispatch("personDefinition/remove", id)
            }
        },
        name: "PersonDefinitionList"
    }
</script>

<style scoped>
</style>