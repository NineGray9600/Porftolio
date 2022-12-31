import React from 'react';
import styled from './Hero.module.scss';
import Typewritter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id={'home'} className={styled.hero}>
      <div className={styled.container}>
        <h1>Vlad Gray</h1>
        <p>
          I'm
          <span>
            <Typewritter
              options={{
                strings: [
                  'Designer',
                  'Developer',
                  'Freelancer',
                  'Photographer',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
