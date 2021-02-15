import React from 'react';
import styled from 'styled-components';
import InputSyledComponent from '../../molecules/InputStyled/InputStyled.component';
import Text from '../../atoms/Text/Text.component';
import houseImg from '../../../assets/house.png';
import InputGroup from '../../molecules/InputGroup/InputGroup.component';
import Result from '../Result/Result.component';
import Button from '../../atoms/Button/Button.component';
import DatePickerComponent from '../../molecules/DatePicker/DatePicker.component';
import { HomeTemplateParams } from '../../pages/Home/Home.template';

const Container = styled.section`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    width: 560px;
    border-radius: 8px;
  }
`;

const ContainerHeader = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
`;

const H1Styled = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  color: #1e2a32;
  font-size: 20px;
  margin: 0;
`;

const ImgStyled = styled.img`
  height: 100%;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
`;

const SubtitleStyled = styled(Text)`
  margin: 0;
  padding: 0;
`;

const ResultContainer = styled.section`
  margin: 20px 0;
`;

const DivValues = styled.div`
  width: 100%;
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

const DivDataValue = styled.div`
  @media (min-width: 800px) {
    width: 30%;
  }
`;

const SectionBuyHouse: React.FC<HomeTemplateParams> = (
  props: HomeTemplateParams
) => {
  return (
    <Container>
      <ContainerHeader>
        <ImgStyled src={houseImg} />
        <TitleSection>
          <H1Styled>Buy a House</H1Styled>
          <SubtitleStyled type="subtitle">Saving goal</SubtitleStyled>
        </TitleSection>
      </ContainerHeader>
      <DivValues>
        <div>
          <InputGroup label="Total amount">
            <InputSyledComponent setTotalAmount={props.setTotalAmount} />
          </InputGroup>
        </div>
        <DivDataValue>
          <InputGroup label="Reach goal by">
            <DatePickerComponent
              date={props.finalDate}
              changeMonth={props.changeMonth}
            />
          </InputGroup>
        </DivDataValue>
      </DivValues>
      <ResultContainer>
        <Result
          date={props.finalDate}
          countMonth={props.countMonth}
          totalAmount={props.totalAmount}
          totalMonths={props.totalMonths}
        />
      </ResultContainer>
      <Button> Confirm </Button>
    </Container>
  );
};

export default SectionBuyHouse;
