export interface PostType {
  title: string;
  description: string;
  company: number;
  type_of_post: number;
  duration: string;
  require: Require;
}

export interface Require {
  sex: string[];
  age: number;
  experience: string;
  quantity: number;
  description: string;
}
