import Link from 'next/link';
import { LeafIcon } from '@/components/icons/leaf-icon';
import { Github, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <LeafIcon className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">
                Las Lombrices de Joe 
              </span>
            </Link>
            <p className="text-sm">
                Nutriendo la tierra con soluciones organicas. 
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Enlaces de interes</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-accent transition-colors">Productos</Link></li>
              <li><Link href="/ai-assistant" className="hover:text-accent transition-colors">Asistente virtual</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contacto</Link></li>
              <li><Link href="/profile" className="hover:text-accent transition-colors">Mi cuenta</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Siguenos en redes</h3>
            <p className="mb-4 text-sm">
              Mantente informado sobre promociones y productos.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Github className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Las Lombrices de Joe  |  Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
