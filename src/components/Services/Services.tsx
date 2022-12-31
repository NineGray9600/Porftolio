import React from 'react';
import styled from './Services.module.scss';
import { ServicesItem } from './ServicesItem/ServicesItem';
import { servicesData } from '../../utils/db/servicesData';

export const Services: React.FC = () => {
  return (
    <section id={'services'} className={styled.services}>
      <div className={styled.container}>
        <div className={styled.sectionTitle}>
          <h2>{servicesData.title}</h2>
          <p>{servicesData.description}</p>
        </div>

        <div className={styled.row}>
          {servicesData.data.map((item, index) => {
            return <ServicesItem key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
