<template>
    <v-btn class="mx-0" @click="onClick()" icon>
        <v-icon :color="color">{{ icon }}</v-icon>
    </v-btn>
</template>

<script>
    export default {
        methods : {
            onClick() {
                this.$swal({
                    cancelButtonColor : "#FF8080",
                    cancelButtonText : this.$t("button.no"),
                    confirmButtonColor : "#00CC99",
                    confirmButtonText : this.$t("button.yes"),
                    showCancelButton : true,
                    showCloseButton : true,
                    text : this.$t("message.confirm.remove"),
                    title : this.$t("title.confirm"),
                    type : "warning"
                }).then(result => result.value && this.onConfirm(...this.parameters))
            }
        },
        name: "Confirm",
        props : {
            color : {
                required : true,
                type : String
            },
            icon : {
                required : true,
                type : String
            },
            onConfirm : {
                required : true,
                type : Function
            },
            parameters : {
                type : Array
            }
        }
    }
</script>

<style scoped>
</style>