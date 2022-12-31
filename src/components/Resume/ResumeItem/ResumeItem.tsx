import React from 'react';
import styled from '../Resume.module.scss';

const ResumeItem = () => {
  return (
    <>
      <h3 className={styled.resumeTitle}>Sumary</h3>
      <div className={styled.resumeItem}>
        <h4>Alex Smith</h4>
        <p>
          <em>
            Innovative and deadline-driven Graphic Designer with 3+ years of
            experience designing and developing user-centered digital/print
            marketing material from initial concept to final, polished
            deliverable.
          </em>
        </p>
        <ul>
          <li>Portland par 127,Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div>

      <h3 className={styled.resumeTitle}>Education</h3>
      <div className={styled.resumeItem}>
        <h4>Master of Fine Arts &amp; Graphic Design</h4>
        <h5>2015 - 2016</h5>
        <p>
          <em>Rochester Institute of Technology, Rochester, NY</em>
        </p>
        <p>
          Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto
          autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti
          sand markend
        </p>
      </div>
      <div className={styled.resumeItem}>
        <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
        <h5>2010 - 2014</h5>
        <p>
          <em>Rochester Institute of Technology, Rochester, NY</em>
        </p>
        <p>
          Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
          reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates
          asperiores voluptatem Earum molestiae consequatur neque etlon sader
          mart dila
        </p>
      </div>
    </>
  );
};

export default ResumeItem;
