import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./components/app/Dashboard"
import Person from "./components/app/person/Person"
import PersonList from "./components/app/person/PersonList"

Vue.use(VueRouter)

export default new VueRouter({
    mode : "history",
    routes : [
        { path : "/", component : Dashboard },
        { path : "/cadastro", component : Person, children : [
                { path : "pessoas", component : PersonList },
            ]
        }
    ]
})