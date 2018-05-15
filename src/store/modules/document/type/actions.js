import i18n from "../../../../translate"

import DocumentTypeAPI from "../../../../api/document/type/DocumentTypeAPI"

import NotificationHelper from "../../../../helpers/NotificationHelper";

export const actions = {
    
    list({ commit }) {
        commit("fetching", true)
        DocumentTypeAPI.list()
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
            .then(() => commit("edit", {}))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.list.error"))
                console.error(error)
            })
    }

}