'use client'

import { Search } from 'lucide-react'

export function Header({ toolCount, onSearch }) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              HackingTool v2.0.0
            </h1>
            <p className="text-sm text-gray-400">
              185+ Security & Penetration Testing Tools
            </p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search tools by name or category..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {toolCount !== undefined && (
          <p className="text-xs text-gray-500 mt-3">
            Showing {toolCount} tools
          </p>
        )}
      </div>
    </header>
  )
}
