import { useState } from 'react';

export default function DetailModal({ tool, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!tool) return null;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-card-bg border-2 border-accent rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 bg-card-bg border-b border-card-border flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold text-accent">{tool.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-foreground text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Category</h3>
            <p className="text-gray-400">{tool.category}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Description</h3>
            <p className="text-gray-400 leading-relaxed">
              {tool.description || 'A powerful security and penetration testing tool.'}
            </p>
          </div>

          {tool.tags && tool.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent bg-opacity-20 border border-accent text-accent rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {tool.usage && (
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">Usage</h3>
              <div className="bg-background rounded p-4 border border-card-border">
                <code className="text-sm text-gray-300">{tool.usage}</code>
                <button
                  onClick={() => handleCopy(tool.usage)}
                  className="ml-2 text-xs text-accent hover:text-accent-dark"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Learn More</h3>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(tool.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-accent hover:bg-accent-dark text-background font-semibold rounded transition-colors duration-300"
            >
              Search Online →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
