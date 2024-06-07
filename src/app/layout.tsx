import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { useScrollProgress} from "@/app/hooks/UseScrollProgress";
import ProgressBar from "@/components/ProgressBar";
import ScrollNavigator from "@/components/ScrollNavigator";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
    
    
      
    
<html lang="en">
  <body className={inter.className}>
    <Header />
    
      {children}
      <div className="fixed bottom-[50%] right-10 h-10 rotate-90 translate-x-8  mt-12">
        <ProgressBar />
        <ScrollNavigator/>
      </div>
    
  </body>
</html>

    
    
    </>
  );
}
