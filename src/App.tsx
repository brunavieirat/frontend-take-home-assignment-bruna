import * as React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import PageTitle from './components/pageTitle/PageTile';
import SectionBuyHouse from './components/SectionBuyHouse/SectionBuyHouse';

const Container = styled.body`
  background-color: #e5e5e5;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <PageTitle />
      <SectionBuyHouse />
    </Container>
  );
};

export default App;
