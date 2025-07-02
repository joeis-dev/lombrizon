import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Award, ShoppingBag, User } from 'lucide-react';

const recentOrders = [
  { id: 'ORD001', date: '2023-10-26', total: 450.00, status: 'Enviada' },
  { id: 'ORD002', date: '2023-10-20', total: 150.00, status: 'Enviada' },
  { id: 'ORD003', date: '2023-09-15', total: 1200.00, status: 'Enviada' },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center space-x-4 mb-12">
        <User className="h-12 w-12 text-primary" />
        <div>
            <h1 className="text-4xl md:text-5xl font-headline">Mi perfil</h1>
            <p className="text-lg text-muted-foreground">Bienvenidx, User!</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Puntos de lealtad</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234 pts</div>
            <p className="text-xs text-muted-foreground">
              Canjealos por descuentos y regalos!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de ordenes</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
                en el ultimo año
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Historial de ordenes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total.toFixed(2)} MXN</TableCell>
                  <TableCell>
                    <Badge variant="outline" className='text-primary border-primary'>{order.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
