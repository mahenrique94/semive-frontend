import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./components/app/Dashboard"
import OrderForm from "./components/app/order/OrderForm"
import OrderList from "./components/app/order/OrderList"
import PersonForm from "./components/app/person/PersonForm"
import PersonList from "./components/app/person/PersonList"
import ProductCattegoryForm from "./components/app/product/cattegory/ProductCattegoryForm"
import ProductCattegoryList from "./components/app/product/cattegory/ProductCattegoryList"
import ProductTypeForm from "./components/app/product/type/ProductTypeForm"
import ProductTypeList from "./components/app/product/type/ProductTypeList"
import ProductForm from "./components/app/product/ProductForm"
import ProductList from "./components/app/product/ProductList"

import i18n from "./translate"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : "history",
    routes : [
        { path : i18n.t("link.dashboard"), component : Dashboard, name : "Dashboard" },
        { path : i18n.t("link.orders"), component : OrderList, name : "OrderList" },
        { path : `${i18n.t("link.orders")}/form`, component : OrderForm, name : "OrderForm" },
        { path : `${i18n.t("link.orders")}/:idOrder`, component : OrderForm, name : "OrderEdit" },
        { path : i18n.t("link.person"), component : PersonList, name : "PersonList" },
        { path : `${i18n.t("link.person")}/form`, component : PersonForm, name : "PersonForm" },
        { path : `${i18n.t("link.person")}/:idPerson`, component : PersonForm, name : "PersonEdit" },
        { path : i18n.t("link.productsCattegory"), component : ProductCattegoryList, name : "ProductCattegoryList" },
        { path : `${i18n.t("link.productsCattegory")}/form`, component : ProductCattegoryForm, name : "ProductCattegoryForm" },
        { path : `${i18n.t("link.productsCattegory")}/:idCattegory`, component : ProductCattegoryForm, name : "ProductCattegoryEdit" },
        { path : i18n.t("link.productsType"), component : ProductTypeList, name : "ProductTypeList" },
        { path : `${i18n.t("link.productsType")}/form`, component : ProductTypeForm, name : "ProductTypeForm" },
        { path : `${i18n.t("link.productsType")}/:idType`, component : ProductTypeForm, name : "ProductTypeEdit" },
        { path : i18n.t("link.products"), component : ProductList, name : "ProductList" },
        { path : `${i18n.t("link.products")}/form`, component : ProductForm, name : "ProductForm" },
        { path : `${i18n.t("link.products")}/:idProduct`, component : ProductForm, name : "ProductEdit" }
    ]
})