import React from 'react';
import { Currency, CurrencyWrapper } from "../../../styles/controls.js";

export default ({ checked, value, onChange }) => (
    <CurrencyWrapper checked={checked}>
        <Currency>
            <input
                type="radio"
                name={value}
                checked={checked}
                onChange={onChange}
                hidden={true}
            />
            <span>{value}</span>
        </Currency>
    </CurrencyWrapper>
);