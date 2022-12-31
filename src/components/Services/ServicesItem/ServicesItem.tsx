import React from 'react';
import styled from './ServicesItem.module.scss';
import sprite from 'assets/sprite.svg';

interface IProps {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const ServicesItem: React.FC<IProps> = ({ title, desc, icon }) => {
  return (
    <div className={styled.serviceItem} data-aos={'fade-up'}>
      <div className={styled.icon}>
        <svg>
          <use href={sprite + `#${icon}`} />
        </svg>
      </div>
      <div className={styled.itemWrapper}>
        <h4>
          <a href="">{title}</a>
        </h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};
