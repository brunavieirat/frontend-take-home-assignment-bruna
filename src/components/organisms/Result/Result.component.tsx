import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { BorderStyle } from '../../templates/Border/Border.template';
import Text from '../../atoms/Text/Text.component';

const ResultCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;

  @media (min-width: 800px) {
    padding: 40px 50px;
  }
`;

const ResultCardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;

  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

const ResultValue = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 38px;
  margin: 0;
  padding: 0;
  color: #0079ff;

  @media (min-width: 800px) {
    font-size: 32px;
  }
`;

const ResultInfo = styled.div`
  padding: 10px 40px;
  background-color: #f4f8fa;
  border-radius: 8px;
  @media (min-width: 800px) {
    padding: 20px 50px;
  }
`;

const Result = (props: any) => {
  console.log(props);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return (
    <BorderStyle>
      <ResultCard>
        <ResultCardTitle> Monthly amount</ResultCardTitle>
        <ResultValue>${Math.round(props.totalMonths)}</ResultValue>
      </ResultCard>

      <ResultInfo>
        <Text>
          You’re planning <b>{props.countMonth} monthly deposits </b>to reach
          your <b>{formatter.format(props.totalAmount)}</b> goal by{' '}
          <b>{props.date.format('MMMM YYYY')}.</b>
        </Text>
      </ResultInfo>
    </BorderStyle>
  );
};

export default Result;
