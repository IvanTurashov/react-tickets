const initialState = {
    tickets: [],
    filter: []
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'SET_TICKETS':
            return {
                ...state,
                tickets: data
            };

        case 'SET_FILTER':
            return {
                ...state,
                filter: data
                    .filter(({ checked }) => checked)
                    .map(({ value }) => value)
            };

        case 'CLEAR_TICKETS':
            return initialState;

        default:
            return state;
    }
}