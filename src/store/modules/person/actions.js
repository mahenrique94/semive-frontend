import PersonAPI from "../../../api/person/PersonAPI"

export const actions = {
    list({ commit }) {
        PersonAPI.list()
            .then(list => commit("setList", list))
    }
}