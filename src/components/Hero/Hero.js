import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Poojari Karthik Portfolio
      </SectionTitle>
      <SectionText>
        To obtain a responsible position that best utilizes my skills and provides opportunities to grow my technical and managerial skills.
      </SectionText>
    </LeftSection>

  </Section>
);

export default Hero;