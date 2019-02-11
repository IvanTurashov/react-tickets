import React, { useMemo } from 'react';

const TicketList = ({ tickets }) => {
    const sortedTickets = useMemo(() => {
        console.log('memo');
        return tickets.sort((prev, next) => prev.price - next.price);
    }, [tickets]);

    return (
        <ul>
            {sortedTickets.map(ticket => (
                <li key={ticket.id}>{JSON.stringify(ticket)}</li>
            ))}
        </ul>
    )
};

export default TicketList;