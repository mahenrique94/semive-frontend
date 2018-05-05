import Vue from "vue"
import router from "./routes"
import store from "./store"

import i18n from "./translate"
import "./vuetify"
import "./validate"

import App from "./components/app/App.vue"

new Vue({
    i18n,
    router : router,
    render: h => h(App),
    store
}).$mount("#app")
