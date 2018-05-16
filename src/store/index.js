import Vue from "vue"
import Vuex from "vuex"
import createLogger from 'vuex/dist/logger'

import addressType from "./modules/address/type"
import city from "./modules/city"
import documentType from "./modules/document/type"
import person from "./modules/person"
import personAddress from "./modules/person/address"
import personContact from "./modules/person/contact"
import personDefinition from "./modules/person/definition"
import personDocument from "./modules/person/document"
import personGroup from "./modules/person/group"
import product from "./modules/product"
import productCattegory from "./modules/product/cattegory"
import productType from "./modules/product/type"
import state from "./modules/state"
import unity from "./modules/unity"

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
        city : {
            actions : city.actions,
            namespaced : true,
            getters : city.getters,
            mutations : city.mutations,
            state : city.state
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
        personContact : {
            actions : personContact.actions,
            namespaced : true,
            getters : personContact.getters,
            mutations : personContact.mutations,
            state : personContact.state
        },
        personDefinition : {
            actions : personDefinition.actions,
            namespaced : true,
            getters : personDefinition.getters,
            mutations : personDefinition.mutations,
            state : personDefinition.state
        },
        personDocument : {
            actions : personDocument.actions,
            namespaced : true,
            getters : personDocument.getters,
            mutations : personDocument.mutations,
            state : personDocument.state
        },
        personGroup : {
            actions : personGroup.actions,
            namespaced : true,
            getters : personGroup.getters,
            mutations : personGroup.mutations,
            state : personGroup.state
        },
        product : {
            actions : product.actions,
            namespaced : true,
            getters : product.getters,
            mutations : product.mutations,
            state : product.state
        },
        productCattegory : {
            actions : productCattegory.actions,
            namespaced : true,
            getters : productCattegory.getters,
            mutations : productCattegory.mutations,
            state : productCattegory.state
        },
        productType : {
            actions : productType.actions,
            namespaced : true,
            getters : productType.getters,
            mutations : productType.mutations,
            state : productType.state
        },
        state : {
            actions : state.actions,
            namespaced : true,
            getters : state.getters,
            mutations : state.mutations,
            state : state.state
        },
        unity : {
            actions : unity.actions,
            namespaced : true,
            getters : unity.getters,
            mutations : unity.mutations,
            state : unity.state
        }
    },
    plugins : [ createLogger() ]
})