"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" aria-label="ARN Soluções Energéticas, início"><Image src="/images/logo.png" alt="ARN Soluções Energéticas" width={600} height={417} priority className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-white/80 hover:text-white">{i.label}</a>
          ))}
          <Button href="#orcamento" size="sm">Solicitar orçamento</Button>
        </nav>
        <button className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="grid gap-1 border-t border-white/10 px-5 pb-4 md:hidden">
          {[...nav, { label: "Solicitar orçamento", href: "#orcamento" }].map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-3 text-white/90">{i.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
