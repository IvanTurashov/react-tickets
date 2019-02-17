import React, { useMemo } from 'react';
import { connect } from 'react-redux';

function PriceView({ currency, rates, price }) {
    const converted = useMemo(() => {
        return rates ? (price * rates[currency]).toFixed(0) : price;
    }, [ currency, rates, price ]);

    return <div>{converted}</div>
}

function mapStateToProps(state) {
    return {
        currency: state.currency.value,
        rates: state.currency.rates
    }
}

export default connect(mapStateToProps)(PriceView);