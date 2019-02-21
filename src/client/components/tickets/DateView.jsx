/**
 * Created by turashov on 21.02.2019
 */

import React, { memo } from 'react';
import moment from "moment";
import { Date as DateView, Time as TimeView } from "../../styles/ticket.js";

moment.updateLocale('ru', {
    monthsShort: ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    week: {
        dow: 1
    },
    weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
});

export const Time = memo(({ time }) => (
    <TimeView>{moment(time, 'H:mm').format('HH:mm')}</TimeView>
));

export const Date = memo(({ date }) => (
    <DateView>{moment(date, 'D.MM.YY').format('D MMM YYYY, dd')}</DateView>
));