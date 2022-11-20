export const state = () => ({
  carte: []
})

export const getters = {
  getCarte (state) {
    return state.carte
  }
}

export const mutations = {
  SET_CARTE (state, carte) {
    state.carte = carte
  }
}

// permet de faire les requetes vers la bdd (SANITY) en selectionnant le nom (_type) et les champs demandés (exp: name,titre...)
export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios }) {
    const carte = await $axios.$get('https://ygecrkdj.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "carte"]{name,"imageId":image{asset,alt}}')

    await dispatch('setCarte', carte.result)
  },
  setCarte ({ commit }, carte) {
    commit('SET_CARTE', carte)
  }
}
