import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { set, clear } from "../store/actions/ticket.js";
import TicketsList from './TicketsList.jsx';

const TicketsPage = ({ setTickets, clear, tickets }) => {
    async function getTickets(cancelToken) {
        try {
            const { data } = await axios.get('/api/tickets', { cancelToken });
            setTickets(data.tickets);
        } catch (e) {
            if (axios.isCancel(e)) {
                console.debug('Request canceled');
            }
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
        <TicketsList tickets={tickets} />
    );
};

function mapStateToProps(state) {
    return {
        tickets: state.list.tickets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTickets: data => {
            dispatch(set(data));
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage);