import React, { FC } from 'react';
import styled from './About.module.scss';
import { profile } from 'assets/images/hero';
import { AboutItem } from './AboutItem/AboutItem';

const userData = {
  position: 'UI/UX Designer & Web Developer',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  information:
    'Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.',
  info: [
    { title: 'Birthday:', text: '1 May 1995' },
    { title: 'Website:', text: 'www.example.com' },
    { title: 'Phone:', text: '+123 456 7890' },
    { title: 'City:', text: 'New York, USA' },
    { title: 'Age:', text: '30' },
    { title: 'Degree:', text: 'Master' },
    { title: 'Email:', text: 'email@example.com' },
    { title: 'Freelance:', text: 'Available' },
  ],
};
const text = {
  title: 'About',
  text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
};

export const About: React.FC = () => {
  return (
    <section id={'about'} className={styled.about}>
      <div className={styled.container}>
        <div>
          <h2>{text.title}</h2>
          <p>{text.text}</p>
        </div>

        <div className={styled.row}>
          <div
            className={styled.rowImage}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={profile} alt={'....'} />
          </div>
          <div
            className={styled.rowContent}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h3> {userData.position}</h3>
            <p>{userData.description}</p>
            <div className={styled.rowInfo}>
              <ul>
                {userData.info.map((item, index) => {
                  return <AboutItem key={index} {...item} />;
                })}
              </ul>
            </div>
            <p className={styled.info}>{userData.information}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
