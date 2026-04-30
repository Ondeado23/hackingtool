'use client'

import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function DetailModal({ category, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-700 bg-gray-900">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              <p className="text-sm text-gray-400">{category.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Available Tools ({category.tools.length})
            </h3>
            <div className="space-y-3">
              {category.tools.map((tool, idx) => (
                <div key={idx} className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{tool.name}</h4>
                      <p className="text-sm text-gray-400">{tool.description}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(tool.name, idx)}
                      className="p-1 hover:bg-gray-700 rounded transition"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    Category: {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Tips */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">Usage Tips</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Run tools from terminal with appropriate parameters</li>
              <li>• Always obtain proper authorization before testing</li>
              <li>• Use in isolated/test environments only</li>
              <li>• Check tool documentation for detailed options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
