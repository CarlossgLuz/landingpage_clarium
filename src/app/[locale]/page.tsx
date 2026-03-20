import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Demo } from "@/components/sections/Demo";
import { HowMade } from "@/components/sections/HowMade";
import { Tech } from "@/components/sections/Tech";
import { Support } from "@/components/sections/Support";
import { Author } from "@/components/sections/Author";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Problem />
        <Features />
        <Demo />
        <HowMade />
        <Tech />
        <Support />
        <Author />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
