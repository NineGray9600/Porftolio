import React from 'react';
import styled from './Skills.module.scss';
import { SkillsItem } from './SkillsItem/SkillsItem';
import { skillsData } from '../../utils/db/skillsData';

export const Skills = () => {
  return (
    <section className={styled.skills}>
      <div className={styled.container}>
        <div className={styled.sectionTitle}>
          <h2>{skillsData.title}</h2>
          <p>{skillsData.text}</p>
        </div>

        <div className={styled.rowSkills}>
          <div className={styled.rowSkillsColumn} data-aos="fade-up">
            {skillsData.info.map((item, index) => {
              return <SkillsItem key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
