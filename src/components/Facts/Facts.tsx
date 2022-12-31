import React from 'react';
import styled from './Facts.module.scss';
import { FactsItem } from './Fact/FactsItem';

const factsData = {
  title: 'Facts',
  text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
  info: [
    {
      svg: `emoji-smile`,
      count: { start: 0, end: 232, duration: 1 },
      text: 'Happy Clients',
      anotherText: 'consequuntur quae',
      delay: '100',
    },
    {
      svg: 'journal-text',
      count: { start: 0, end: 521, duration: 1 },
      text: 'Projects ',
      anotherText: 'adipisci atque cum quia aut',
      delay: '200',
    },
    {
      svg: 'headset',
      count: { start: 0, end: 1431, duration: 1 },
      text: 'Hours Of Support',
      anotherText: 'aut commodi quaerat',
      delay: '300',
    },
    {
      svg: 'people',
      count: { start: 0, end: 32, duration: 1 },
      text: 'Hard Workers ',
      anotherText: 'rerum asperiores dolor',
      delay: '400',
    },
  ],
};

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
