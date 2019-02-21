import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../../shared/API.js';
import useGetRequest from '../../hooks/useGetRequest.js';
import { setTickets, clear } from "../../store/actions/ticket.js";
import TicketsList from './TicketsList.jsx';
import Controls from '../controls/Controls.jsx';
import { Page, Section } from "../../styles/common.js";

const TicketsPage = ({ setTickets, clear }) => {
    const [ request, data ] = useGetRequest(null, API.base + API.tickets);

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