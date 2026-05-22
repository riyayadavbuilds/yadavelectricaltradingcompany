import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { Brands } from "@/components/site/Brands";
import { Reviews } from "@/components/site/Reviews";
import { Features } from "@/components/site/Features";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Loader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Brands />
      <Features />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
