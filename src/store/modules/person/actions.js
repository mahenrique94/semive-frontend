import PersonAPI from "../../../api/person/PersonAPI"

export const actions = {
    async list({ commit }) {
        commit("fetching", true)
        PersonAPI.list()
            .then(list => commit("list", list))
            .then(() => commit("fetching", false))
    }
}