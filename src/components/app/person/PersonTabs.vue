<template>
    <v-tabs centered color="cyan" dark icons-and-text height="55">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab href="#person-contact">
            {{ $t("tab.contact") }}
            <v-icon>question_answer</v-icon>
        </v-tab>
        <v-tab href="#person-definition">
            {{ $t("tab.definition") }}
            <v-icon>perm_identity</v-icon>
        </v-tab>
        <v-tab href="#person-document">
            {{ $t("tab.document") }}
            <v-icon>account_box</v-icon>
        </v-tab>
        <v-tab href="#person-address">
            {{ $t("tab.address") }}
            <v-icon>location_on</v-icon>
        </v-tab>
        <v-tab-item id="person-contact">
            <PersonContactList/>
        </v-tab-item>
        <v-tab-item id="person-definition">
            <PersonDefinitionList/>
        </v-tab-item>
        <v-tab-item id="person-document">
            <PersonDocumentList/>
        </v-tab-item>
        <v-tab-item id="person-address">
            <PersonAddressList/>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import PersonAddressList from "./address/PersonAddressList"
    import PersonContactList from "./contact/PersonContactList"
    import PersonDefinitionList from "./definition/PersonDefinitionList"
    import PersonDocumentList from "./document/PersonDocumentList"

    export default {
        components : {
            PersonAddressList,
            PersonContactList,
            PersonDefinitionList,
            PersonDocumentList
        },
        name: "PersonTabs"
    }
</script>

<style scoped>
    .tabs {
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        padding: 1rem;
    }
</style>