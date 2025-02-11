'use client';

import { usePageContent } from '@/app/context/PageContentContext';
import { useEffect } from 'react';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = usePageContent();

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>Nuestro Viaje de Amor</h2>,
    mensaje: <p>Este es el inicio de tu viaje al tesoro, una travesía llena de pistas que te llevarán a descubrir secretos escondidos.</p>,
    pista: <p>Todo comienza en un lugar que hemos convertido en nuestro espacio común, donde vivimos historias de humor, dramas y acción. 
      Un lugar donde vemos caer reinos y apoderarse de tronos, donde ser inteligente es lo nuevo sexy y donde los coreanos nos obligan a leer subtítulos para entender lo que dicen.
      Si buscas bien, en el corazón de esta habitación encontrarás la próxima pista que te llevará al siguiente destino.</p>,
  };
  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}