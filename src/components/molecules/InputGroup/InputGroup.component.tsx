import React from 'react';
import styled from 'styled-components';
import InputComponent from '../../atoms/Input/Input.component';
import Text from '../../atoms/Text/Text.component';

const InputGroupContainer = styled.div`
  width: 100%;
`;

const InputGroupComponent = (props: any) => {
  return (
    <InputGroupContainer>
      <Text type="label">{props.label}</Text>
      {props.children}
    </InputGroupContainer>
  );
};

export default InputGroupComponent;
