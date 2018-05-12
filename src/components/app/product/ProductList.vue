<template>
    <div>
        <BreadCrumb :items="['products', 'list']"/>
        <Table :columns="['description', 'active']" component="products" :fetching="fetching" :headers="headers" :list="list" :remove="remove" search/>
        <New component="products"/>
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
                fetching : "product/fetching",
                list : "product/list"
            })
        },
        created() {
            this.$store.dispatch("product/list")
        },
        data() {
            return {
                headers : [
                    { text : this.$t("label.description"), value : "description" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            remove(id) {
                this.$store.dispatch("product/remove", id)
            }
        },
        name: "ProductList"
    }
</script>

<style scoped>
</style>