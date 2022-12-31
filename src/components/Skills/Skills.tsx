import React from 'react';
import styled from './Skills.module.scss';
import { SkillsItem } from './SkillsItem/SkillsItem';

const dataSkills = {
  title: 'Skills',
  text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
  info: [
    { skill: 'HTML', progress: '80%', count: 80 },
    { skill: 'CSS', progress: '60%', count: 60 },
    { skill: 'JS', progress: '100%', count: 100 },
    { skill: 'REACT', progress: '60%', count: 60 },
    { skill: 'NODEJS', progress: '70%', count: 70 },
    { skill: 'ANGULAR', progress: '50%', count: 50 },
  ],
};

export const Skills = () => {
  return (
    <section className={styled.skills}>
      <div className={styled.container}>
        <div className={styled.sectionTitle}>
          <h2>{dataSkills.title}</h2>
          <p>{dataSkills.text}</p>
        </div>

        <div className={styled.rowSkills}>
          <div className={styled.rowSkillsColumn} data-aos="fade-up">
            {dataSkills.info.map((item, index) => {
              return <SkillsItem key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
