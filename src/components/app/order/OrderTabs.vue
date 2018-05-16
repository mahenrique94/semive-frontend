<template>
    <v-tabs centered color="cyan" dark icons-and-text height="55">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab href="#order-item">
            {{ $t("tab.item") }}
            <v-icon>list</v-icon>
        </v-tab>
        <v-tab-item id="order-item">
            <OrderItemList/>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import OrderItemList from "./item/OrderItemList"

    export default {
        components : {
            OrderItemList
        },
        name: "OrderTabs"
    }
</script>

<style scoped>
    .tabs {
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        padding: 1rem;
    }
</style>