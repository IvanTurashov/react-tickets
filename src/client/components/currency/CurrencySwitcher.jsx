import axios from "axios";
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from "react-redux";
import currenciesDefault from '../../constants/currencies.js';
import { setCurrency, setRates, clear } from "../../store/actions/currency.js";

function CurrencySwitcher({ currency, setCurrency, setRates, clear }) {
    const [ request, setRequest ] = useState(false);

    async function getCurrencies(cancelToken) {
        setRequest(true);

        try {
            const { data } = await axios.get('https://api.exchangeratesapi.io/latest', {
                params: {
                    base: currenciesDefault.base,
                    symbols: currenciesDefault.values.join(',')
                },
                cancelToken
            });

            setRates(data.rates);
            setRequest(false);
        } catch (e) {
            setRequest(false);
        }
    }

    const handleChange = useCallback(({ target }) => {
        const { name } = target;
        setCurrency(name);
    });

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        getCurrencies(source.token);

        return () => {
            source.cancel();
            clear();
        };
    }, []);

    return request
        ? <span>Загрузка</span>
        : (
            <ul>
                {currenciesDefault.values.map(value => (
                    <li key={value}>
                        <label>
                            <input
                                type="radio"
                                name={value}
                                checked={value === currency}
                                onChange={handleChange}
                            />
                            <span>{value}</span>
                        </label>
                    </li>
                ))}
            </ul>
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