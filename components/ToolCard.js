'use client'

export function ToolCard({ category, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-6 rounded-lg border border-gray-800 hover:border-primary bg-gray-900 hover:bg-gray-800 transition-all cursor-pointer group"
    >
      <div className="text-4xl mb-3">{category.icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2 text-left group-hover:text-primary transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-gray-400 text-left mb-3">
        {category.description}
      </p>
      <div className="text-xs text-gray-500">
        {category.tools.length} tools
      </div>
    </button>
  )
}
