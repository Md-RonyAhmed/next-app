import "@/app/globals.css";
import { Roboto } from "next/font/google";
export const metadata = {
  title: "Home",
  description: "Generated by Next.js home",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </head>
      <body>
        <main className="h-screen py-20">{children}</main>
      </body>
    </html>
  );
}
