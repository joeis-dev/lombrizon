import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Feather, ShieldCheck } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://placehold.co/1800x900.png"
          alt="Lush green field"
          data-ai-hint="lush field"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            EcoTierra Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-body drop-shadow-md">
            Nurturing the Earth, one harvest at a time. High-quality worm compost and sustainable solutions.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12">
            Our Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="ai-assistant" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-4xl md:text-5xl mb-4">
                AI Fertilizer Advisor
              </h2>
              <p className="mb-6 text-lg font-body">
                Not sure how much fertilizer to use? Our AI-powered assistant helps you determine the perfect dosage of worm compost for your specific crops and soil conditions, ensuring optimal growth and sustainability.
              </p>
              <Button asChild>
                <Link href="/ai-assistant">
                  Try the Assistant <Bot className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="AI Assistant illustration"
                data-ai-hint="ai agriculture"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12">
            Why Choose EcoTierra?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <Feather className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl mb-2">100% Organic</h3>
              <p className="font-body">Our products are all-natural, enriching your soil without harmful chemicals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl mb-2">Quality Guaranteed</h3>
              <p className="font-body">We stand by the quality of our humus, breeding stock, and worms.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl mb-2">Expert Support</h3>
              <p className="font-body">From our AI assistant to our team, we're here to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
