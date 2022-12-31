import React from 'react';
import styled from './SkillsItem.module.scss';
import { ProgressBar } from 'react-bootstrap';

interface IProp {
  skill: string;
  progress: string;
  count: number;
}

export const SkillsItem: React.FC<IProp> = ({ skill, progress, count }) => {
  return (
    <div className={styled.progress}>
      <span className={styled.skill}>
        {skill} <i className={styled.val}>{progress}</i>
      </span>
      <ProgressBar now={count} animated={true} />
    </div>
  );
};
