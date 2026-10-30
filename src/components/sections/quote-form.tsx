"use client";
import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, SelectField } from "@/components/ui/field";

const perks = ["Análise técnica sem compromisso", "Visita técnica gratuita", "Proposta com retorno do investimento", "Financiamento facilitado disponível"];
// Site estático: o formulário envia direto para um serviço externo (FormSubmit por padrão).
const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "https://formsubmit.co/ajax/contato@arnenergia.com";
type Status = "idle" | "sending" | "done" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "Novo orçamento pelo site!", _template: "box", _captcha: "false" }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="orcamento" className="relative isolate overflow-hidden bg-navy-950 py-24">
      <Image src="/images/banner.webp" alt="" fill sizes="100vw" className="-z-20 scale-105 object-cover blur-[3px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-950/60" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="text-white">
          <h2 className="font-display text-3xl font-black md:text-5xl">Solicite seu orçamento agora</h2>
          <p className="mt-4 max-w-md text-lg text-white/90">Preencha o formulário e nossa equipe entra em contato em até 24 horas com uma proposta personalizada.</p>
          <ul className="mt-8 grid gap-3">
            {perks.map((p) => <li key={p} className="flex items-center gap-3"><Check className="size-5 rounded-full bg-brand p-1" aria-hidden />{p}</li>)}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl md:p-8">
          {status === "done" ? (
            <div role="status" className="py-10 text-center">
              <h3 className="font-display text-2xl font-black">Contato enviado!</h3>
              <p className="mt-2 text-slate-600">Em breve um consultor fala com você.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <h3 className="font-display text-xl font-black">Preencha seus dados</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome / Razão social" name="nome" required placeholder="Seu nome completo" />
                <Field label="Telefone / WhatsApp" name="telefone" type="tel" required placeholder="(62) 99999-9999" />
              </div>
              <Field label="E-mail" name="email" type="email" required placeholder="seu@email.com" />
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField label="Tipo de instalação" name="tipo" required defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>Residência urbana</option><option>Residência rural</option><option>Comércio</option><option>Indústria</option><option>Prefeitura</option>
                </SelectField>
                <SelectField label="Valor da conta de luz" name="conta" required defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>Até R$ 300</option><option>R$ 300 a R$ 800</option><option>R$ 800 a R$ 2.000</option><option>Acima de R$ 2.000</option>
                </SelectField>
              </div>
              <Field label="Cidade" name="cidade" required placeholder="Ex: Goiânia, Anápolis, Aparecida" />
              <Button type="submit" disabled={status === "sending"} size="lg">
                {status === "sending" ? "Enviando..." : "Solicitar orçamento gratuito"}
              </Button>
              {status === "error" && <p role="alert" className="text-sm text-red-600">Não foi possível enviar. Confira os dados e tente novamente.</p>}
              <p className="text-xs text-slate-500">Seus dados são confidenciais e não são compartilhados.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
