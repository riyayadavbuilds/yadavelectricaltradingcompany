import { MessageCircle } from "lucide-react";
import { waFloating } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={waFloating}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span className="pointer-events-none mr-3 hidden rounded-lg bg-[var(--navy)] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:inline-block">
        Chat on WhatsApp
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-transform hover:scale-110" style={{ backgroundColor: "#25D366" }}>
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={1.5} />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full" style={{ backgroundColor: "rgba(37,211,102,0.45)" }} />
      </span>
    </a>
  );
}