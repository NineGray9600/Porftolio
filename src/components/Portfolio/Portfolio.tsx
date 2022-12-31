import React, { memo, useState } from 'react';
import styled from './Portfolio.module.scss';
import { Sort } from '../Sort/Sort';
import { PortfolioItem } from './PortfolioItem/PortfolioItem';
import { portfolioData, IData } from '../../utils/db/portfolioData';

export const Portfolio: React.FC = memo(() => {
  const [filtered, setFiltered] = useState<IData[]>([]);

  const onClickSort = (category: string) => {
    const newArray = portfolioData.data.filter(item =>
      category === 'All' ? item : item.category === category,
    );
    setFiltered(newArray);
  };

  return (
    <section id={'portfolio'} className={styled.portfolio}>
      <div className={styled.container}>
        <div>
          <h2>{portfolioData.title}</h2>
          <p>{portfolioData.description}</p>
        </div>

        <div className={styled.rowWrapper} data-aos="fade-up">
          <Sort onClickSort={onClickSort} />
        </div>
        <div
          className={styled.rowPortfolioContainer}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filtered.map((obj, index) => {
            return <PortfolioItem key={index} {...obj} />;
          })}
        </div>
      </div>
    </section>
  );
});
