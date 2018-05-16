<template>
    <FormDialog :on-submit="save" :show="editing" title="item">
        <v-flex xs10>
            <v-select
                clearable
                data-vv-name="orderItem.idProduct"
                :error-messages="errors.collect('orderItem.idProduct')"
                :items="products"
                item-text="description"
                item-value="id"
                :label="$t('label.product')"
                :loading="productsFetching"
                v-model="orderItem.idProduct"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs2>
            <v-text-field
                clearable
                data-vv-name="orderItem.count"
                :error-messages="errors.collect('orderItem.count')"
                :label="$t('label.count')"
                v-model="orderItem.count"
                required
                v-validate="'required'"
            />
        </v-flex>
    </FormDialog>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import FormDialog from "../../form/FormDialog"

    import OrderItem from "../../../../domain/order/item/OrderItem";

    export default {
        components : {
            FormDialog
        },
        computed : {
            ...mapGetters({
                object : "orderItem/object",
                products : "product/list",
                productsFetching : "product/fetching"
            })
        },
        created() {
            this.$store.dispatch("product/list")

            event.$on("orderItem/edit", idOrdemItem => {
                if (idOrdemItem) {
                    this.$store.dispatch("orderItem/edit", idOrdemItem)
                        .then(() => {
                            this.editing = true
                        })
                }
            })
        },
        data() {
            return {
                editing : false,
                orderItem : new OrderItem()
            }
        },
        methods : {
            save() {
                const idOrder = this.$route.params.idOrder
                if (idOrder) {
                    this.orderItem.idOrder = parseInt(idOrder)
                }
                this.$store.dispatch("orderItem/save", this.orderItem)
            }
        },
        mounted() {
            this.$on("closeDialog", editing => {
                this.$store.commit("orderItem/editClear")
                this.orderItem = new OrderItem()
                this.editing = editing
            });
        },
        name: "OrderItemForm",
        updated() {
            if (this.object.id) {
                this.orderItem = this.object
            }
        }
    }
</script>

<style scoped>
</style>