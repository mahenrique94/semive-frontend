import Vue from "vue"
import { router } from "./routes"
import store from "./store"

import "normalize.css/normalize.css"

import i18n from "./translate"
import "./notifications"
import "./vuetify"
import "./validate"

import App from "./components/app/App.vue"

new Vue({
    i18n,
    router,
    render: h => h(App),
    store
}).$mount("#app")
