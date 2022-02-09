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
    saveProduct({ commit }, payload) {

    }
};
export default {
    actions,
    getters,
    mutations,
    state,
}