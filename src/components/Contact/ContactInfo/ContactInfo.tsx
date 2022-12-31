import React from 'react';
import styled from './ContactInfo.module.scss';
import sprite from 'assets/sprite.svg';

interface IProp {
  svg: string;
  title: string;
  info: string;
}

const ContactInfo: React.FC<IProp> = ({ svg, title, info }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.iconWrapper}>
        <svg>
          <use href={sprite + `#${svg}`} />
        </svg>
      </div>
      <div className={styled.infoWrapper}>
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
