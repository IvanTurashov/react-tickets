import React from 'react';
import { ControlGroup, ControlPanel, Title } from "../../styles/controls.js";
import CurrencySwitcher from "./currency/CurrencySwitcher.jsx";
import FilterStops from "./stop/FilterStops.jsx";

export default () => (
    <ControlPanel>
        <ControlGroup>
            <Title>Валюта</Title>
            <CurrencySwitcher />
        </ControlGroup>
        <ControlGroup>
            <Title>Пересадки</Title>
            <FilterStops />
        </ControlGroup>
    </ControlPanel>
);