import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Contanier";
import { S } from "../skils/Skils_Styles";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quote"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};
const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;
  position: relative;
  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`;
