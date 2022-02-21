import Vue from "vue"
import {router} from "../../router";
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
        Vue.http.get("https://urun-islemleri-prod-a4641-default-rtdb.firebaseio.com/products.json")
            .then(response => {
                console.log(response)
                let data = response.body
                for (let i in data){
                    data[i].key=i;
                    commit("updateProductList", data[i])
                }
            })
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
              router.replace("/");
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