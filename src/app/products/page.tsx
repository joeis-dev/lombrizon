import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-headline">Our Products</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Explore our range of high-quality, organic products designed for sustainable growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
