import React, { useEffect, useCallback, Fragment } from 'react';
import { connect } from "react-redux";
import useGetRequest from '../../../hooks/useGetRequest.js'
import currenciesDefault from '../../../constants/currencies.js';
import { setCurrency, setRates, clear } from "../../../store/actions/currency.js";
import CurrencyItem from "./CurrencyItem.jsx";
import NoData from "../../NoData.jsx";
import { Currencies } from "../../../styles/controls.js";
import { Loader } from "../../../styles/common.js";

function CurrencySwitcher({ currency, rates, setCurrency, setRates, clear }) {
    const [request, data] = useGetRequest([], 'https://api.exchangeratesapi.io/latest', {
        base: currenciesDefault.base,
        symbols: currenciesDefault.values.join(',')
    });

    const handleChange = useCallback(({ target }) => {
        const { name } = target;
        setCurrency(name);
    }, []);

    useEffect(() => {
        return () => {
            clear();
        };
    }, []);

    useEffect(() => {
        if (data && data.rates) setRates(data.rates);
    }, [data]);

    return (
        <Fragment>
            {request && <Loader />}
            {!request && !rates && <NoData />}
            {rates && (
                <Currencies>
                    {Object.keys(rates).map(value => (
                        <CurrencyItem
                            key={value}
                            value={value}
                            checked={value === currency}
                            onChange={handleChange}
                        />
                    ))}
                </Currencies>
            )}
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        rates: state.currency.rates,
        currency: state.currency.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrency: value => {
            dispatch(setCurrency(value));
        },
        setRates: data => {
            dispatch(setRates(data));
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);