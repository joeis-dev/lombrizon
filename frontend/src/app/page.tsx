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
                Las Lombrices de Joe 
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-body drop-shadow-md">
                Nutriendo la tierra con soluciones organicas. 
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/products">Ver productos</Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12">
                Nuestros productos mas vendidos 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">
                Ver todos los productos<ArrowRight className="ml-2 h-4 w-4" />
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
                Botibriz puede ayudarte 
              </h2>
              <p className="mb-6 text-lg font-body">
                Tienes dudas sobre como aplicar el humus a tu huerto/jardin o como cuidar de tu cultivo de lombrices?, prueba nuestro asistente inteligente el te va resolver todas tus dudas al respecto!
              </p>
              <Button asChild>
                <Link href="/ai-assistant">
                  Hablar con Botibriz<Bot className="ml-2 h-4 w-4" />
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
            Porque elegir Las Lombrices de Joe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <Feather className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl mb-2">100% Organico</h3>
              <p className="font-body">Alimentamos nuestras lombrices con una mezcla variada de vegetales para garantizar un fertilizante que cuenta con todos los minerales que tus plantas necesitan para crecer y dar frutos.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl mb-2">Calidad garantizada</h3>
              <p className="font-body">Contamos con certificaion por parte de la OMRI para todos nuestros procesos.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl mb-2">Servicio a domicilio</h3>
              <p className="font-body">Compras en linea y recibes tu pedido en la puerta de tu domicilio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
