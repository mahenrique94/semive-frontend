import i18n from "../../../translate"

import UnityAPI from "../../../api/unity/UnityAPI"

import NotificationHelper from "../../../helpers/NotificationHelper";

export const actions = {
    
    list({ commit }) {
        commit("fetching", true)
        UnityAPI.list()
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.list.error"))
                console.error(error)
            })
    }

}