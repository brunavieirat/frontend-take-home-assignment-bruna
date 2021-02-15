import React, { SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import PageTitle from '../../atoms/PageTitle/PageTile.component';
import SectionBuyHouse from '../../organisms/SectionBuyHouse/SectionBuyHouse.component';
import { Moment } from 'moment';
import Header from '../../templates/Header/Header.template';

const Container = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    height: 100vh;
  }
`;

export interface HomeTemplateParams {
  finalDate?: Moment;
  setTotalAmount?: Dispatch<SetStateAction<number>>;
  totalAmount?: number;
  countMonth?: number;
  totalMonths?: number;
  changeMonth?: (type: string) => void;
}

const HomeTemplate: React.FC<HomeTemplateParams> = (
  props: HomeTemplateParams
) => {
  const {
    finalDate,
    setTotalAmount,
    totalAmount,
    countMonth,
    totalMonths,
    changeMonth,
  } = props;

  return (
    <Container>
      <Header />
      <PageTitle />
      <SectionBuyHouse
        finalDate={finalDate}
        setTotalAmount={setTotalAmount}
        totalAmount={totalAmount}
        countMonth={countMonth}
        totalMonths={totalMonths}
        changeMonth={changeMonth}
      />
    </Container>
  );
};

export default HomeTemplate;
