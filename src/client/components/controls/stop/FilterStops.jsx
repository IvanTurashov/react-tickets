import React, { useReducer, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilter } from "../../../store/actions/ticket.js";
import stops from "../../../constants/stops.js";
import { Filter, OnlyOneButton } from "../../../styles/controls.js";
import FilterItem from './FilterItem.jsx';

function filterReducer(state, { type, data }) {
    switch (type) {
        case 'UPDATE':
            const newState = [...state];
            const founded = newState.find(item => item.name === data.name);
            founded.checked = data.checked;

            return newState;

        case 'UPDATE_ALL': {
            return state.map(item => {
                return {
                    ...item,
                    checked: data.checked
                }
            });
        }

        case 'CHECK_ONLY_ONE':
            return state.map(item => {
                return {
                    ...item,
                    checked: item.name === data.name
                }
            });

        default:
            return state;
    }
}

const FilterStops = ({ setFilterValues }) => {
    const [filter, dispatch] = useReducer(filterReducer, stops);

    const handleChangeOne = useCallback(event => {
        const { name, checked } = event.target;

        dispatch({
            type: 'UPDATE',
            data: { name, checked }
        });
    }, []);

    const handleChangeAll = useCallback(event => {
        const { checked } = event.target;

        dispatch({
            type: 'UPDATE_ALL',
            data: { checked }
        });
    }, []);

    const checkOnlyOne = useCallback(({ target }) => {
        const { name } = target.parentNode.firstChild;

        dispatch({
            type: 'CHECK_ONLY_ONE',
            data: { name }
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: 'UPDATE_ALL',
            data: { checked: true }
        });
    }, []);

    useEffect(() => {
        setFilterValues(filter);
    }, [filter]);

    return (
        <Filter>
            <FilterItem
                name="ALL"
                checked={!filter.some(({ checked }) => !checked)}
                title="Все"
                onChange={handleChangeAll}
            />

            {filter.map(({name, checked, title}) => (
                <FilterItem
                    key={name}
                    name={name}
                    checked={!!checked}
                    onChange={handleChangeOne}
                    title={title}
                >
                    <OnlyOneButton
                        type="button"
                        name="ONLY_ONE"
                        onClick={checkOnlyOne}
                    >
                        Только
                    </OnlyOneButton>
                </FilterItem>
            ))}
        </Filter>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        setFilterValues: filter => {
            dispatch(setFilter(filter));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterStops);