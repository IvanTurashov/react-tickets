import React from 'react';
import PriceView from "../controls/currency/PriceView.jsx";
import {Date, Time} from "./DateView.jsx";
import Stops from './StopsView.jsx';
import {
    Ticket,
    BuyBlock,
    CarrierWrapper,
    Carrier,
    BuyButton,
    InfoBlock,
    InfoSection,
    StopTrace,
    PlaneTrace,
    Plane,
    Trace,
    Place,
    TextBlock
} from "../../styles/ticket.js";

export default ({ carrier, price, departure_time, arrival_time, stops, origin, origin_name, departure_date, destination, destination_name, arrival_date }) => (
    <Ticket>
        <BuyBlock>
            <CarrierWrapper>
                <Carrier src="/assets/TK.png" alt="TK" />
            </CarrierWrapper>

            <BuyButton>
                <span>Купить</span>
                <br />
                за&nbsp;<PriceView price={price} />
            </BuyButton>
        </BuyBlock>

        <InfoBlock>
            <InfoSection>
                <Time time={departure_time} />
                <StopTrace>
                    {!!stops && <Stops stops={stops} />}
                    <PlaneTrace>
                        <Trace />
                        <Plane src="assets/plane.png" alt="plane" />
                    </PlaneTrace>
                </StopTrace>
                <Time time={arrival_time} />
            </InfoSection>

            <InfoSection>
                <TextBlock align="left">
                    <Place>{origin},&nbsp;{origin_name}</Place>
                    <Date date={departure_date} />
                </TextBlock>

                <TextBlock align="right">
                    <Place>{destination},&nbsp;{destination_name}</Place>
                    <Date date={arrival_date}/>
                </TextBlock>
            </InfoSection>
        </InfoBlock>
    </Ticket>
)