import React, { useState } from 'react';
import styled from './Navbar.module.scss';
import sprite from 'assets/sprite.svg';
import { Link } from 'react-scroll';

export const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>();

  const navigation = [
    { id: 1, href: 'home', icon: 'home' },
    { id: 2, href: 'about', icon: 'about' },
    { id: 3, href: 'resume', icon: 'resume' },
    { id: 4, href: 'portfolio', icon: 'portfolio' },
    { id: 5, href: 'services', icon: 'services' },
    { id: 6, href: 'contact', icon: 'contact' },
  ];

  function toggleActive(id: number) {
    setActiveLink(id);
  }
  return (
    <nav className={styled.container}>
      <ul>
        {navigation.map(({ id, href, icon }) => {
          return (
            <li>
              <Link
                to={href}
                smooth={true}
                duration={500}
                className={activeLink === id ? styled.active : styled.link}
                onClick={() => toggleActive(id)}
                key={id}
              >
                <svg>
                  <use href={sprite + `#${icon}`} />
                </svg>
                <span>{icon}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
