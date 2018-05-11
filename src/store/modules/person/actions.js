import Vue from "vue"
import { router } from "../../../routes"
import i18n from "../../../translate"

import PersonAPI from "../../../api/person/PersonAPI"

import NotificationHelper from "../../../helpers/NotificationHelper";

export const actions = {
    
    async list({ commit }) {
        commit("fetching", true)
        PersonAPI.list()
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
    },

    async remove({ commit, state }, id) {
        PersonAPI.remove(id)
            .then(() => commit("list", state.list.filter(person => person.id !== id)))
            .then(() => NotificationHelper.success(i18n.t("message.api.remove.success")))
    },

    async save({ commit }, person) {
        PersonAPI.save(person)
            .then(data => commit("edit", data))
            .then(() => router.push({ name : "PersonEdit", params : { id : person.id } }))
            .then(() => NotificationHelper.success(i18n.t("message.api.save.success")))
    }

}