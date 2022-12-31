import {
  portImg1,
  portImg2,
  portImg3,
  portImg4,
  portImg5,
  portImg6,
  portImg7,
  portImg8,
  portImg9,
} from '../../assets/images/portfolio';

export interface IData {
  id: number;
  img: string;
  category: string;
}

interface IPortfolio {
  title: string;
  description: string;
  data: IData[];
}

export const portfolioData: IPortfolio = {
  title: 'Portfolio',
  description:
    'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
  data: [
    {
      id: 1,
      img: portImg1,
      category: 'App',
    },
    {
      id: 2,
      img: portImg2,
      category: 'App',
    },
    {
      id: 3,
      img: portImg3,
      category: 'App',
    },
    {
      id: 4,
      img: portImg4,
      category: 'Card',
    },
    {
      id: 5,
      img: portImg5,
      category: 'Card',
    },
    {
      id: 6,
      img: portImg6,
      category: 'Card',
    },
    {
      id: 7,
      img: portImg7,
      category: 'Web',
    },
    {
      id: 8,
      img: portImg8,
      category: 'Web',
    },
    {
      id: 9,
      img: portImg9,
      category: 'Web',
    },
  ],
};
