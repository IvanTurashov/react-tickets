import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import useGetRequest from '../hooks/useGetRequest.js';
import { setTickets, clear } from "../store/actions/ticket.js";
import TicketsList from './tickets/TicketsList.jsx';
import Controls from './controls/Controls.jsx';
import { Page, Section } from "../styles/common.js";

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