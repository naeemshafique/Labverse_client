import HeroSection from "@/Components/home/HeroSection";
import HeroSection1 from "@/Components/home/HeroSection1";
import HeroSection2 from "@/Components/home/HeroSection2";
import HeroSection3 from "@/Components/home/HeroSection3";
import HeroSection4 from "@/Components/home/HeroSection4";
import HeroSection5 from "@/Components/home/HeroSection5";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src={'/images/topography.png'} layout="fill" objectFit="cover" alt="bg image" className="bg-repeat-y" />
     <HeroSection />
     <HeroSection1 />
     <HeroSection2 />
     <HeroSection3 />
     <HeroSection4 />
     <HeroSection5 />
    </main>
  );
}
