import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { symbols } from "../../../constants/currencies.js";
import { Money } from "../../../styles/ticket.js";

function format(price) {
    return price.toFixed(0).replace(/./g, function (match, idx, string) {
        return idx > 0 && (string.length - idx) % 3 === 0 ? " " + match : match;
    });
}

function PriceView({ currency, rates, price }) {
    const changedPrice = useMemo(() => {
        const converted = rates ? (price * rates[currency]) : price;
        return format(converted);
    }, [currency, rates, price]);

    return <Money>{changedPrice}&nbsp;{symbols[currency]}</Money>
}

function mapStateToProps(state) {
    return {
        currency: state.currency.value,
        rates: state.currency.rates
    }
}

export default connect(mapStateToProps)(PriceView);