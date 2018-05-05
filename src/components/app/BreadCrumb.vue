<template>
    <v-card>
        <v-card-title class="pa-1">
            <v-breadcrumbs divider="/">
                <v-breadcrumbs-item v-for="item in items" :key="item">{{ $t(item) }}</v-breadcrumbs-item>
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