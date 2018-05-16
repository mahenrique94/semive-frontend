import Vue from "vue"
import Vuex from "vuex"
import createLogger from 'vuex/dist/logger'

import addressType from "./modules/address/type"
import documentType from "./modules/document/type"
import person from "./modules/person"
import personAddress from "./modules/person/address"
import personDocument from "./modules/person/document"
import product from "./modules/product"
import state from "./modules/state"

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        addressType : {
            actions : addressType.actions,
            namespaced : true,
            getters : addressType.getters,
            mutations : addressType.mutations,
            state : addressType.state
        },
        documentType : {
            actions : documentType.actions,
            namespaced : true,
            getters : documentType.getters,
            mutations : documentType.mutations,
            state : documentType.state
        },
        person : {
            actions : person.actions,
            namespaced : true,
            getters : person.getters,
            mutations : person.mutations,
            state : person.state
        },
        personAddress : {
            actions : personAddress.actions,
            namespaced : true,
            getters : personAddress.getters,
            mutations : personAddress.mutations,
            state : personAddress.state
        },
        personDocument : {
            actions : personDocument.actions,
            namespaced : true,
            getters : personDocument.getters,
            mutations : personDocument.mutations,
            state : personDocument.state
        },
        product : {
            actions : product.actions,
            namespaced : true,
            getters : product.getters,
            mutations : product.mutations,
            state : product.state
        },
        state : {
            actions : state.actions,
            namespaced : true,
            getters : state.getters,
            mutations : state.mutations,
            state : state.state
        }
    },
    plugins : [ createLogger() ]
})