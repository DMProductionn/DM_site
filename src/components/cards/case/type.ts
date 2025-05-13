export interface CaseProps {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  image: string;
  numbering: string;
}

type Skill = {
  id: number;
  name: string;
  bg: string;
};
