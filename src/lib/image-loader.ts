// GitHub Pages não tem otimizador de imagens: as imagens já são WebP otimizados em /public.
// Este loader só adiciona o basePath (ex.: /arn-new) quando o site fica em subpasta.
export default function imageLoader({ src }: { src: string }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
