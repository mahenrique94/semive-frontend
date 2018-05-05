import * as ActionsTypes from "../../../constants/ActionsTypes"
import * as MutationsTypes from "../../../constants/MutationsTypes"
import PersonAPI from "../../../api/person/PersonAPI"

export const actions = {
    async [ActionsTypes.PERSON_LIST]({ commit }) {
        PersonAPI.list()
            .then(list => commit(MutationsTypes.PERSON_SET_LIST, list))
    }
}