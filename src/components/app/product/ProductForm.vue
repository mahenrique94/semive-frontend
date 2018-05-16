<template>
    <Form component="products" :fetching="fetching" :on-submit="save">
        <BreadCrumb :items="['products', 'form']" slot="breadcrumb"/>
        <v-flex xs12>
            <v-select
                clearable
                data-vv-name="product.idType"
                :error-messages="errors.collect('product.idType')"
                :items="types"
                item-text="description"
                item-value="id"
                :label="$t('label.type')"
                :loading="typesFetching"
                v-model="product.idType"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs10>
            <v-text-field
                clearable
                :counter="120"
                data-vv-name="product.description"
                :error-messages="errors.collect('product.description')"
                :label="$t('label.description')"
                v-model="product.description"
                required
                v-validate="'required|max:120'"
            />
        </v-flex>
        <v-flex xs2>
            <v-select
                clearable
                data-vv-name="product.idUnity"
                :error-messages="errors.collect('product.idUnity')"
                :items="unities"
                item-text="unity"
                item-value="id"
                :label="$t('label.unity')"
                :loading="unitiesFetching"
                v-model="product.idUnity"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs6>
            <v-text-field
                clearable
                :counter="30"
                data-vv-name="product.brand"
                :error-messages="errors.collect('product.brand')"
                :label="$t('label.brand')"
                v-model="product.brand"
                v-validate="'max:30'"
            />
        </v-flex>
        <v-flex xs6>
            <v-text-field
                clearable
                :counter="30"
                data-vv-name="product.barCode"
                :error-messages="errors.collect('product.barCode')"
                :label="$t('label.barCode')"
                v-model="product.barCode"
                v-validate="'max:30'"
            />
        </v-flex>
        <v-flex v-if="this.product.id" xs12>
            <v-checkbox
                :label="$t('label.active')"
                v-model="product.active"
            ></v-checkbox>
        </v-flex>
        <v-flex v-if="this.product.id" xs12>
            <v-expansion-panel>
                <v-expansion-panel-content>
                    <div slot="header">{{ $t("tab.stock") }}</div>
                    <v-card>
                        <v-container fluid grid-list-lg>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-text-field
                                        :label="$t('label.count')"
                                        v-model="product.stock.count"
                                        readonly
                                    />
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-content>
                    <div slot="header">{{ $t("tab.value") }}</div>
                    <v-card>
                        <v-container fluid grid-list-lg>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-text-field
                                        :label="$t('label.value')"
                                        v-model="product.value.value"
                                        readonly
                                    />
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
    </Form>
</template>

<script>
    import { mapGetters } from "vuex"

    import Product from "../../../domain/product/Product"

    import BreadCrumb from "../BreadCrumb"
    import Form from "../form/Form"

    export default {
        components : {
            BreadCrumb,
            Form
        },
        computed : {
            ...mapGetters({
                fetching : "product/fetching",
                object : "product/object",
                types : "productType/list",
                typesFetching : "productType/fetching",
                unities : "unity/list",
                unitiesFetching : "unity/fetching"
            })
        },
        created() {
            this.$store.dispatch("unity/list")
            this.$store.dispatch("productType/list")
        },
        data() {
            return {
                product : new Product()
            }
        },
        methods : {
            save(event) {
                event.preventDefault()
                this.$store.dispatch("product/save", this.product)
            }
        },
        mounted() {
            if (this.$route.params.idProduct) {
                this.$store.dispatch("product/edit", this.$route.params.idProduct)
            }
        },
        name: "ProductForm",
        updated() {
            if (this.object.id) {
                this.product = this.object
            }
        }
    }
</script>

<style scoped>
</style>