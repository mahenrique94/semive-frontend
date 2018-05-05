import Vue from "vue"
import router from "./routes"
import store from "./store"

import "./translate"
import "./vuetify"

import App from "./components/app/App.vue"

new Vue({
    router : router,
    render: h => h(App),
    store
}).$mount("#app")
