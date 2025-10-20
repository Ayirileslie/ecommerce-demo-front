'use client';

import { ProductFilters, Category } from '@/types';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  categories: Category[];
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  categories,
}: FilterSidebarProps) {
  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...filters,
      category: category === filters.category ? '' : category,
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({
      ...filters,
      minPrice: min,
      maxPrice: max,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      category: '',
      minPrice: 0,
      maxPrice: 1000,
      search: '',
      sortBy: 'newest',
    });
  };

  const hasActiveFilters =
    filters.category ||
    filters.minPrice !== 0 ||
    filters.maxPrice !== 1000 ||
    filters.search;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) =>
            onFilterChange({ ...filters, search: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition"
            >
              <input
                type="checkbox"
                checked={filters.category === category.name}
                onChange={() => handleCategoryChange(category.name)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700">
                {category.name}
              </span>
              <span className="ml-auto text-xs text-gray-500">
                {category.productCount}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Price Range
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Min: ${filters.minPrice}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.minPrice}
              onChange={(e) =>
                handlePriceChange(
                  parseInt(e.target.value),
                  filters.maxPrice!
                )
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Max: ${filters.maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.maxPrice}
              onChange={(e) =>
                handlePriceChange(
                  filters.minPrice!,
                  parseInt(e.target.value)
                )
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Quick Price Filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Quick Filters
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handlePriceChange(0, 50)}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
          >
            Under $50
          </button>
          <button
            onClick={() => handlePriceChange(50, 100)}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
          >
            $50 - $100
          </button>
          <button
            onClick={() => handlePriceChange(100, 300)}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
          >
            $100 - $300
          </button>
          <button
            onClick={() => handlePriceChange(300, 1000)}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
          >
            Over $300
          </button>
        </div>
      </div>
    </div>
  );
}