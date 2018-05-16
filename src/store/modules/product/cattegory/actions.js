import { router } from "../../../../routes"
import i18n from "../../../../translate"

import ProductCattegoryAPI from "../../../../api/product/cattegory/ProductCattegoryAPI"

import NotificationHelper from "../../../../helpers/NotificationHelper";

export const actions = {
    
    edit({ commit }, id) {
        commit("fetching", true)
        ProductCattegoryAPI.edit(id)
            .then(object => commit("edit", object))
            .then(() => commit("fetching", false))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.edit.error"))
                console.error(error)
            })
    },

    list({ commit }) {
        commit("fetching", true)
        ProductCattegoryAPI.list()
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
            .then(() => commit("edit", {}))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.list.error"))
                console.error(error)
            })
    },

    remove({ commit, state }, id) {
        ProductCattegoryAPI.remove(id)
            .then(() => commit("list", state.list.filter(object => object.id !== id)))
            .then(() => NotificationHelper.success(i18n.t("message.api.remove.success")))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.remove.error"))
                console.error(error)
            })
    },

    save({ commit }, data) {
        ProductCattegoryAPI.save(data)
            .then(() => router.push({ name : "ProductCattegoryList"}))
            .then(() => {
                if (data.id) {
                    NotificationHelper.success(i18n.t("message.api.update.success"))
                } else {
                    NotificationHelper.success(i18n.t("message.api.save.success"))
                }
            })
            .catch(error => {
                if (data.id) {
                    NotificationHelper.error(i18n.t("message.api.update.error"))
                } else {
                    NotificationHelper.error(i18n.t("message.api.save.error"))
                }
                console.error(error)
            })
    }

}