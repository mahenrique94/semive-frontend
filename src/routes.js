import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./components/app/Dashboard"
import People from "./components/app/people/People"
import PeopleList from "./components/app/people/PeopleList"

Vue.use(VueRouter)

export default new VueRouter({
    mode : "history",
    routes : [
        { path : "/", component : Dashboard },
        { path : "/cadastro", children : [
                { path : "pessoas", component : PeopleList },
            ], component : People }
    ]
})