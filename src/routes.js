import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./components/app/Dashboard"
import PersonForm from "./components/app/person/PersonForm"
import PersonList from "./components/app/person/PersonList"

Vue.use(VueRouter)

export default new VueRouter({
    mode : "history",
    routes : [
        { path : "/", component : Dashboard },
        { path : "/pessoas", component : PersonList },
        { path : "/pessoas/form", component : PersonForm }
    ]
})