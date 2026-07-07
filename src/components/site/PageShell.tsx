import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">{children}</div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}