
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string; // Ajout de la propriété image optionnelle
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Formation {
    degree: string;
    school: string;
    year: string;
    specialization: string;
}
