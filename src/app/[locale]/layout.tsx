import { Inter } from "next/font/google";
import { getMessages, setRequestLocale} from "next-intl/server";
import NextTopLoader from 'nextjs-toploader';
import "@/styles/globals.scss";
import { notFound } from "next/navigation";
import BaseLayout from "@/layout/BaseLayout";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { fetchData } from "@/service/get";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
async function getSocials() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/api/socials?sort=id:asc`);
}


export default async function RootLayout({
  children,
  params: { locale },
}: any) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  const socials = await getSocials()
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextTopLoader
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <NextIntlClientProvider  messages={messages}>
              <BaseLayout socials={socials?.data || []}>{children}</BaseLayout>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
