import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { set } from "../store/actions/ticket.js";

const TicketsPage = ({ setTickets, tickets }) => {
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
        };
    }, []);

    return (
        <ul>
            {tickets.map(ticket => (
                <li key={ticket.id}>{JSON.stringify(ticket)}</li>
            ))}
        </ul>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage);