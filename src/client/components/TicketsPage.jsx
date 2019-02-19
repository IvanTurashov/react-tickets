import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import useGetRequest from '../hooks/useGetRequest.js';
import { setTickets, clear } from "../store/actions/ticket.js";
import TicketsList from './TicketsList.jsx';
import FilterStops from './FilterStops.jsx';
import CurrencySwitcher from './currency/CurrencySwitcher.jsx';

const TicketsPage = ({ setTickets, clear }) => {
    const [ request, data ] = useGetRequest(null, 'http://www.mocky.io/v2/5c6c0a42320000ac1bbef85d');

    useEffect(() => {
        return () => {
            clear();
        };
    }, []);

    useEffect(() => {
        if (data && data.tickets) setTickets(data.tickets);
    }, [data]);

    return (
        <Fragment>
            <CurrencySwitcher />
            {request ? 'Загрузка' : <TicketsList />}
            <FilterStops />
        </Fragment>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        setTickets: data => {
            dispatch(setTickets(data));
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(null, mapDispatchToProps)(TicketsPage);