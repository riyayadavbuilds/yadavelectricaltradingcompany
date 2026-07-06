import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { Brands } from "@/components/site/Brands";
import { Features } from "@/components/site/Features";
import { Services } from "@/components/site/Services";
import { Reviews } from "@/components/site/Reviews";
import { Installations } from "@/components/site/Installations";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Categories />
      <Brands />
      <About />
      <Features />
      <Services />
      <Installations />
      <Reviews />
      <Contact />
      <CtaBand />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
