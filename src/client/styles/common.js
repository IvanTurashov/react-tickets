import styled from '@emotion/styled';
import { css } from '@emotion/core';
import StyleConstants from '../styles/constants.js';
import LoaderGIF from '../../../assets/loader.gif';

export const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 0;
  
  & > * {
    margin: 10px;
    
    @media (max-width: ${StyleConstants.tablet}) {
       flex-grow: 1;
    }
  }    
`;

export const Card = css`
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(91, 137, 164, 0.25);
`;

export const Loader = styled.div`
  width: 100%;
  height: 64px;
  background: center no-repeat url(${LoaderGIF});
`;