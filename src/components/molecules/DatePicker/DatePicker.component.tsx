import moment from 'moment';
import React, { useEffect, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { BorderStyle } from '../../templates/Border/Border.template';
import Text from '../../atoms/Text/Text.component';

const Container = styled(BorderStyle)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DatePickerComponent = (props: any) => {
  const date = props.date;
  return (
    <Container>
      <button disabled={date <= moment()}>menor</button>
      <div>
        <Text>{date.format('MMMM')}</Text>
        <Text>{date.format('YYYY')}</Text>
      </div>
      <button>maior</button>
    </Container>
  );
};

export default DatePickerComponent;
