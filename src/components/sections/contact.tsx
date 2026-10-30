import { Mail, MapPin, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15287.227644977347!2d-49.2583664!3d-16.6865431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55f218e46637c67%3A0xf7bf0cff8903b689!2zQVJOIFNvbHXDp8O1ZXMgRW5lcmfDqXRpY2Fz!5e0!3m2!1sen!2sbr!4v1686465868582!5m2!1sen!2sbr";

export function Contact() {
  const items = [
    { icon: MapPin, label: site.address, href: undefined },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: MessageCircle, label: "Chamar no WhatsApp", href: whatsappUrl() },
  ];
  return (
    <section id="contato" className="bg-navy-950 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">Fale com a gente</h2>
          <ul className="mt-8 grid gap-4">
            {items.map(({ icon: I, label, href }) => (
              <li key={label} className="flex items-center gap-3 rounded-xl border border-white/10 p-5 text-white/80">
                <I className="shrink-0 text-brand" aria-hidden />
                {href ? <a href={href} className="hover:text-white" target="_blank" rel="noreferrer">{label}</a> : label}
              </li>
            ))}
          </ul>
        </div>
        <iframe
          title="Localização da ARN Soluções Energéticas"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-80 w-full rounded-2xl border border-white/10 lg:h-full lg:min-h-80"
        />
      </div>
    </section>
  );
}
