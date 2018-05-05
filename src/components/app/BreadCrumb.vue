<template>
    <v-card>
        <v-card-title class="pa-1">
            <v-breadcrumbs divider="/" large>
                <v-icon slot="divider">chevron_right</v-icon>
                <v-breadcrumbs-item :to="$t(`link.${item}`)" v-for="item in items" :key="item">{{ $t(`menu.${item}`) }}</v-breadcrumbs-item>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: "BreadCrumb",
        props : {
            items : {
                required : true,
                type : Array
            }
        }
    }
</script>

<style scoped>

</style>