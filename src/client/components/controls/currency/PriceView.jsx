import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { symbols } from "../../../constants/currencies.js";
import { Money } from "../../../styles/ticket.js";

function PriceView({ currency, rates, price }) {
    const converted = useMemo(() => {
        return rates ? (price * rates[currency]).toFixed(0) : price;
    }, [ currency, rates, price ]);

    return <Money>{converted}&nbsp;{symbols[currency]}</Money>
}

function mapStateToProps(state) {
    return {
        currency: state.currency.value,
        rates: state.currency.rates
    }
}

export default connect(mapStateToProps)(PriceView);