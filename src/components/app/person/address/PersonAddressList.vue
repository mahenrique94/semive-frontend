<template>
    <div>
        <PersonAddressForm/>
        <Table :columns="['address', 'number', 'zipCode', 'district', 'active']" component="personAddress" crud :edit="edit" :fetching="fetching" :headers="headers" :list="list" :remove="remove"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import PersonAddressForm from "./PersonAddressForm"
    import Table from "../../table/Table"

    export default {
        components : {
            PersonAddressForm,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "personAddress/fetching",
                list : "personAddress/list"
            })
        },
        created() {
            const idPerson = this.$route.params.idPerson
            if (idPerson) {
                this.$store.dispatch("personAddress/listByIdPerson", idPerson)
            }
        },
        data() {
            return {
                headers : [
                    { sortable : false, text : this.$t("label.address"), value : "address" },
                    { sortable : false, text : this.$t("label.number"), value : "number" },
                    { sortable : false, text : this.$t("label.zipCode"), value : "zipCode" },
                    { sortable : false, text : this.$t("label.district"), value : "district" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            edit(personAddress) {
                event.$emit("personAddress/edit", personAddress.id)
            },
            remove(id) {
                this.$store.dispatch("personAddress/remove", id)
            }
        },
        name: "PersonAddressList"
    }
</script>

<style scoped>
</style>