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

export interface HomeTemplateParams {
  finalDate: Moment;
  setTotalAmount: Dispatch<SetStateAction<number>>;
  totalAmount: number;
  countMonth: number;
  totalMonths: number;
  changeMonth: (type: string) => void;
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
  const Container = styled.div`
    background-color: #e5e5e5;
    height: 100vh;
    width: 100%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    // <Container>
    <div>
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
    </div>
    // </Container>
  );
};

export default HomeTemplate;
