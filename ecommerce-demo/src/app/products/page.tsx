'use client';

import { useState, useMemo } from 'react';
import { mockProducts, mockCategories } from '@/lib/mock-data/products';
import ProductCard from '@/components/products/ProductCard';
import FilterSidebar from '@/components/products/FilterSidebar';
import { ProductFilters } from '@/types';
import { Grid, List } from 'lucide-react';

export default function ProductsPage() {
  const [filters, setFilters] = useState<ProductFilters>({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    search: '',
    sortBy: 'newest',
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= filters.minPrice! && p.price <= filters.maxPrice!
    );

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        // Already in newest order
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {mockProducts.length} products
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:block lg:w-64 ${showFilters ? 'block' : 'hidden'}`}
          >
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              categories={mockCategories}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      sortBy: e.target.value as ProductFilters['sortBy'],
                    })
                  }
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">
                  No products found
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      category: '',
                      minPrice: 0,
                      maxPrice: 1000,
                      search: '',
                      sortBy: 'newest',
                    })
                  }
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}