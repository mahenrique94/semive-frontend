<template>
    <div>
        <BreadCrumb :items="['productsType', 'list']"/>
        <Table :columns="['description', 'cattegory', 'active']" component="productsType" :fetching="fetching" :headers="headers" :list="list" :remove="remove" search/>
        <New component="productsType"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    import BreadCrumb from "../../BreadCrumb"
    import New from "../../New"
    import Table from "../../table/Table"

    export default {
        components : {
            BreadCrumb,
            New,
            Table
        },
        computed : {
            ...mapGetters({
                fetching : "productType/fetching",
                list : "productType/list"
            })
        },
        created() {
            this.$store.dispatch("productType/list")
        },
        data() {
            return {
                headers : [
                    { text : this.$t("label.description"), value : "description" },
                    { text : this.$t("label.cattegory"), value : "cattegory" },
                    { sortable : false, text : this.$t("label.active"), value : "active" },
                    { sortable : false, text : "", value : "" }
                ]
            }
        },
        methods : {
            remove(id) {
                this.$store.dispatch("productType/remove", id)
            }
        },
        name: "ProductTypeList"
    }
</script>

<style scoped>
</style>