<template>
    <form class="form" @submit="onSubmit">
        <slot name="breadcrumb"></slot>
        <v-container class="form__body" fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex align-center v-if="fetching" justify-center xs12 style="text-align: center">
                    <v-progress-circular color="primary" indeterminate :size="35"/>
                </v-flex>
                <slot v-if="!fetching"></slot>
            </v-layout>
        </v-container>
        <FormActions :component="component"/>
    </form>
</template>

<script>
    import FormActions from "../form/FormActions"

    export default {
        components : {
            FormActions
        },
        name: "Form",
        props : {
            fetching : {
                default : false,
                type : Boolean
            },
            component : {
                required : true,
                type : String
            },
            onSubmit : {
                required : true,
                type : Function
            }
        }
    }
</script>

<style scoped>
    .form__body {
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        margin: 1.75rem 0;
        padding: 1rem;
    }
</style>