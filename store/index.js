export const state = () => {
    selectedYear: null
}

export const mutations = {
    SET_YEAR(state, newYear) {
        state.selectedYear = newYear
    }
}

export const actions = {
    selectYear({ commit }, year) {
        commit('SET_YEAR', year)
    }
}