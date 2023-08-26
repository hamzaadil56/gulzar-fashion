import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import { currentUser } from "@clerk/nextjs";
import Hero from "@/components/layout/Hero";
import Promotions from "@/components/layout/Promotions";
import Featured from "@/components/layout/Featured";
import NewsLetter from "@/components/layout/NewsLetter";
import Footer from "@/components/layout/Footer";

export default async function Home() {
  return (
    <main className="min-h-[100vh]">
      <div className="h-[100vh] flex flex-col">
        <Hero />
      </div>
      <Promotions />
      <Featured />
      <NewsLetter />
      <Footer />
    </main>
  );
}
