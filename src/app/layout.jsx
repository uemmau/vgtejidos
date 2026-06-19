import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import CartDrawer from '@/components/CartDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'VG Tejidos — Ropa Artesanal Premium',
  description:
    'Sacos, sweaters, buzos, bufandas y gorros tejidos a mano con lana premium. Diseño artesanal, calidad y estilo natural.',
  keywords: 'tejidos artesanales, ropa tejida, sacos, sweaters, bufandas, gorros, lana merino',
  openGraph: {
    title: 'VG Tejidos — Ropa Artesanal Premium',
    description: 'Tejidos artesanales con calidad premium y estilo natural.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream-200 text-earth font-sans antialiased">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </CartProvider>
      </body>
    </html>
  );
}
