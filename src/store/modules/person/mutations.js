import * as MutationsTypes from "../../../constants/MutationsTypes"

export const mutations = {
    [MutationsTypes.PERSON_SET_LIST] : (state, list) => {
        state.list = list
    }
}