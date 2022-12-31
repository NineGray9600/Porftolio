import React, { useState } from 'react';
import styled from './Sort.module.scss';

const sort: Array<string> = ['All', 'App', 'Card', 'Web'];

interface IProp {
  onClickSort: (value: string) => void;
}

export const Sort: React.FC<IProp> = ({ onClickSort }: any) => {
  const [currentSort, setCurrentSort] = useState<string>('All');

  const handleSort = (item: string) => {
    setCurrentSort(item);
    onClickSort(item);
  };

  return (
    <div className={styled.rowContent}>
      <ul className={styled.portfolioFilters}>
        {sort.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => handleSort(item)}
              className={currentSort === item ? styled.active : styled.li}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
