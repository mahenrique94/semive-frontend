export const mutations = {
    edit : (state, object) => {
        state.object = object
    },
    fetching : (state, fetching) => {
        state.fetching = fetching
    },
    list : (state, list) => {
        state.list = list
    }
}