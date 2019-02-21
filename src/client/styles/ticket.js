import styled from '@emotion/styled';
import { Card } from "./common.js";
import StyleConstants from '../styles/constants.js';

export const Tickets = styled.ul`
  flex-basis: 566px;
`;

export const Ticket = styled.li`
  ${Card};
  display: flex;
  margin-bottom: 16px;
  transition: box-shadow .1s ease;
  cursor: pointer;
  
  &:hover {
     box-shadow: 0 5px 25px 0 rgba(91,137,164,.1);
  }
  
  @media(max-width: ${StyleConstants.mobile}) {
    flex-direction: column;
    
    & > * {
      flex-grow: 1;
    }
  }
`;

// MAIN

export const BuyBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 200px;
  box-sizing: border-box;
  padding: 24px 20px;
  border: none;
  border-right: 1px solid #d2d5d6;
  
  @media(max-width: ${StyleConstants.mobile}) {
    flex-direction: row;
    flex-basis: auto;
    padding: 4px 10px;
    justify-content: space-between;
    border-right: none;
    border-bottom: 1px solid #d2d5d6;
  }
`;

export const CarrierWrapper = styled.div`
  display: block;
`;

export const Carrier = styled.img``;

export const Money = styled.span``;

export const BuyButton = styled.button`
  width: 160px;
  margin-top: 20px;
  padding: 8px 0;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #ff6d00;
  box-shadow: 0 1px 0 0 #d64d08, 0 2px 1px 0 rgba(0,0,0,.1);
  line-height: 1.5;
  font-size: 1.33rem;
  color: #fff;
  cursor: pointer;
  transition: all .1s ease;
  
  &:hover {
    background-color: #ff8124;
    box-shadow: 0 1px 0 0 #f7661d, 0 2px 1px 0 rgba(0,0,0,.25)
  }
  
  @media(max-width: ${StyleConstants.mobile}) {
    margin-top: 0;
    padding: 4px 0;
    
    & *:not(${Money}) {
      display: none;
    }
  }
  
`;

// INFO

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 365px;
  padding: 8px 28px;
  box-sizing: border-box;
  
  @media(max-width: ${StyleConstants.mobile}) {
    flex-basis: auto;
    padding: 4px 10px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Time = styled.div`
  font-size: 2.66rem;
`;

export const StopTrace = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
  padding: 0 18px;
`;

export const Stop = styled.div`
  color: #8b9497;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.83rem;
`;

export const PlaneTrace = styled.div`
  display: flex;
  align-items: center;
`;

export const Trace = styled.div`
  flex: 1;
  height: 1px;
  background-color: #d2d5d6;
`;

export const Plane = styled.img``;

export const Place = styled.div``;

export const Date = styled.div`
  color: #8b9497
`;

export const TextBlock = styled.div`
  text-align: ${({align}) => align || 'left'};
`;