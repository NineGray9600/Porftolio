import React from 'react';
import sprite from 'assets/sprite.svg';
import styled from './Profile.module.scss';
import { profile } from 'assets/images/hero';

const links = ['skype', 'instagram', 'linkedin', 'telegram', 'twitter'];

export const Profile = () => {
  return (
    <div className={styled.profile}>
      <div className={styled.profilePhotoWrapper}>
        <img
          className={styled.profileImg}
          alt={'profile photo'}
          src={profile}
        />
      </div>
      <h1>Vlad Gray</h1>
      <ul className={styled.icons}>
        {links.map((svg, index) => {
          return (
            <li className={styled.socialWrapper} key={index}>
              <svg className={styled.socialIcon}>
                <use href={sprite + `#${svg}`} />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
