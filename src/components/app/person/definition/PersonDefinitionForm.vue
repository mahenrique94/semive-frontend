<template>
    <FormDialog :on-submit="save" :show="editing" title="definition">
        <v-flex xs12>
            <v-select
                clearable
                data-vv-name="personDefinition.idGroup"
                :error-messages="errors.collect('personDefinition.idGroup')"
                :items="groups"
                item-text="description"
                item-value="id"
                :label="$t('label.group')"
                :loading="groupsFetching"
                v-model="personDefinition.idGroup"
                :no-data-text="$t('placeholder.select')"
                required
                v-validate="'required'"
            />
        </v-flex>
        <v-flex v-if="this.personDefinition.id" xs12>
            <v-checkbox
                :label="$t('label.active')"
                v-model="personDefinition.active"
            ></v-checkbox>
        </v-flex>
    </FormDialog>
</template>

<script>
    import { mapGetters } from "vuex"
    import { event } from "../../../../event"

    import FormDialog from "../../form/FormDialog"

    import PersonDefinition from "../../../../domain/person/definition/PersonDefinition";

    export default {
        components : {
            FormDialog
        },
        computed : {
            ...mapGetters({
                object : "personDefinition/object",
                groups : "personGroup/list",
                groupsFetching : "personGroup/fetching"
            })
        },
        created() {
            this.$store.dispatch("personGroup/list")

            event.$on("personDefinition/edit", idPersonDefinition => {
                if (idPersonDefinition) {
                    this.$store.dispatch("personDefinition/edit", idPersonDefinition)
                        .then(() => {
                            this.editing = true
                        })
                }
            })
        },
        data() {
            return {
                editing : false,
                personDefinition : new PersonDefinition()
            }
        },
        methods : {
            save() {
                const idPerson = this.$route.params.idPerson
                if (idPerson) {
                    this.personDefinition.idPerson = parseInt(idPerson)
                }
                this.$store.dispatch("personDefinition/save", this.personDefinition)
            }
        },
        mounted() {
            this.$on("closeDialog", editing => {
                this.$store.commit("personDefinition/editClear")
                this.personDefinition = new PersonDefinition()
                this.editing = editing
            });
        },
        name: "PersonDefinitionForm",
        updated() {
            if (this.object.id) {
                this.personDefinition = this.object
            }
        }
    }
</script>

<style scoped>
</style>