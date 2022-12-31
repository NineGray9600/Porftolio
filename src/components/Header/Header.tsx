import React from 'react';
import { Profile } from '../Profile/Profile';
import { Navbar } from '../Navbar/Navbar';
import styled from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styled.header}>
      <Profile />
      <Navbar />
    </header>
  );
};
