import { useState } from 'react';

export default function ToolCard({ icon, title, description, index, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 animate-fade-in ${
        hover
          ? 'border-accent bg-accent bg-opacity-10 transform scale-105'
          : 'border-card-border bg-card-bg'
      }`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className={`text-xl font-bold mb-2 ${hover ? 'text-accent' : 'text-foreground'}`}>
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description || 'Security & penetration testing'}</p>
      <div className="mt-4 text-xs text-accent opacity-70">
        Category {index}
      </div>
    </div>
  );
}
