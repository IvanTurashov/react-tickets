import React, { useState, useCallback, useEffect, useRef } from 'react';
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

const FilterStops = ({ setFilterValues }) => {
    const ulElement = useRef(null);
    const [ filter, setFilter ] = useState(stops);

    const handleChange = useCallback(event => {
        let { target } = event;
        const { name, checked } = target;

        while (target !== ulElement.current) {
            if (target.tagName === 'INPUT') {
                updateFilter(name, checked);
                return;
            } else if (target.tagName === 'BUTTON') {
                const inputElement = target.parentNode.firstChild;
                updateFilter(inputElement.name, null, true);
                return;
            }

            target = target.parentNode;
        }
    });

    function updateFilter(name, checked, onlyOne = false) {
        let newFilter = filter.slice();

        if (onlyOne) {
            newFilter = newFilter.map(item => {
                return {
                    ...item,
                    checked: item.name === name
                }
            });
        } else if (name === 'ALL') {
            newFilter = newFilter.map(item => ({ ...item, checked }));
        } else {
            const idx = newFilter.findIndex(({ name: stopName }) => stopName === name);
            newFilter[idx].checked = checked;
        }

        setFilter(newFilter);
        setFilterValues(newFilter);
    }

    useEffect(() => {
        updateFilter('ALL', true);
    }, []);

    return (
        <ul
            ref={ulElement}
            onClick={handleChange}
        >
            <li>
                <label>
                    <input type="checkbox"
                           name="ALL"
                           checked={!filter.some(({ checked }) => !checked)}
                           readOnly={true}
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
                            readOnly={true}
                        />
                        <span>{item.title}</span>
                        <OnlyOne type="button" name="ONLY_ONE">ТОЛЬКО</OnlyOne>
                    </label>
                </li>
            ))}
        </ul>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        setFilterValues: filter => {
            const values = filter
                .filter(({ checked }) => checked)
                .map(({ value }) => value);

            dispatch(setFilter(values));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterStops);