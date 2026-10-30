import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg hover:scale-105 transition-transform">
      <MessageCircle />
    </a>
  );
}
