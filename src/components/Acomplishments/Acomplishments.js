import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1743, text: 'Max rating in CodeChef'},
  { number: 10, text: '/276 rank in Inter-College Competition', },
  { number: 5, text: 'Star in HackerRank problem solving and SQL', },
  { number: 800, text: 'Coding Problems across all platforms', },
  { number: 3, text: 'Projects on web development', },
  { number: 1, text: 'Prize in District level Essay-writing Competition', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;