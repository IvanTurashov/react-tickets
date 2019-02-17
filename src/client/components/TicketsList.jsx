import React, { useMemo, useState, useEffect } from 'react';
import { connect } from 'react-redux';

const TicketList = ({ tickets, filter }) => {
    const [ viewedTickets, setTickets ] = useState([]);

    const sorted = useMemo(() => {
        return tickets.sort((prev, next) => prev.price - next.price);
    }, [ tickets ]);

    useEffect(() => {
        const filtered = sorted.filter(ticket => filter.includes(ticket.stops));
        // console.log('filter change');
        setTickets(filtered);
    }, [ filter, sorted ]);

    return (
        <ul>
            {viewedTickets.map(ticket => (
                <li key={ticket.id}>{JSON.stringify(ticket)}</li>
            ))}
        </ul>
    )
};

function mapStateToProps(state) {
    console.log(state);
    return {
        tickets: state.list.tickets,
        filter: state.list.filter
    }
}

export default connect(mapStateToProps)(TicketList);