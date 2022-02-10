import Vue from "vue"
const state = {
    products : []
};
const getters = {
    getProducts(state){
        return state.products
    },
    getProduct(state){

    },
};
const mutations = {
    updateProductList(state, product){
        state.products.push(product)
    }
};
const actions = {
    initApp({ commit }){

    },
    saveProduct({commit}, payload) {
      Vue.http.post("https://urun-islemleri-prod-a4641-default-rtdb.firebaseio.com/products.json", payload)
          .then((response) => {
              console.log(response)
          })
          .then((error) => {
              console.log(error)
          })
    },
    sellProduct({commit}, payload){

    }
};
export default {
    actions,
    getters,
    mutations,
    state,
}