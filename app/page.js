'use client'

import { useState, useMemo } from 'react'
import { categories } from '@/data/tools'
import { Header } from '@/components/Header'
import { ToolCard } from '@/components/ToolCard'
import { DetailModal } from '@/components/DetailModal'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories

    const query = searchQuery.toLowerCase()
    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        category.tools.some(
          (tool) =>
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query)
        )
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <Header
        toolCount={filteredCategories.reduce((acc, cat) => acc + cat.tools.length, 0)}
        onSearch={setSearchQuery}
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No tools found matching "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((category) => (
              <ToolCard
                key={category.id}
                category={category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedCategory && (
        <DetailModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  )
}
