interface IInfo {
  skill: string;
  progress: string;
  count: number;
}

interface ISkills {
  title: string;
  text: string;
  info: IInfo[];
}

export const skillsData: ISkills = {
  title: 'Skills',
  text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex  aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia  fugiat sit in iste officiis commodi quidem hic quas.',
  info: [
    { skill: 'HTML', progress: '80%', count: 80 },
    { skill: 'CSS', progress: '60%', count: 60 },
    { skill: 'JS', progress: '100%', count: 100 },
    { skill: 'REACT', progress: '60%', count: 60 },
    { skill: 'NODEJS', progress: '70%', count: 70 },
    { skill: 'ANGULAR', progress: '50%', count: 50 },
  ],
};
