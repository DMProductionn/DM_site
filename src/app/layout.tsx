import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Header } from '@/widgets';
import { Footer } from '@/widgets/footer/Footer';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
});


export const metadata: Metadata = {
  title: 'Dm_Production',
  description: 'Веб-разработка',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
        <Theme>
          <Header />
           <main className="font-mono mt-[60px] flex-1 min-h-screen">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
