import React from 'react';

import styled from 'styled-components';
import { BorderStyle } from '../../templates/Border/Border.template';

const DivStyled = styled(BorderStyle)`
  padding: 0 10px;
  display: flex;
`;

const CipherStyled = styled.p`
  font-size: 20px;
  color: #708797;
  @media (min-width: 800px) {
    font-size: 24px;
  }
`;

const InputStyled = styled.input`
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

const InputComponent = (props: any) => {
  return (
    <DivStyled>
      <CipherStyled> $ </CipherStyled>
      <InputStyled
        onChange={(e) => props.setTotalAmount(e.target.value)}
        type="number"
      ></InputStyled>
    </DivStyled>
  );
};

export default InputComponent;
