import Vue from "vue"
import Vuex from "vuex"
import createLogger from 'vuex/dist/logger'

import person from "./modules/person"

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        person : {
            actions : person.actions,
            namespaced : true,
            getters : person.getters,
            mutations : person.mutations,
            state : person.state,
        }
    },
    plugins : [ createLogger() ]
})