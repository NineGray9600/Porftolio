import React from 'react';
import { ChevronRight } from 'react-bootstrap-icons';

interface IProp {
  title: string;
  text: string;
}

export const AboutItem: React.FC<IProp> = ({ title, text }) => {
  return (
    <>
      <li>
        <ChevronRight color="#149ddd" />
        <strong>{title}</strong>
        <span>{text}</span>
      </li>
    </>
  );
};
