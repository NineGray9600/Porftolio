interface IInfo {
  title: string;
  text: string;
}

interface IUser {
  position: string;
  description: string;
  information: string;
  info: IInfo[];
}

export const userData: IUser = {
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
export const text = {
  title: 'About',
  text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
};
