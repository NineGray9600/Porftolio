import React from 'react';
import styled from './FactsItem.module.scss';
import sprite from '../../../assets/sprite.svg';
import CountUp from 'react-countup';

interface IProps {
  svg: string;
  count: { start: number; end: number; duration: number };
  text: string;
  anotherText: string;
  delay: string;
}

export const FactsItem: React.FC<IProps> = ({
  svg,
  count,
  text,
  anotherText,
  delay,
}) => {
  return (
    <>
      <div className={styled.rowFact} data-aos="fade-up" data-aos-delay={delay}>
        <div className={styled.countBox}>
          <svg>
            <use href={sprite + `#${svg}`} />
          </svg>
          <div className={styled.countUpWrapper}>
            <CountUp
              start={count.start}
              end={count.end}
              duration={count.duration}
              className={styled.countUp}
            />
            <p>
              <strong>{text}</strong> {anotherText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
