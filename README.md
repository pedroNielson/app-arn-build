# ARN Soluções Energéticas: site

Next.js 15 (App Router) + Tailwind v4 + componentes no estilo shadcn/ui.

    npm install && cp .env.example .env.local && npm run dev

- `src/lib/site.ts`: todo o conteúdo (serviços, projetos, contatos). Edite aqui, não nos componentes.
- `src/lib/solar.ts`: constantes da calculadora (tarifa, custo/kWp).
- `src/components/sections/`: uma seção por arquivo. `ui/`: primitivos reutilizáveis.
- `src/app/api/lead/route.ts`: recebe o formulário; defina `LEAD_WEBHOOK_URL` (ex.: Ploomes/CRM) no `.env.local`.
- Imagens otimizadas (WebP) em `public/images/`; `logo.png`, `src/app/icon.png` e `opengraph-image.jpg` vêm das artes da ARN.

## Deploy (GitHub Pages)
Site estático (`output: "export"`). Em `Settings > Pages`, escolha **Source: GitHub Actions**; cada push na `main` publica via `.github/workflows/deploy.yml`.
Commite o `package-lock.json` (o workflow usa `npm ci`). Para testar o build: `npm run build` (gera `out/`).
