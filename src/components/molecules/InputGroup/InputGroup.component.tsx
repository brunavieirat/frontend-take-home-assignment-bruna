import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text/Text.component';

const InputGroupContainer = styled.div`
  width: 100%;
`;

export interface InputGroupParams {
  label: string;
  children: ReactNode;
}

const InputGroupComponent: React.FC<InputGroupParams> = (
  props: InputGroupParams
) => {
  const { label, children } = props;
  return (
    <InputGroupContainer>
      <Text type="label">{label}</Text>
      {children}
    </InputGroupContainer>
  );
};

export default InputGroupComponent;
