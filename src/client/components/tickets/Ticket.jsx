import React from 'react';
import PriceView from "../controls/currency/PriceView.jsx";
import {
    Ticket,
    BuyBlock,
    CarrierWrapper,
    Carrier,
    BuyButton,
    InfoBlock,
    InfoSection,
    Time,
    StopTrace,
    Stop,
    PlaneTrace,
    Plane,
    Trace,
    Place,
    Date,
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
                <Time>{departure_time}</Time>
                <StopTrace>
                    {!!stops && <Stop>{stops}&nbsp;пересадки</Stop>}
                    <PlaneTrace>
                        <Trace />
                        <Plane src="assets/plane.png" alt="plane" />
                    </PlaneTrace>
                </StopTrace>
                <Time>{arrival_time}</Time>
            </InfoSection>

            <InfoSection>
                <TextBlock align="left">
                    <Place>{origin},&nbsp;{origin_name}</Place>
                    <Date>{departure_date}</Date>
                </TextBlock>

                <TextBlock align="right">
                    <Place>{destination},&nbsp;{destination_name}</Place>
                    <Date>{arrival_date}</Date>
                </TextBlock>
            </InfoSection>
        </InfoBlock>
    </Ticket>
)