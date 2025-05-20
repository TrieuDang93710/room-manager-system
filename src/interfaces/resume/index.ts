export interface ResumeType {
  title: string;
  image: string;
  description: string;
  cv: string;
  education: string;
  level: string;
  experiences: Experience[];
  certificates: Certificate[];
  awards: Award[];
  skills: Skill[];
  languages: Language[];
  status: string[];
  applicant: number;
}

export interface Experience {
  job: string;
  time: string;
  detail: string;
  company: string;
}

export interface Certificate {
  time: string;
  title: string;
}

export interface Award {
  time: string;
  title: string;
}

export interface Language {
  ng_1: string;
  ng_2: string;
}

export interface Skill {
  title: string;
  level: string;
}
