import React from 'react';
import styled from './PortfolioItem.module.scss';

interface IProps {
  id: number;
  img: string;
  category: string;
}

export const PortfolioItem: React.FC<IProps> = ({ id, img, category }) => {
  return (
    <div className={styled.portfolioItem}>
      <div className={styled.portfolioWrap}>
        <img src={img} className={styled.portfolioImg} alt={'....'} />
        <div className={styled.overlay}>
          <a
            href="assets/img/portfolio/portfolio-9.jpg"
            data-gallery="portfolioGallery"
            className="portfolio-lightbox"
            title="Web 3"
          >
            <i className="bx bx-plus"></i>
          </a>
          <a href="portfolio-details.html" title="More Details">
            <i className="bx bx-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
