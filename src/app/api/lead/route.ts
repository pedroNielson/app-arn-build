import { NextResponse } from "next/server";

const required = ["nome", "telefone", "email", "tipo", "conta", "cidade"] as const;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || required.some((k) => typeof body[k] !== "string" || !body[k].trim()))
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });

  const lead = Object.fromEntries(required.map((k) => [k, String(body[k]).trim().slice(0, 200)]));
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) { console.log("[lead]", lead); return NextResponse.json({ ok: true }); }

  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
  return res.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Falha no envio" }, { status: 502 });
}
