import React, { useReducer, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { setFilter } from "../store/actions/ticket.js";
import stops from "../constants/stops.js";

const Label = styled.label`
   &:hover {}
`;

const OnlyOne = styled.button`
  &:hover {
    color: red;
  }
`;

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
        <ul>
            <li>
                <label>
                    <input
                        type="checkbox"
                        name="ALL"
                        checked={!filter.some(({ checked }) => !checked)}
                        onChange={handleChangeAll}
                    />
                    <span>Все</span>
                </label>
            </li>

            {filter.map(item => (
                <li key={item.name}>
                    <label>
                        <input
                            type="checkbox"
                            name={item.name}
                            checked={!!item.checked}
                            onChange={handleChangeOne}
                        />
                        <span>{item.title}</span>
                        <OnlyOne
                            type="button"
                            name="ONLY_ONE"
                            onClick={checkOnlyOne}>
                            ТОЛЬКО
                        </OnlyOne>
                    </label>
                </li>
            ))}
        </ul>
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