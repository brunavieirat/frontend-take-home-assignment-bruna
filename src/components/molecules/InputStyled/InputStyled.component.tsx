import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { BorderStyle } from '../../templates/Border/Border.template';
import CurrencyInput from '../../atoms/CurrencyInput/CurrencyInput.component';

const DivStyled = styled(BorderStyle)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 800px) {
    padding: 5px;
  }
`;

const CipherStyled = styled.p`
  font-size: 20px;
  color: #708797;
  margin: 0;
  margin-left: 10px;
  @media (min-width: 800px) {
    font-size: 24px;
  }
`;

const InputStyled = styled(CurrencyInput)`
  padding: 10px;
  border: none;
  border-width: 0;
  box-shadow: none;
  font-size: 20px;
  width: 100%;
  &:focus {
    outline: none;
  }

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;

const InputStyledComponent = (props: any) => {
  return (
    <DivStyled>
      <CipherStyled> $ </CipherStyled>
      <InputStyled
        placeholder="0.00"
        type="text"
        onChange={(e: any) =>
          props.setTotalAmount(parseFloat(e.target.value.replace(',', '')))
        }
      />
    </DivStyled>
  );
};

export default InputStyledComponent;
