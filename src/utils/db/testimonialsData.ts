import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
} from '../../assets/images/testimonials';

export interface IData {
  id: number;
  image: string;
  name: string;
  position: string;
  desc: string;
}

interface ITestimonials {
  title: string;
  description: string;
  data: IData[];
}

export const testimonialsData: ITestimonials = {
  title: 'Testimonials',
  description:
    'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
  data: [
    {
      id: 1,
      image: testimonial1,
      name: 'Saul Goodman',
      position: 'UI/UX Designer',
      desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
    {
      id: 2,
      image: testimonial2,
      name: 'Saul Goodman',
      position: 'UI/UX Designer',
      desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
    {
      id: 3,
      image: testimonial3,
      name: 'Saul Goodman',
      position: 'UI/UX Designer',
      desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
    {
      id: 4,
      image: testimonial4,
      name: 'Saul Goodman',
      position: 'UI/UX Designer',
      desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
    {
      id: 5,
      image: testimonial5,
      name: 'Saul Goodman',
      position: 'UI/UX Designer',
      desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
  ],
};
