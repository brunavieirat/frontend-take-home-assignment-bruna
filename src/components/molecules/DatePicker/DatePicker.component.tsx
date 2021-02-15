import moment, { Moment } from 'moment';
import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { BorderStyle } from '../../templates/Border/Border.template';
import Text from '../../atoms/Text/Text.component';

const Container = styled(BorderStyle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  width: 100%;
  min-width: 100px;
  box-sizing: border-box;
  padding: 7px;
`;

const DateStyled = styled.div`
  text-align: center;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
`;

const TextStyled = styled.p<{ type: string }>`
  color: ${(props) => (props.type === 'title' ? '#1E2A32' : '#708797')};
  font-weight: ${(props) => (props.type === 'title' ? 'bold' : 'normal')};
  margin: 2px;
  box-sizing: border-box;
  font-size: 14px;
  @media (min-width: 800px) {
    font-size: 16px;
  }
`;

export interface DatePickerParams {
  date: Moment;
  changeMonth: (type: string) => void;
}

const DatePickerComponent: React.FC<DatePickerParams> = (
  props: DatePickerParams
) => {
  const { date, changeMonth } = props;

  return (
    <Container>
      <ButtonStyled
        disabled={date <= moment()}
        onClick={() => changeMonth('subtract')}
      >
        <BsChevronLeft color="#8A9CA9" fontSize={18} />
      </ButtonStyled>
      <DateStyled>
        <TextStyled type="title">{date.format('MMMM')}</TextStyled>
        <TextStyled type="label">{date.format('YYYY')}</TextStyled>
      </DateStyled>
      <ButtonStyled onClick={() => props.changeMonth('add')}>
        <BsChevronRight color="#8A9CA9" fontSize={18} />
      </ButtonStyled>
    </Container>
  );
};

export default DatePickerComponent;
