<template>
    <div>
        <BreadCrumb :items="['orders', 'list']"/>
        <Table :columns="['person', 'dateDeliveryBrazilian']" component="orders" :fetching="fetching" :headers="headers" :list="list" :remove="remove" search/>
        <New component="orders"/>
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
                fetching : "order/fetching",
                list : "order/list"
            })
        },
        created() {
            this.$store.dispatch("order/list")
        },
        data() {
            return {
                headers : [
                    { text : this.$t("label.person"), value : "person" },
                    { sortable : false, text : this.$t("label.date.delivery"), value : "dateDelivery" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            remove(id) {
                this.$store.dispatch("order/remove", id)
            }
        },
        name: "OrderList"
    }
</script>

<style scoped>
</style>