import type { Project, Experience, Formation } from './types';

export const skills: string[] = [
  "Python", "Flask", "Django", "Web Scraping", "Data Analysis", "SQL", "Pandas", "NumPy",
  "Matplotlib", "API REST", "Git", "Docker", "Tailwind CSS", "FastAPI", "Supabase"
];

export const projects: Project[] = [
  {
    title: "Application Web E-commerce",
    description: "Développement d'une application de commerce électronique complète avec Flask, Stripe pour les paiements, et une base de données PostgreSQL. Inclut un panier d'achat, un système de gestion des commandes et une interface administrateur.",
    technologies: ["Flask", "PostgreSQL", "Stripe API", "Jinja2", "HTML/CSS"],
    link: "https://www.moramarket.mg/?srsltid=AfmBOop5SSFF7q5drXHf4iPrKUkJXh8yU6a8HyxVSRjDZC_RrgR9iDNj"
  },
  {
    title: "Site Web Cabinet Rabemananjara",
    description: "Développement du site vitrine pour le Cabinet Rabemananjara, expert en propriété industrielle à Madagascar. Présentation des services de protection des marques, brevets et dessins industriels.",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://cip-rabemananjara.mg/"
  },
  {
    title: "Site Web Hope Services",
    description: "Développement d'un site web professionnel pour Hope Services, présentant les services de l'entreprise avec un design moderne et responsive. Interface optimisée pour l'expérience utilisateur avec navigation fluide et contenu bien structuré.",
    technologies: ["React", "Vercel", "Responsive Design", "Modern UI"],
    link: "https://hope-services-website.vercel.app/"
  },
  {
    title: "Scripts d'Automatisation de Scraping",
    description: "Création de scripts avancés pour le web scraping éthique, la manipulation et l'analyse de données pour des missions en freelance. Automatisation de la collecte de données pour générer des insights.",
    technologies: ["Python", "Beautiful Soup", "Pandas", "Scrapy"],
    link: "https://github.com/angelorak98/twitter_scrapy"
  }
];

export const experiences: Experience[] = [
  {
    role: "Développeur Python",
    company: "Mada Assist",
    period: "Fév. 2024 - Présent",
    description: "Développement et maintenance d'applications web backend en Python/Django, implémentation d'API RESTful, analyse de données, création de tableaux de bord et intégration de solutions de paiement."
  },
  {
    role: "Développeur Python Freelance",
    company: "Missions Indépendantes",
    period: "2023 - Présent",
    description: "Spécialisé en web scraping avancé et analyse de données. Développement de scripts d'automatisation pour la collecte de données et création de pipelines pour la manipulation et l'analyse de données."
  },
  {
    role: "Data Analyst",
    company: "Societe Datascar",
    period: "Fév. 2021 - Déc. 2023",
    description: "Collecte, traitement et analyse de grandes quantités de données pour identifier des tendances, créer des rapports et aider à la prise de décision. Utilisation de Python, SQL et des outils de visualisation."
  },
  {
    role: "Développeur Python (Stagiaire)",
    company: "Orange",
    period: "2020",
    description: "Participation au développement d'un outil d'automatisation, contribution à la documentation technique, maintenance et débogage."
  }
];

export const formations: Formation[] = [
    {
        degree: "Formation Autodidacte",
        school: "CodeAvecJonathan",
        year: "Continu",
        specialization: "Scraping éthique et avancé, manipulation et analyse de données."
    },
    {
        degree: "Maitrise",
        school: "Ecole Nationale d'Informatique (ENI)",
        year: "2015 - 2019",
        specialization: "Formation approfondie en ingénierie logicielle, incluant la conception de systèmes d'information, le développement web et mobile, la gestion de bases de données, la sécurité informatique, et les méthodes agiles. L'ENI est reconnue comme le premier centre de formation et de recherche en informatique à Madagascar."
    },
    {
        degree: "Baccalauréat",
        school: "Lycée Privé ACEEM",
        year: "2015",
        specialization: "Série C"
    }
];