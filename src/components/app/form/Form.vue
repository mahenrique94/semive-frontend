<template>
    <form @submit="onSubmit">
        <slot></slot>
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
</style>