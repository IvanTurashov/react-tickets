import { createStore, combineReducers, compose } from 'redux';
import ticketReducer from './reducers/ticket.js';
import currencyReducer from './reducers/currency.js';

const reducer = combineReducers({
    list: ticketReducer,
    currency: currencyReducer
});

export default (initialState = {})  => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(reducer, initialState, composeEnhancers());
}