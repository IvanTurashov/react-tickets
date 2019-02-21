import React, { useEffect, useCallback } from 'react';
import { connect } from "react-redux";
import useGetRequest from '../../../hooks/useGetRequest.js'
import currenciesDefault from '../../../constants/currencies.js';
import { setCurrency, setRates, clear } from "../../../store/actions/currency.js";
import CurrencyItem from "./CurrencyItem.jsx";
import { Currencies } from "../../../styles/controls.js";
import { Loader } from "../../../styles/common.js";

function CurrencySwitcher({ currency, setCurrency, setRates, clear }) {
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

    return request
        ? <Loader />
        : (
            <Currencies>
                {currenciesDefault.values.map(value => (
                    <CurrencyItem
                        key={value}
                        value={value}
                        checked={value === currency}
                        onChange={handleChange}
                    />
                ))}
            </Currencies>
        );
}

function mapStateToProps(state) {
    return {
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