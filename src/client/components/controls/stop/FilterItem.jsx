import React from 'react';
import { CheckboxCustom, FilterItem, FilterItemWrapper } from "../../../styles/controls.js";

export default ({ name, checked, title, onChange, children }) => (
    <FilterItemWrapper>
        <FilterItem>
            <input
                type="checkbox"
                name={name}
                hidden={true}
                checked={checked}
                onChange={onChange}
            />
            <CheckboxCustom checked={checked} />
            {title}
            {children}
        </FilterItem>
    </FilterItemWrapper>
);