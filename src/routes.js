import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./components/app/Dashboard"
import PersonForm from "./components/app/person/PersonForm"
import PersonList from "./components/app/person/PersonList"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : "history",
    routes : [
        { path : "/", component : Dashboard, name : "Dashboard" },
        { path : "/pessoas", component : PersonList, name : "PersonList" },
        { path : "/pessoas/form", component : PersonForm, name : "PersonForm" },
        { path : "/pessoas/:id", component : PersonForm, name : "PersonEdit" }
    ]
})