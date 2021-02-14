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
`;

const DateStyled = styled.div`
  text-align: center;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
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
        <p>
          <b>{date.format('MMMM')}</b>
        </p>
        <Text>{date.format('YYYY')}</Text>
      </DateStyled>
      <ButtonStyled onClick={() => props.changeMonth('add')}>
        <BsChevronRight color="#8A9CA9" fontSize={18} />
      </ButtonStyled>
    </Container>
  );
};

export default DatePickerComponent;
