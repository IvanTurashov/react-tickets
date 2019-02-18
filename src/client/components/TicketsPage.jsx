import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import httpService from "../httpService.js";
import { setTickets, clear } from "../store/actions/ticket.js";
import TicketsList from './tickets/TicketsList.jsx';
import Controls from './controls/Controls.jsx';
import { Page, Section } from "../styles/common.js";

const TicketsPage = ({ setTickets, clear }) => {
    const [ request, setRequest ] = useState(false);

    async function getTickets(cancelToken) {
        setRequest(true);

        try {
            const { data } = await httpService.get('http://www.mocky.io/v2/5c6b0cd53300009f3c7f4e79', { cancelToken });
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
        <Page>
            <Controls />
            <TicketsList loading={request} />
        </Page>
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