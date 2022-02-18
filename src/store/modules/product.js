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
    saveProduct({commit, dispatch}, product) {
      Vue.http.post("https://urun-islemleri-prod-a4641-default-rtdb.firebaseio.com/products.json", product)
          .then((response) => {
              product.key = response.body.name;
              commit("updateProductList", product);
              let tradeResult = {
                  purchase: product.price,
                  sale: 0,
                  count: product.count
              }
              dispatch("setTradeResult", tradeResult)
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