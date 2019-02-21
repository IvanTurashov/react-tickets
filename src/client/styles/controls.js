import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Card } from "./common.js";
import CheckIcon from '../../../assets/check.png';

export const ControlPanel = styled.div`
  ${Card};
  flex-shrink: 0;
  flex-basis: 230px;
`;

export const ControlGroup = styled.div``;

export const Title = styled.div`
  text-transform: uppercase;
  padding: 15px 15px 0;
`;

// CURRENCY SWITCHER

export const CurrencyWrapper = styled.li`
  flex: 1;
  height: 100%;
  border: 1px solid #d2d5d6;
  box-sizing: border-box;
  transition: all .1s ease;
  background-color: #fff;
  color: #2196f3;
  
  ${({ checked }) => checked ? css`
    border-color: #2196f3;
    background-color: #2196f3;
    color: #fff;
  ` : css`    
    &:hover {
      background-color: #f2fcff;
      border-color: #2196f3;
    }
  `}
`;

export const Currencies = styled.ul`
  display: flex;
  height: 40px;
  padding: 15px;

  & > ${CurrencyWrapper}:first-of-type {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  
  & > ${CurrencyWrapper}:last-of-type {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const Currency = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

// FILTER STOPS

export const Filter = styled.ul`
  padding: 15px 0;
`;

export const FilterItem = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 8px 15px;
  cursor: pointer;
`;

export const CheckboxCustom = styled.span`
  position: relative;
  display: inline-block;
  width: 19px;
  height: 19px;
  margin-right: 12px;
  border: 1px solid #d2d5d6;
  border-radius: 3px;
  transition: all .1s ease;
  
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: center/45% no-repeat url(${CheckIcon});
    opacity: 0;
    transition: opacity .2s ease-out;
  }
  
  ${({ checked }) => checked && css`
    border-color: #2196f3;
    background-color: #f2fcff;

    &::after {
      opacity: 1;
    }
  `}
`;

export const OnlyOneButton = styled.button`
  display: none;
  margin-top: 3px;
  margin-left: auto;
  border: none;
  background: none;
  outline: none;
  font-size: 0.95rem;
  color: #2196f3;
  text-transform: uppercase;
  cursor: pointer;
`;


export const FilterItemWrapper = styled.li`
  background-color: #fff;
  transition: background-color .1s ease;
  
  &:hover {
    background-color: #f1fcff;
    
    ${OnlyOneButton} {
      display: inline-block;
    }
  }
`;