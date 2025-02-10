'use client';

import { PageContentContext } from '../layout';
import { useContext, useEffect } from 'react';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>4. Habitación</h2>,
    mensaje: <p>Buen trabajo encontrando la pista, mi amor. Aquí, en este lugar, donde la cama suena mucho y es incómoda, sabemos que debe cambiarse. Pero no importa, porque esta es nuestra primera cama, y siempre quedará grabada a fuego en nuestra historia más hermosa. A pesar de todo, es un lugar donde nos encontramos, donde descansamos después de todo lo vivido.</p>,
    pista: <p>Pero para seguir con esta búsqueda, debes ir a un lugar donde me pierdo en mí mismo, un espacio donde no podría seguir adelante si no fuera por tus mensajes, que me recuerdan que debo comer, ir al baño, y salir del mundo en el que me pierdo. Busca allí, y lo encontrarás.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}