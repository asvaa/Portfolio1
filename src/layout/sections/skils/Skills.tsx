import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Contanier";
import { S } from "./Skils_Styles";
import { Fade } from "react-awesome-reveal";

const skillData = [
  {
    iconId: "codesvg",
    title: "html5",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "css3",
    title: "css3",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "react",
    title: "React",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "typescript",
    title: "typescript",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "styled",
    title: "styled components",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "figma",
    title: "WEB DESIgN",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
];

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Fade cascade={true} damping={0.2}>
            {skillData.map((S, index) => {
              return (
                <Skill
                  iconId={S.iconId}
                  key={index}
                  title={S.title}
                  decription={S.decription}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
