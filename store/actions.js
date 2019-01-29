export default{
    fetchSpecialDays({commit}, payload){
        commit('SET_SPECIAL_DAYS', payload)
    },
    fetchErrors({commit}, payload){
        commit('SET_ERRORS', payload)
    }
}