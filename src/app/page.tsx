import Hero from "@/components/layout/Hero";
import Promotions from "@/components/layout/Promotions";
import Featured from "@/components/layout/Featured";
import NewsLetter from "@/components/layout/NewsLetter";

export default async function Home() {
  return (
    <main className="min-h-[100vh]">
      <div className="h-[100vh] flex flex-col">
        <Hero />
      </div>
      <Promotions />
      <Featured />
      <NewsLetter />
    </main>
  );
}
