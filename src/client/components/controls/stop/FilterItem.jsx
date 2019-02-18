import React from 'react';
import { CheckboxCustom, FilterItem, FilterItemWrapper, OnlyOneButton } from "../../../styles/controls.js";

export default ({ name, checked, title, hasOnlyOne = false }) => (
    <FilterItemWrapper>
        <FilterItem>
            <input
                type="checkbox"
                name={name}
                hidden={true}
                checked={checked}
            />
            <CheckboxCustom checked={checked} />
            {title}
            {hasOnlyOne && <OnlyOneButton type="button" name="ONLY_ONE">Только</OnlyOneButton>}
        </FilterItem>
    </FilterItemWrapper>
);