import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import httpService from "../httpService.js";
import { setTickets, clear } from "../store/actions/ticket.js";
import TicketsList from './TicketsList.jsx';
import FilterStops from './FilterStops.jsx';
import CurrencySwitcher from './currency/CurrencySwitcher.jsx';

const TicketsPage = ({ setTickets, clear }) => {
    const [ request, setRequest ] = useState(false);

    async function getTickets(cancelToken) {
        setRequest(true);

        try {
            const { data } = await httpService.get('/tickets', { cancelToken });
            setTickets(data.tickets);
            setRequest(false);
        } catch (e) {
            setRequest(false);
        }
    }

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        getTickets(source.token);

        return () => {
            source.cancel();
            clear();
        };
    }, []);

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