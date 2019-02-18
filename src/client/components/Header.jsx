import React from 'react';
import styled from "@emotion/styled";
import LogoImg from '../../../assets/logo.png';

export const Header = styled.header`
  text-align: center;
  padding-top: 50px;
`;

export default () => (
    <Header>
        <img src={LogoImg} alt="Самолётик над земным шаром 😊" />
    </Header>
);
