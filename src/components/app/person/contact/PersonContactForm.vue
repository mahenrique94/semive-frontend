<template>
    <FormDialog :on-submit="save" :show="editing" title="contact">
        <v-flex xs12>
            <v-text-field
                clearable
                :counter="120"
                data-vv-name="personContact.name"
                :error-messages="errors.collect('personContact.name')"
                :label="$t('label.name')"
                v-model="personContact.name"
                required
                v-validate="'required|max:120'"
            />
        </v-flex>
        <v-flex xs2>
            <v-text-field
                clearable
                data-vv-name="personContact.areaCode"
                :error-messages="errors.collect('personContact.areaCode')"
                :label="$t('label.areaCode')"
                v-model="personContact.areaCode"
            />
        </v-flex>
        <v-flex xs5>
            <v-text-field
                clearable
                :counter="9"
                data-vv-name="personContact.telephone"
                :error-messages="errors.collect('personContact.telephone')"
                :label="$t('label.telephone')"
                :mask="mask('telephone')"
                v-model="personContact.telephone"
                return-masked-value
                v-validate="'max:9'"
            />
        </v-flex>
        <v-flex xs5>
            <v-text-field
                clearable
                :counter="10"
                data-vv-name="personContact.cellphone"
                :error-messages="errors.collect('personContact.cellphone')"
                :label="$t('label.cellphone')"
                :mask="mask('cellphone')"
                v-model="personContact.cellphone"
                return-masked-value
                v-validate="'max:10'"
            />
        </v-flex>
        <v-flex xs12>
            <v-text-field
                clearable
                :counter="255"
                data-vv-name="personContact.email"
                :error-messages="errors.collect('personContact.email')"
                :label="$t('label.email')"
                v-model="personContact.email"
                v-validate="'max:255'"
            />
        </v-flex>
        <v-flex v-if="this.personContact.id" xs12>
            <v-checkbox
                :label="$t('label.active')"
                v-model="personContact.active"
            ></v-checkbox>
        </v-flex>
    </FormDialog>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import MaskHelper from "../../../../helpers/MaskHelper"

    import FormDialog from "../../form/FormDialog"

    import PersonContact from "../../../../domain/person/contact/PersonContact";

    export default {
        components : {
            FormDialog
        },
        computed : {
            ...mapGetters({
                object : "personContact/object"
            })
        },
        created() {
            event.$on("personContact/edit", idPersonContact => {
                if (idPersonContact) {
                    this.$store.dispatch("personContact/edit", idPersonContact)
                        .then(() => {
                            this.editing = true
                        })
                }
            })
        },
        data() {
            return {
                editing : false,
                personContact : new PersonContact()
            }
        },
        methods : {
            mask(mask) {
                return MaskHelper.MASKS[mask]
            },
            save() {
                const idPerson = this.$route.params.idPerson
                if (idPerson) {
                    this.personContact.idPerson = parseInt(idPerson)
                }
                this.$store.dispatch("personContact/save", this.personContact)
            }
        },
        mounted() {
            this.$on("closeDialog", editing => {
                this.$store.commit("personContact/editClear")
                this.personContact = new PersonContact()
                this.editing = editing
            });
        },
        name: "PersonContactForm",
        updated() {
            if (this.object.id) {
                this.personContact = this.object
            }
        }
    }
</script>

<style scoped>
</style>