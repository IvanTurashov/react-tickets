import currencies from '../../constants/currencies.js';

const initialState = {
    value: currencies.base,
    rates: undefined
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'SET_CURRENCY':
            return {
                ...state,
                value: data
            };

        case 'SET_RATES':
            return {
                ...state,
                rates: data
            };

        case 'CLEAR_CURRENCY':
            return initialState;

        default:
            return state;
    }
}