import i18n from "../../../translate"

import CityAPI from "../../../api/city/CityAPI"

import NotificationHelper from "../../../helpers/NotificationHelper";

export const actions = {
    
    async listByIdState({ commit }, idState) {
        commit("fetching", true)
        await CityAPI.listByState(idState)
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
            .catch(error => {
                NotificationHelper.error(i18n.t("message.api.list.error"))
                console.error(error)
            })
    }

}