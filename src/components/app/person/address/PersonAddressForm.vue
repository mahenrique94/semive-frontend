<template>
    <FormDialog :on-submit="save" :show="editing" title="address">
        <v-flex xs3>
            <v-select
                clearable
                data-vv-name="personAddress.idType"
                :error-messages="errors.collect('personAddress.idType')"
                :items="types"
                item-text="description"
                item-value="id"
                :label="$t('label.type')"
                :loading="typesFetching"
                v-model="personAddress.idType"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs7>
            <v-text-field
                clearable
                :counter="60"
                data-vv-name="personAddress.address"
                :error-messages="errors.collect('personAddress.address')"
                :label="$t('label.address')"
                v-model="personAddress.value"
                required
                v-validate="'required|max:60'"
            />
        </v-flex>
        <v-flex xs2>
            <v-text-field
                clearable
                :counter="10"
                data-vv-name="personAddress.zipCode"
                :error-messages="errors.collect('personAddress.zipCode')"
                :label="$t('label.zipCode')"
                mask="#####-###"
                v-model="personAddress.zipCode"
                required
                v-validate="'required|max:10'"
            />
        </v-flex>
        <v-flex xs2>
            <v-text-field
                clearable
                :counter="10"
                data-vv-name="personAddress.number"
                :error-messages="errors.collect('personAddress.number')"
                :label="$t('label.number')"
                v-model="personAddress.number"
                required
                v-validate="'required|max:10'"
            />
        </v-flex>
        <v-flex xs7>
            <v-text-field
                clearable
                :counter="60"
                data-vv-name="personAddress.district"
                :error-messages="errors.collect('personAddress.district')"
                :label="$t('label.district')"
                v-model="personAddress.district"
                required
                v-validate="'required|max:60'"
            />
        </v-flex>
        <v-flex xs3>
            <v-text-field
                clearable
                :counter="30"
                data-vv-name="personAddress.complement"
                :error-messages="errors.collect('personAddress.complement')"
                :label="$t('label.complement')"
                v-model="personAddress.complement"
                required
                v-validate="'required|max:30'"
            />
        </v-flex>
        <v-flex xs2>
            <v-select
                clearable
                data-vv-name="personAddress.idState"
                :error-messages="errors.collect('personAddress.idState')"
                :items="states"
                item-text="state"
                item-value="id"
                :label="$t('label.state')"
                :loading="statesFetching"
                v-model="personAddress.idState"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex xs10>
            <v-select
                clearable
                data-vv-name="personAddress.idCity"
                :error-messages="errors.collect('personAddress.idCity')"
                :items="cities"
                item-text="description"
                item-value="id"
                :label="$t('label.city')"
                :loading="citiesFetching"
                v-model="personAddress.idCity"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
    </FormDialog>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import FormDialog from "../../form/FormDialog"

    import PersonAddress from "../../../../domain/person/address/PersonAddress";

    export default {
        components : {
            FormDialog
        },
        computed : {
            ...mapGetters({
                object : "personDocument/object",
                states : "state/list",
                statesFetching : "state/fetching",
                types : "addressType/list",
                typesFetching : "addressType/fetching"
            })
        },
        created() {
            this.$store.dispatch("addressType/list")
            this.$store.dispatch("state/list")

            event.$on("personAddress/edit", idPersonAddress => {
                if (idPersonAddress) {
                    this.$store.dispatch("personAddress/edit", idPersonAddress)
                        .then(() => {
                            this.editing = true
                        })
                }
            })
        },
        data() {
            return {
                editing : false,
                personAddress : new PersonAddress()
            }
        },
        methods : {
            save() {
                const idPerson = this.$route.params.idPerson
                if (idPerson) {
                    this.personAddress.idPerson = parseInt(idPerson)
                }
                this.$store.dispatch("personAddress/save", this.personAddress)
            }
        },
        mounted() {
            this.$on("closeDialog", editing => {
                this.$store.commit("personAddress/editClear")
                this.personAddress = new PersonAddress()
                this.editing = editing
            });
        },
        name: "PersonAddressForm",
        updated() {
            if (this.object.id) {
                this.personAddress = this.object
            }
        }
    }
</script>

<style scoped>
</style>