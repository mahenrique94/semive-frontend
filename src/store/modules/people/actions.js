import PeopleAPI from "../../../api/people/PeopleAPI"

export const actions = {
    list({ commit }) {
        PeopleAPI.list()
            .then(list => commit("setList", list))
    }
}