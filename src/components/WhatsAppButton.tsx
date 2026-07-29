"use client";

import { site, whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/40 flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-floatSlow"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"
          fill="white"
        />
        <path
          d="M12 3.6a8.4 8.4 0 0 0-7.2 12.7l.2.4-1 3.5 3.6-1 .4.2A8.4 8.4 0 1 0 12 3.6Z"
          fill="#25D366"
        />
        <path
          d="M9.1 7.6c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.1-.1-.3-.2-.5-.3l-1.9-.9c-.3-.1-.5-.1-.6.1l-.7 1c-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9.1 7.6Z"
          fill="white"
        />
      </svg>
    </a>
  );
}
