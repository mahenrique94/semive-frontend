<template>
    <form class="form" @submit="onSubmit">
        <slot name="breadcrumb"></slot>
        <v-container class="form__body" fluid grid-list-lg>
            <v-layout row wrap>
                <slot></slot>
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