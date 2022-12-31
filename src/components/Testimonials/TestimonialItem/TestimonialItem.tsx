import React from 'react';
import styled from './TestimonialItem.module.scss';

interface IProp {
  id: number;
  image: string;
  name: string;
  position: string;
  desc: string;
}

const TestimonialItem: React.FC<IProp> = ({ image, name, position, desc }) => {
  return (
    <div className={styled.testimonialItem} data-aos="fade-up">
      <p>
        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
        {desc}
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
      <img src={image} className={styled.testimonialImg} alt="" />

      <h3>{name}</h3>
      <h4>{position}</h4>
    </div>
  );
};

export default TestimonialItem;
