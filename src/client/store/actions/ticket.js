export const setTickets = (data) => ({
    type: 'SET_TICKETS',
    data
});

export const setFilter = (data) => ({
    type: 'SET_FILTER',
    data
});

export const clear = () => ({
    type: 'CLEAR_TICKETS'
});