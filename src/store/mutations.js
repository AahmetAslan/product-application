export const updateTradeResult = (state, payload) => {
    state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
    state.sale += parseFloat(payload.sale) * parseInt(payload.sale);
    state.balance = state.sale - state.purchase;
}