import Vue from "vue"
import Vuex from "vuex"
import createLogger from 'vuex/dist/logger'

import people from "./modules/people"

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        people
    },
    plugins : [ createLogger() ]
})