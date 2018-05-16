<template>
    <Form component="productsType" :fetching="fetching" :on-submit="save">
        <BreadCrumb :items="['productsType', 'form']" slot="breadcrumb"/>
        <v-flex xs6>
            <v-select
                clearable
                data-vv-name="productType.idCattegory"
                :error-messages="errors.collect('productType.idCattegory')"
                :items="cattegories"
                item-text="description"
                item-value="id"
                :label="$t('label.cattegory')"
                :loading="cattegoriesFetching"
                v-model="productType.idCattegory"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs6>
            <v-text-field
                clearable
                :counter="30"
                data-vv-name="productType.description"
                :error-messages="errors.collect('productType.description')"
                :label="$t('label.description')"
                v-model="productType.description"
                required
                v-validate="'required|max:30'"
            />
        </v-flex>
        <v-flex v-if="this.productType.id" xs12>
            <v-checkbox
                :label="$t('label.active')"
                v-model="productType.active"
            ></v-checkbox>
        </v-flex>
    </Form>
</template>

<script>
    import { mapGetters } from "vuex"

    import ProductType from "../../../../domain/product/type/ProductType"

    import BreadCrumb from "../../BreadCrumb"
    import Form from "../../form/Form"

    export default {
        components : {
            BreadCrumb,
            Form
        },
        computed : {
            ...mapGetters({
                cattegories : "productCattegory/list",
                cattegoriesFetching : "productCattegory/fetching",
                fetching : "productType/fetching",
                object : "productType/object"
            })
        },
        created() {
            this.$store.dispatch("productCattegory/list")
        },
        data() {
            return {
                productType : new ProductType()
            }
        },
        methods : {
            save(event) {
                event.preventDefault()
                this.$store.dispatch("productType/save", this.productType)
            }
        },
        mounted() {
            if (this.$route.params.idType) {
                this.$store.dispatch("productType/edit", this.$route.params.idType)
            }
        },
        name: "ProductTypeForm",
        updated() {
            if (this.object.id) {
                this.productType = this.object
            }
        }
    }
</script>

<style scoped>
</style>