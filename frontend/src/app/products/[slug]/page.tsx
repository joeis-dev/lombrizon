import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Leaf } from 'lucide-react';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            data-ai-hint={product.aiHint}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-headline mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-accent mb-6">${product.price.toFixed(2)} MXN</p>
          <div className="font-body text-lg space-y-4 mb-8">
            <p>{product.longDescription}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Leaf className="mr-2 h-5 w-5" /> 100% Organic
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
