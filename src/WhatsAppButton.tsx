import React from "react";

interface WhatsAppButtonProps {
  message: string; // Mensagem automática do WhatsApp
  phoneNumber: string; // Número de telefone no formato internacional (sem o "+")
  className?: string; // Classes adicionais para personalização
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  phoneNumber,
  className,
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-colors shadow-lg inline-flex items-center gap-2 ${className}`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Logo"
        className="w-5 h-5"
      />
      Entre em Contato
    </a>
  );
};

export default WhatsAppButton;
