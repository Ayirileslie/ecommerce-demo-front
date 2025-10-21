'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/redux/hooks';
import { mockProducts } from '@/lib/mock-data/products';
import { Product } from '@/types';
import ProductTable from '@/components/admin/ProductTable';
import ProductFormModal from '@/components/admin/ProductFormModal';
import DeleteConfirmModal from '@/components/admin/DeleteConfirmModal';
import { toast } from 'sonner';
import { Plus, Search } from 'lucide-react';

export default function AdminProductsPage() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Redirect if not admin
    if (!user) {
      router.push('/login');
      return;
    }
    if (user.role !== 'admin') {
      router.push('/');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') {
    return null;
  }

  // Filter products by search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: `${products.length + 1}`,
    };
    setProducts([...products, newProduct]);
    setShowAddModal(false);
    toast.success('Product added successfully!');
  };

  const handleEditProduct = (productData: Product) => {
    setProducts(
      products.map((p) => (p.id === productData.id ? productData : p))
    );
    setEditingProduct(null);
    toast.success('Product updated successfully!');
  };

  const handleDeleteProduct = () => {
    if (deletingProduct) {
      setProducts(products.filter((p) => p.id !== deletingProduct.id));
      setDeletingProduct(null);
      toast.success('Product deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Product Management
          </h1>
          <p className="text-gray-600">
            Manage your product catalog
          </p>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Add Product Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Product
            </button>
          </div>
        </div>

        {/* Products Table */}
        <ProductTable
          products={filteredProducts}
          onEdit={(product) => setEditingProduct(product)}
          onDelete={(product) => setDeletingProduct(product)}
        />

        {/* Modals */}
        {showAddModal && (
          <ProductFormModal
            onClose={() => setShowAddModal(false)}
            onSubmit={handleAddProduct}
          />
        )}

        {editingProduct && (
          <ProductFormModal
            product={editingProduct}
            onClose={() => setEditingProduct(null)}
            onSubmit={handleEditProduct}
          />
        )}

        {deletingProduct && (
          <DeleteConfirmModal
            productName={deletingProduct.name}
            onConfirm={handleDeleteProduct}
            onCancel={() => setDeletingProduct(null)}
          />
        )}
      </div>
    </div>
  );
}