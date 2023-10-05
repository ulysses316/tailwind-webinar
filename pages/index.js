import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import ThemeSwitch from "@/components/ToggleTheme";
import Card from "@/components/Card";

export default function Home() {
   return (
      <>
         <ThemeSwitch />
         <div className="flex h-[96vh] items-center justify-center">
            <Card />
         </div>
      </>
   );
}
