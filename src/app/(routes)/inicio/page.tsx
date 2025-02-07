'use client';

import { PageContentContext } from '../layout';
import { useContext, useEffect } from 'react';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>Nuestro Viaje de Amor</h2>,
    mensaje: <p>Desde nuestro primer encuentro hasta hoy...</p>,
    pista: <p>Para encontrar tu siguiente pista...</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}