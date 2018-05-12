import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./components/app/Dashboard"
import PersonForm from "./components/app/person/PersonForm"
import PersonList from "./components/app/person/PersonList"
import ProductForm from "./components/app/product/ProductForm"
import ProductList from "./components/app/product/ProductList"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : "history",
    routes : [
        { path : "/", component : Dashboard, name : "Dashboard" },
        { path : "/person", component : PersonList, name : "PersonList" },
        { path : "/person/form", component : PersonForm, name : "PersonForm" },
        { path : "/person/:id", component : PersonForm, name : "PersonEdit" },
        { path : "/product", component : ProductList, name : "ProductList" },
        { path : "/product/form", component : ProductForm, name : "ProductForm" },
        { path : "/product/:id", component : ProductForm, name : "ProductEdit" }
    ]
})