// Configuração das imagens do projeto
export const IMAGES = {
  // Logos
  LOGO_MAIN: '/images/logo/ICO-gtec-corrimaos.ico',
  LOGO_PNG: '/images/logo/icon-gtec-corrimaos.png',
  LOGO_WHITE: '/images/logo/logo-white.png',
  LOGO_BLACK: '/images/logo/logo-black.png',
  
  // Ícones
  ICON_PDF: '/images/icons/pdf-icon.png',
  ICON_DOWNLOAD: '/images/icons/download-icon.png',
  ICON_FORM: '/images/icons/form-icon.png',
  
  // Imagens para PDF
  PDF_HEADER: '/images/pdf/header-bg.png',
  PDF_FOOTER: '/images/pdf/footer-bg.png',
} as const;

// Tipos para TypeScript
export type ImageKey = keyof typeof IMAGES;
export type ImagePath = typeof IMAGES[ImageKey];

// Função helper para obter caminho da imagem
export const getImagePath = (key: ImageKey): string => {
  return IMAGES[key];
};
