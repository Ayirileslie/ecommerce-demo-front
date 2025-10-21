import Image from 'next/image';
import Link from 'next/link';
import { Order } from '@/types';
import { Package, Truck, CheckCircle, Clock, ChevronRight } from 'lucide-react';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
      label: 'Pending',
    },
    processing: {
      icon: Package,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      label: 'Processing',
    },
    shipped: {
      icon: Truck,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      label: 'Shipped',
    },
    delivered: {
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-100',
      label: 'Delivered',
    },
    cancelled: {
      icon: Clock,
      color: 'text-red-600',
      bg: 'bg-red-100',
      label: 'Cancelled',
    },
  };

  const status = statusConfig[order.status];
  const StatusIcon = status.icon;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Order Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Order Number
              </p>
              <p className="text-sm font-bold text-gray-900">{order.id}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Date Placed
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {formatDate(order.createdAt)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Total
              </p>
              <p className="text-sm font-semibold text-gray-900">
                ${order.total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`flex items-center px-3 py-1.5 rounded-full ${status.bg}`}>
            <StatusIcon className={`h-4 w-4 mr-2 ${status.color}`} />
            <span className={`text-sm font-semibold ${status.color}`}>
              {status.label}
            </span>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="p-6">
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <Link
                href={`/products/${item.product.id}`}
                className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden"
              >
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.product.id}`}>
                  <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition truncate">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Qty: {item.quantity}
                </p>
                <p className="text-sm font-semibold text-blue-600 mt-1">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
          <button className="flex-1 sm:flex-initial bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center group">
            View Details
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex-1 sm:flex-initial bg-gray-100 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
            Track Order
          </button>
          {order.status === 'delivered' && (
            <button className="flex-1 sm:flex-initial bg-gray-100 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
              Buy Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}