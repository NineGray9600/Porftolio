import React from 'react';
import styled from './About.module.scss';
import { profile } from 'assets/images/hero';
import { userData, text } from '../../utils/db/userData';
import { AboutItem } from './AboutItem/AboutItem';

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
