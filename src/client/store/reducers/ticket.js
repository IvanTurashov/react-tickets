const initialState = {
    tickets: [],
    filteredItems: null
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'SET_TICKETS':
            return {
                ...state,
                tickets: data
            };

        case 'SET_FILTERED_TICKETS':
            return {
                ...state,
                filteredItems: data
            };

        case 'CLEAR_TICKETS':
            return initialState;

        default:
            return state;
    }
}