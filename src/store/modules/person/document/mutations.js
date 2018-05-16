export const mutations = {
    edit : (state, object) => state.object = object,
    editClear : state => state.object = {},
    fetching : (state, fetching) => state.fetching = fetching,
    list : (state, list) => state.list = list
}