import Vue from "vue"
import Vuex from "vuex"
import createLogger from 'vuex/dist/logger'

import documentType from "./modules/document/type/"
import person from "./modules/person"
import personDocument from "./modules/person/document"
import product from "./modules/product"

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        documentType : {
            actions : documentType.actions,
            namespaced : true,
            getters : documentType.getters,
            mutations : documentType.mutations,
            state : documentType.state,
        },
        person : {
            actions : person.actions,
            namespaced : true,
            getters : person.getters,
            mutations : person.mutations,
            state : person.state,
        },
        personDocument : {
            actions : personDocument.actions,
            namespaced : true,
            getters : personDocument.getters,
            mutations : personDocument.mutations,
            state : personDocument.state,
        },
        product : {
            actions : product.actions,
            namespaced : true,
            getters : product.getters,
            mutations : product.mutations,
            state : product.state,
        }
    },
    plugins : [ createLogger() ]
})