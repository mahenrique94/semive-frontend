<template>
    <Form component="productsCattegory" :fetching="fetching" :on-submit="save">
        <BreadCrumb :items="['productsCattegory', 'form']" slot="breadcrumb"/>
        <v-flex xs12>
            <v-text-field
                clearable
                :counter="30"
                data-vv-name="productCattegory.description"
                :error-messages="errors.collect('productCattegory.description')"
                :label="$t('label.description')"
                v-model="productCattegory.description"
                required
                v-validate="'required|max:30'"
            />
        </v-flex>
        <v-flex v-if="this.productCattegory.id" xs12>
            <v-checkbox
                :label="$t('label.active')"
                v-model="productCattegory.active"
            ></v-checkbox>
        </v-flex>
    </Form>
</template>

<script>
    import { mapGetters } from "vuex"

    import ProductCattegory from "../../../../domain/product/cattegory/ProductCattegory"

    import BreadCrumb from "../../BreadCrumb"
    import Form from "../../form/Form"

    export default {
        components : {
            BreadCrumb,
            Form
        },
        computed : {
            ...mapGetters({
                fetching : "productCattegory/fetching",
                object : "productCattegory/object"
            })
        },
        data() {
            return {
                productCattegory : new ProductCattegory()
            }
        },
        methods : {
            save(event) {
                event.preventDefault()
                this.$store.dispatch("productCattegory/save", this.productCattegory)
            }
        },
        mounted() {
            if (this.$route.params.idCattegory) {
                this.$store.dispatch("productCattegory/edit", this.$route.params.idCattegory)
            }
        },
        name: "ProductCattegoryForm",
        updated() {
            if (this.object.id) {
                this.productCattegory = this.object
            }
        }
    }
</script>

<style scoped>
</style>