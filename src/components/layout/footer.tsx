import Image from "next/image";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <Image src="/images/logo.png" alt="ARN Soluções Energéticas" width={600} height={417} className="h-16 w-auto" />
          <p className="mt-2 text-sm text-white/60">{site.name}</p>
          <p className="mt-1 text-sm text-white/60">{site.address}</p>
        </div>
        <ul className="grid gap-2 text-sm">
          {nav.map((i) => <li key={i.href}><a className="text-white/70 hover:text-white" href={i.href}>{i.label}</a></li>)}
        </ul>
        <ul className="grid gap-2 text-sm text-white/70">
          <li><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a className="hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a className="hover:text-white" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-white/40">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
    </footer>
  );
}
