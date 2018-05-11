<template>
    <Form component="person" :on-submit="save">
        <BreadCrumb :items="['person', 'form']" slot="breadcrumb"/>
        <v-flex xs12>
            <v-text-field
                clearable
                :counter="120"
                data-vv-name="person.name"
                :error-messages="errors.collect('person.name')"
                :label="$t('label.name')"
                v-model="person.name"
                required
                v-validate="'required|max:120'"
            />
        </v-flex>
        <v-flex xs6>
            <v-menu
                :close-on-content-click="true"
                full-width
                min-width="290px"
                :nudge-right="40"
                offset-y
                transition="scale-transition"
            >
                <v-text-field
                    append-icon="event"
                    clearable
                    :counter="10"
                    data-vv-name="person.dateBorn"
                    :error-messages="errors.collect('person.dateBorn')"
                    :label="$t('label.date.born')"
                    :mask="mask('date')"
                    required
                    slot="activator"
                    v-validate="'required|max:10'"
                    :value="person.dateBornBrazilian"
                />
                <v-date-picker :locale="locale" v-model="dateBorn" no-title scrollable/>
            </v-menu>
        </v-flex>
        <v-flex xs3>
            <v-radio-group row :label="$t('label.sex')" v-model="person.sex">
                <v-radio :label="$t('label.female')" value="F"/>
                <v-radio :label="$t('label.male')" value="M"/>
            </v-radio-group>
        </v-flex>
    </Form>
</template>

<script>
    import moment from "moment"

    import Person from "../../../models/Person"

    import BrowserHelper from "../../../helpers/BrowserHelper";
    import MaskHelper from "../../../helpers/MaskHelper";

    import BreadCrumb from "../BreadCrumb"
    import Form from "../form/Form"

    export default {
        components : {
            BreadCrumb,
            Form
        },
        watch : {
            dateBorn(date) {
                this.person.dateBorn = moment(date).toDate()
            }
        },
        data() {
            return {
                dateBorn : null,
                locale : BrowserHelper.getLocale(),
                person : new Person()
            }
        },
        methods : {
            mask(mask) {
                return MaskHelper.MASKS[mask]
            },
            save(event) {
                event.preventDefault()
                this.$store.dispatch("person/save", this.person)
            }
        },
        name: "PersonForm"
    }
</script>

<style scoped>
    .radio-group--row {
        padding-top: 0;
    }
</style>