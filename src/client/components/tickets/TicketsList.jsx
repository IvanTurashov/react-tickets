import React, { useMemo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Ticket from "./Ticket.jsx";
import { Tickets } from "../../styles/ticket.js";
import { Loader } from "../../styles/common.js";

const TicketList = ({ tickets, filter, loading }) => {
    const [viewedTickets, setTickets] = useState([]);

    const sorted = useMemo(() => {
        return tickets.sort((prev, next) => prev.price - next.price);
    }, [tickets]);

    useEffect(() => {
        const filtered = sorted.filter(ticket => filter.includes(ticket.stops));
        setTickets(filtered);
    }, [filter, sorted]);

    return (
        <Tickets>
            {loading && <Loader />}
            {viewedTickets.map(ticket => (
                <Ticket
                    key={ticket.origin + ticket.departure_date + ticket.departure_time + ticket.destination + ticket.price} {...ticket} />
            ))}
        </Tickets>
    )
};

function mapStateToProps(state) {
    return {
        tickets: state.list.tickets,
        filter: state.list.filter
    }
}

export default connect(mapStateToProps)(TicketList);