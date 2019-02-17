export const setCurrency = data => ({
    type: 'SET_CURRENCY',
    data
});

export const setRates = data => ({
    type: 'SET_RATES',
    data
});

export const clear = () => ({
    type: 'CLEAR_CURRENCY'
});