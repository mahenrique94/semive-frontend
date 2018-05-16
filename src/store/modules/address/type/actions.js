import i18n from "../../../../translate"

import AddressTypeAPI from "../../../../api/address/type/AddressTypeAPI"

import NotificationHelper from "../../../../helpers/NotificationHelper";

export const actions = {
    
    list({ commit }) {
        commit("fetching", true)
        AddressTypeAPI.list()
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
            .then(() => commit("edit", {}))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.list.error"))
                console.error(error)
            })
    }

}