<template>
    <v-dialog max-width="920px" v-model="dialog" persistent>
        <v-btn class="mb-2" color="primary" dark slot="activator"><v-icon>add</v-icon>{{ $t("button.new")}}</v-btn>
        <v-card>
            <v-card-title>
                <span class="headline">{{ $t(`title.form.${title}`) }}</span>
            </v-card-title>
            <v-card-text class="pa-0">
                <Form component="" modal :on-submit="onSubmit">
                    <slot></slot>
                </Form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="close">{{ $t("button.cancel") }}</v-btn>
                <v-btn color="blue darken-1" flat @click="save">{{ $t("button.save") }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import Form from "./Form"

    export default {
        components : {
            Form
        },
        data() {
            return {
                dialog : false
            }
        },
        methods : {
            close() {
                this.dialog = !this.dialog
                this.$parent.$emit("closeDialog", this.dialog)
            },
            save() {
                this.onSubmit()
                this.close()
            }
        },
        name: "FormDialog",
        props : {
            onSubmit : {
                required : true,
                type : Function
            },
            show : {
                default : false,
                type : Boolean
            },
            title : {
                required : true,
                type : String
            }
        },
        watch : {
            show : function(value) {
                this.dialog = value
            }
        }
    }
</script>

<style scoped>

</style>