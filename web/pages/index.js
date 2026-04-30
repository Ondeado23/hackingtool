import { useState, useMemo } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ToolCard from '../components/ToolCard';
import DetailModal from '../components/DetailModal';
import { tools } from '../data/tools';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [filterTag, setFilterTag] = useState(null);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some((tag) => tag.includes(query));

      const matchesTag = !filterTag || tool.tags.includes(filterTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, filterTag]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    tools.forEach((tool) => {
      tool.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-card-border bg-background bg-opacity-95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚔️</span>
            <span className="font-black text-xl text-accent">HackingTool</span>
          </div>
          <div className="text-sm text-gray-400">
            Showing {filteredTools.length} of {tools.length} categories
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Header />
        <SearchBar onSearch={setSearchQuery} />

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-3">Filter by tag:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterTag(null)}
                className={`px-4 py-2 rounded border-2 transition-colors duration-300 ${
                  !filterTag
                    ? 'border-accent bg-accent text-background font-semibold'
                    : 'border-card-border text-gray-400 hover:border-accent'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(filterTag === tag ? null : tag)}
                  className={`px-4 py-2 rounded border-2 transition-colors duration-300 text-sm ${
                    filterTag === tag
                      ? 'border-accent bg-accent text-background font-semibold'
                      : 'border-card-border text-gray-400 hover:border-accent'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, idx) => (
              <ToolCard
                key={tool.id}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                index={tool.id}
                onClick={() => setSelectedTool(tool)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No tools found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterTag(null);
              }}
              className="mt-4 px-6 py-2 bg-accent hover:bg-accent-dark text-background font-semibold rounded transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border mt-16 py-8 bg-card-bg bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>HackingTool v2.0.0 — 185+ security tools for ethical hacking and penetration testing</p>
          <p className="mt-2">
            For educational and authorized security testing only. Always obtain proper authorization.
          </p>
        </div>
      </footer>

      {/* Detail Modal */}
      <DetailModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </div>
  );
}
