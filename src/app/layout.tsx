import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { FilterContextsProvider } from "@/blog-app/context/filterContext";
import Header from "@/blog-app/components/header";
import Footer from "@/blog-app/components/footer";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={roboto.className} lang="en">
      <body className="mx-auto min-h-screen max-w-[1600px] bg-blue-50">
        <FilterContextsProvider>
          <Header />
          {children}
          <Footer />
        </FilterContextsProvider>
      </body>
    </html>
  );
}
