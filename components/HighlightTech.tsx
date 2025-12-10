import React from 'react';

// Liste des mots-clés à mettre en évidence et leurs couleurs associées (style VS Code Dark)
const keywords = {
  // Langages & Frameworks (Bleu/Cyan)
  'Python': 'text-blue-400',
  'Django': 'text-emerald-400',
  'Flask': 'text-green-400',
  'React': 'text-cyan-400',
  'TypeScript': 'text-blue-300',
  'JavaScript': 'text-yellow-300',
  'HTML': 'text-orange-400',
  'HTML5': 'text-orange-400',
  'CSS': 'text-blue-300',
  'CSS3': 'text-blue-300',
  'Tailwind': 'text-cyan-300',
  'SQL': 'text-purple-400',
  'PostgreSQL': 'text-blue-300',
  'FastAPI': 'text-teal-400',
  
  // Data & Tools (Orange/Jaune/Rose)
  'Pandas': 'text-pink-400',
  'NumPy': 'text-blue-400',
  'Matplotlib': 'text-orange-300',
  'Scraping': 'text-yellow-400',
  'Beautiful Soup': 'text-yellow-200',
  'Scrapy': 'text-green-300',
  'Power BI': 'text-yellow-500',
  'Google Sheets': 'text-green-500',
  'Docker': 'text-blue-500',
  'Git': 'text-red-400',
  'Supabase': 'text-emerald-300',
  'Stripe': 'text-indigo-400',
  'Vercel': 'text-gray-100',
  'API': 'text-purple-300',
  'RESTful': 'text-purple-300',
  'Data': 'text-pink-300',
  'Analyst': 'text-pink-300',
  'Backend': 'text-indigo-300',
  'Frontend': 'text-indigo-300',
};

interface HighlightTechProps {
  text: string;
}

export const HighlightTech: React.FC<HighlightTechProps> = ({ text }) => {
  if (!text) return null;

  // Créer une regex dynamique à partir des clés
  // On utilise \b pour s'assurer qu'on matche des mots entiers
  const regex = new RegExp(`\\b(${Object.keys(keywords).join('|')})\\b`, 'gi');

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => {
        // Recherche insensible à la casse pour trouver la clé correspondante
        const key = Object.keys(keywords).find(k => k.toLowerCase() === part.toLowerCase());
        
        if (key) {
          const colorClass = keywords[key as keyof typeof keywords];
          return (
            <span key={index} className={`${colorClass} font-semibold`}>
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};