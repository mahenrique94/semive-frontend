<template>
    <form class="form" @submit="onSubmit">
        <slot name="breadcrumb"/>
        <v-container class="form__body" fluid grid-list-lg :style="styles()">
            <v-layout row wrap>
                <v-flex align-center v-if="fetching" justify-center xs12 style="text-align: center">
                    <v-progress-circular color="primary" indeterminate :size="35"/>
                </v-flex>
                <slot v-if="!fetching"/>
            </v-layout>
        </v-container>
        <FormActions :component="component" v-if="!modal"/>
    </form>
</template>

<script>
    import FormActions from "../form/FormActions"

    export default {
        components : {
            FormActions
        },
        methods : {
            styles() {
                let styles = ""
                if (this.modal) {
                    styles += "border: none;"
                    styles += "margin: 0;"
                    styles += "paddiing: 0;"
                }
                return styles
            }
        },
        name: "Form",
        props : {
            component : {
                required : true,
                type : String
            },
            fetching : {
                default : false,
                type : Boolean
            },
            modal : {
                default : false,
                type : Boolean
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