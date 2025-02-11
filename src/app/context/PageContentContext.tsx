'use client';

import { createContext, ReactNode, useContext } from 'react';

// Definir el tipo para los elementos dinámicos
export interface PageContent {
  titulo: ReactNode | null;
  mensaje: ReactNode | null;
  pista: ReactNode | null;
}

// Definir el tipo para el contexto
interface PageContentContextType {
  content: PageContent;
  setContent: (content: PageContent) => void;
}

// Crear el contexto con un valor por defecto tipado
export const PageContentContext = createContext<PageContentContextType>({
  content: {
    titulo: null,
    mensaje: null,
    pista: null,
  },
  setContent: () => {}, // función vacía por defecto
});

// Hook personalizado para usar el contexto
export const usePageContent = () => {
  const context = useContext(PageContentContext);
  if (!context) {
    throw new Error('usePageContent debe ser usado dentro de un PageContentProvider');
  }
  return context;
}; 