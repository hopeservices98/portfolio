export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}