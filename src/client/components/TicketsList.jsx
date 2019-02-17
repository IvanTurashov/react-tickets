import React, { useMemo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PriceView from './currency/PriceView.jsx'

const TicketList = ({ tickets, filter }) => {
    const [ viewedTickets, setTickets ] = useState([]);

    const sorted = useMemo(() => {
        return tickets.sort((prev, next) => prev.price - next.price);
    }, [ tickets ]);

    useEffect(() => {
        const filtered = sorted.filter(ticket => filter.includes(ticket.stops));
        setTickets(filtered);
    }, [ filter, sorted ]);

    return (
        <ul>
            {viewedTickets.map(ticket => (
                <li key={ticket.id}>
                    {JSON.stringify(ticket)}
                    <PriceView price={ticket.price} />
                </li>
            ))}
        </ul>
    )
};

function mapStateToProps(state) {
    return {
        tickets: state.list.tickets,
        filter: state.list.filter
    }
}

export default connect(mapStateToProps)(TicketList);