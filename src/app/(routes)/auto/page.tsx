'use client';

import { PageContentContext } from '../layout';
import { useContext, useEffect } from 'react';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>6. Auto</h2>,
    mensaje: <p>Mi amor, ¡lo lograste! Qué increíble lo hiciste. Este lugar, el auto, ha sido nuestro cómplice en muchos momentos. Nos ha permitido cumplir esos caprichos de viajar, aunque sean tramos cortos, pero siempre con ese tiempo de calidad en el campo o en la ruta que tanto nos gusta. Como este año, cuando fuimos a tomar mate afuera y terminamos viendo ballenas en la costa. El auto, aunque no siempre ha sido el mismo, siempre ha sido el que nos ha acompañado en nuestras pequeñas aventuras. Estás muy cerca del tesoro.</p>,
    pista: <p>Tu tesoro esta bajo el eco de las olas y la brisa del viento, donde el color del sol se encuentra con la tierra en calma, hay un lugar que guarda silencio, pero brilla al mirar. Sigue el camino de la costa, en busca de su secreto oculto.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}