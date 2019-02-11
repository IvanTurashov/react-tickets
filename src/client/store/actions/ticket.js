export const set = (data) => ({
    type: 'SET_TICKETS',
    data
});

export const setFiltered = (data) => ({
    type: 'SET_FILTERED_TICKETS',
    data
});

export const clear = () => ({
    type: 'CLEAR_TICKETS'
});