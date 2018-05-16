<template>
    <div>
        <Form component="orders" :fetching="fetching" :on-submit="save" slot="form">
            <BreadCrumb :items="['orders', 'form']" slot="breadcrumb"/>
            <v-flex xs12>
                <v-select
                    clearable
                    data-vv-name="order.idPerson"
                    :error-messages="errors.collect('order.idPerson')"
                    :items="people"
                    item-text="name"
                    item-value="id"
                    :label="$t('label.person')"
                    :loading="peopleFetching"
                    v-model="order.idPerson"
                    :no-data-text="$t('placeholder.select')"
                    required
                    v-validate="'required'"
                />
            </v-flex>
            <v-flex xs3>
                <v-menu
                    :close-on-content-click="true"
                    full-width
                    min-width="290px"
                    :nudge-right="40"
                    offset-y
                    transition="scale-transition"
                >
                    <v-text-field
                        append-icon="event"
                        clearable
                        :counter="10"
                        data-vv-name="order.dateDelivery"
                        :error-messages="errors.collect('order.dateDelivery')"
                        :label="$t('label.date.delivery')"
                        :mask="mask('date')"
                        required
                        return-masked-value
                        slot="activator"
                        v-validate="'required|max:10|min:10'"
                        :value="order.dateDeliveryBrazilian"
                    />
                    <v-date-picker :locale="locale" v-model="dateDelivery" no-title scrollable/>
                </v-menu>
            </v-flex>
        </Form>
        <OrderTabs v-if="order.id"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import moment from "moment"

    import Order from "../../../domain/order/Order"

    import BrowserHelper from "../../../helpers/BrowserHelper"
    import MaskHelper from "../../../helpers/MaskHelper"

    import BreadCrumb from "../BreadCrumb"
    import Form from "../form/Form"
    import OrderTabs from "./OrderTabs"

    export default {
        components : {
            BreadCrumb,
            Form,
            OrderTabs
        },
        computed : {
            ...mapGetters({
                fetching : "order/fetching",
                object : "order/object",
                people : "person/list",
                peopleFetching : "person/fetching"
            })
        },
        created() {
            this.$store.dispatch("person/list")
        },
        data() {
            return {
                dateDelivery : null,
                locale : BrowserHelper.getLocale(),
                order : new Order()
            }
        },
        methods : {
            mask(mask) {
                return MaskHelper.MASKS[mask]
            },
            save(event) {
                event.preventDefault()
                this.$store.dispatch("order/save", this.order)
            }
        },
        mounted() {
            const idOrder = this.$route.params.idOrder
            if (idOrder) {
                this.$store.dispatch("order/edit", idOrder)
            }
        },
        name: "OrderForm",
        updated() {
            if (this.object.id) {
                this.order = this.object
            }
        },
        watch : {
            dateDelivery(date) {
                this.order.dateDelivery = moment(date).toDate()
            }
        }
    }
</script>

<style scoped>
</style>