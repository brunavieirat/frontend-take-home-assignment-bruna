import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const DivStyle = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 2%;
  @media (min-width: 800px) {
    height: 80px;
  }
`;

const Logo = styled.img`
  width: 75px;
  height: 24px;
  @media (min-width: 800px) {
    width: 100px;
    height: 32px;
  }
`;

const Header = () => (
  <DivStyle>
    <Logo src={logo} />
  </DivStyle>
);
export default Header;
