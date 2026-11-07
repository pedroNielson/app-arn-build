// GitHub Pages não tem otimizador de imagens: as imagens já são WebP otimizados em /public.
// Este loader só adiciona o basePath (ex.: /app-arn-build) quando o site fica em subpasta.
// O `?w=` existe apenas para o next/image reconhecer que o loader usa a largura.
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
