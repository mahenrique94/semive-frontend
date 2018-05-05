<template>
    <Form component="person" :on-submit="save">
        <BreadCrumb :items="['person']"/>
        <v-container>
            <v-layout>
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
            </v-layout>
        </v-container>
    </Form>
</template>

<script>
    import Person from "../../../models/Person"

    import BreadCrumb from "../BreadCrumb"
    import Form from "../form/Form"

    export default {
        $_veeValidate : {
            validator : "new"
        },
        components : {
            BreadCrumb,
            Form
        },
        data() {
            return {
                person : new Person()
            }
        },
        methods : {
            save(event) {
                event.preventDefault()
                console.log("Saving...")
            }
        },
        name: "PersonForm"
    }
</script>

<style scoped>
</style>