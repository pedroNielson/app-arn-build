import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Municipalities } from "@/components/sections/municipalities";
import { Projects } from "@/components/sections/projects";
import { QuoteForm } from "@/components/sections/quote-form";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Municipalities />
        <Projects />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
