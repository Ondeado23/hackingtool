import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-8 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search tools by name or keyword... (try: 'subdomain', 'sql', 'web')"
        value={query}
        onChange={handleChange}
        className="w-full px-6 py-4 bg-card-bg border-2 border-card-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-all duration-300"
      />
      {query && (
        <p className="text-sm text-gray-400 mt-2">
          Searching for: <span className="text-accent">{query}</span>
        </p>
      )}
    </div>
  );
}
