<template>
    <div>
        <OrderItemForm/>
        <Table :columns="['product', 'count']" component="ordersItem" crud :edit="edit" :fetching="fetching" :headers="headers" :list="list" :remove="remove"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import OrderItemForm from "./OrderItemForm"
    import Table from "../../table/Table"

    export default {
        components : {
            OrderItemForm,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "orderItem/fetching",
                list : "orderItem/list"
            })
        },
        created() {
            const idOrder = this.$route.params.idOrder
            if (idOrder) {
                this.$store.dispatch("orderItem/listByIdOrder", idOrder)
            }
        },
        data() {
            return {
                headers : [
                    { sortable : false, text : this.$t("label.product"), value : "product" },
                    { sortable : false, text : this.$t("label.count"), value : "count" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            edit(orderItem) {
                event.$emit("orderItem/edit", orderItem.id)
            },
            remove(id) {
                this.$store.dispatch("orderItem/remove", id)
            }
        },
        name: "OrderItemList"
    }
</script>

<style scoped>
</style>