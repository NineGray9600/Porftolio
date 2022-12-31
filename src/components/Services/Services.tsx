import React from 'react';
import styled from './Services.module.scss';
import ServicesItem from './ServicesItem/ServicesItem';

interface IData {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

interface IServices {
  title: string;
  description: string;
  data: IData[];
}

const servicesData: IServices = {
  title: 'Services',
  description:
    'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',

  data: [
    {
      id: 1,
      title: 'Lorem Ipsum',
      desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      icon: 'card-checklist',
    },
    {
      id: 2,
      title: 'Eiusmod Tempor',
      desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'card-checklist',
    },
    {
      id: 3,
      title: 'Nemo Enim',
      desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'card-checklist',
    },
    {
      id: 4,
      title: 'Sed ut perspiciatis',
      desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'card-checklist',
    },
    {
      id: 5,
      title: 'Magni Dolores',
      desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'card-checklist',
    },
    {
      id: 6,
      title: 'Sed ut perspiciatis',
      desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'card-checklist',
    },
  ],
};

const Services: React.FC = () => {
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

export default Services;
