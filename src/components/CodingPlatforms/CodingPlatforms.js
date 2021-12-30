import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CodingPlatformsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { codingplatforms } from '../../constants/constants';

const Technologies = () =>  (
  <Section nopadding id="coding platforms">
    <SectionDivider/>
    <SectionTitle main>Coding Platforms</SectionTitle>
    <GridContainer>
      {codingplatforms.map(({id,image,title,description,tags,visit})=>(
        <BlogCard key={id}>
          <img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>Skills</TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Link</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Technologies;
