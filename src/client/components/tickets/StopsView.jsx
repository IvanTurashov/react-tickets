/**
 * Created by turashov on 21.02.2019
 */

import React, { memo } from 'react';
import { Stop } from "../../styles/ticket.js";

export default memo(({ stops }) => {
    const variants = ['пересадка', 'пересадки', 'пересадок'];
    const restHundred = stops % 100;
    const restTen = stops % 10;
    let text = '';

    if (restHundred > 4 && restHundred < 20) {
        text = variants[2];
    } else if (restTen > 1 && restTen < 5) {
        text = variants[1];
    } else if (restTen === 1) {
        text = variants[0];
    }

    return <Stop>{stops}&nbsp;{text}</Stop>
})