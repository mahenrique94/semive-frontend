<template>
    <FormDialog :on-submit="save" title="document">
        <v-flex xs3>
            <v-select
                clearable
                data-vv-name="personDocument.idType"
                :error-messages="errors.collect('personDocument.idType')"
                :items="types"
                item-text="description"
                item-value="id"
                :label="$t('label.document')"
                :loading="typesFetching"
                v-model="personDocument.idType"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs9>
            <v-text-field
                clearable
                :counter="30"
                data-vv-name="personDocument.value"
                :error-messages="errors.collect('personDocument.value')"
                :label="$t('label.value')"
                v-model="personDocument.value"
                required
                v-validate="'required|max:30'"
            />
        </v-flex>
    </FormDialog>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import FormDialog from "../../form/FormDialog"

    import PersonDocument from "../../../../domain/person/document/PersonDocument";

    export default {
        components : {
            FormDialog
        },
        computed : {
            ...mapGetters({
                object : "documentType/object",
                types : "documentType/list",
                typesFetching : "documentType/fetching"
            })
        },
        created() {
            this.$store.dispatch("documentType/list")

            event.$on("personDocument/edit", idPersonDocument => {
                if (idPersonDocument) {
                    this.$store.dispatch("personDocument/edit", idPersonDocument)
                }
            })

            if (this.object.ic) {
                this.personDocument = this.object
            }
        },
        data() {
            return {
                personDocument : new PersonDocument()
            }
        },
        methods : {
            save() {
                const idPerson = this.$route.params.idPerson
                if (idPerson) {
                    this.personDocument.idPerson = parseInt(idPerson)
                }
                this.$store.dispatch("personDocument/save", this.personDocument)
            }
        },
        name: "PersonDocumentForm"
    }
</script>

<style scoped>

</style>