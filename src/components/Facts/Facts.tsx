import React from 'react';
import styled from './Facts.module.scss';
import { FactsItem } from './FactsItem/FactsItem';
import { factsData } from '../../utils/db/factsData';

export const Facts = () => {
  return (
    <section>
      <div className={styled.container}>
        <div>
          <h2>{factsData.title}</h2>
          <p>{factsData.text}</p>
        </div>
        <div className={styled.rowFacts}>
          {factsData.info.map((item, index) => {
            return <FactsItem key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
