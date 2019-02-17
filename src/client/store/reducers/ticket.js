const initialState = {
    tickets: [],
    filter: [0,1,2,3]
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'SET_TICKETS':
            console.log(type, {
                ...state,
                tickets: data
            });

            return {
                ...state,
                tickets: data
            };

        case 'SET_FILTER':
            console.log(type, {
                ...state,
                filter: data
            });

            return {
                ...state,
                filter: data
            };

        case 'CLEAR_TICKETS':
            console.log(type, initialState);
            return initialState;

        default:
            console.log(type, state);
            return state;
    }
}