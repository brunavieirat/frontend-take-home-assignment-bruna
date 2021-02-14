import React, {
  useState,
  useEffect,
  useCallback,
  SetStateAction,
  Dispatch,
} from 'react';
import styled from 'styled-components';
import Header from '../../templates/header/Header.template';
import PageTitle from '../../atoms/PageTitle/PageTile.component';
import SectionBuyHouse from '../../organisms/SectionBuyHouse/SectionBuyHouse.component';
import { Moment } from 'moment';

interface HomeTemplateParams {
  finalDate: Moment;
  setTotalAmount: Dispatch<SetStateAction<number>>;
  totalAmount: number;
  countMonth: number;
  totalMonths: number;
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
  } = props;
  const Container = styled.body`
    background-color: #e5e5e5;
    height: 100vh;
    width: 100%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

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
      />
    </Container>
  );
};

export default HomeTemplate;
