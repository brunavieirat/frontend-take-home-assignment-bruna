import moment from 'moment';
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

const TextStyled = styled.p`
  font-weight: bold;
  color: #1e2a32;
  margin: 5px;
  box-sizing: border-box;
`;

const DatePickerComponent = (props: any) => {
  const date = props.date;
  return (
    <Container>
      <ButtonStyled
        disabled={date <= moment()}
        onClick={() => props.changeMonth('subtract')}
      >
        <BsChevronLeft color="#8A9CA9" fontSize={18} />
      </ButtonStyled>
      <DateStyled>
        <TextStyled>{date.format('MMMM')}</TextStyled>
        <Text>{date.format('YYYY')}</Text>
      </DateStyled>
      <ButtonStyled onClick={() => props.changeMonth('add')}>
        <BsChevronRight color="#8A9CA9" fontSize={18} />
      </ButtonStyled>
    </Container>
  );
};

export default DatePickerComponent;
