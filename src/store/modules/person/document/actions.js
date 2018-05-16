import i18n from "../../../../translate"

import PersonDocumentAPI from "../../../../api/person/document/PersonDocumentAPI"

import NotificationHelper from "../../../../helpers/NotificationHelper";

export const actions = {

    async edit({ commit }, id) {
        commit("fetching", true)
        await PersonDocumentAPI.edit(id)
            .then(object => commit("edit", object))
            .then(() => commit("fetching", false))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.edit.error"))
                console.error(error)
            })
    },

    listByIdPerson({ commit }, idPerson) {
        commit("fetching", true)
        PersonDocumentAPI.listByIdPerson(idPerson)
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
            .then(() => commit("edit", {}))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.list.error"))
                console.error(error)
            })
    },

    remove({ commit, state }, id) {
        PersonDocumentAPI.remove(id)
            .then(() => commit("list", state.list.filter(object => object.id !== id)))
            .then(() => NotificationHelper.success(i18n.t("message.api.remove.success")))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.remove.error"))
                console.error(error)
            })
    },

    save({ dispatch }, data) {
        PersonDocumentAPI.save(data)
            .then(() => {
                dispatch("listByIdPerson", data.idPerson)
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