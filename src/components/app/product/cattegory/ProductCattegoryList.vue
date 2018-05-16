<template>
    <div>
        <BreadCrumb :items="['productsCattegory', 'list']"/>
        <Table :columns="['description', 'active']" component="productsCattegory" :fetching="fetching" :headers="headers" :list="list" :remove="remove" search/>
        <New component="productsCattegory"/>
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
                fetching : "productCattegory/fetching",
                list : "productCattegory/list"
            })
        },
        created() {
            this.$store.dispatch("productCattegory/list")
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
                this.$store.dispatch("productCattegory/remove", id)
            }
        },
        name: "ProductCattegoryList"
    }
</script>

<style scoped>
</style>