'use client';

import { PageContentContext } from '../layout';
import { useContext, useEffect } from 'react';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>5. Escritorio</h2>,
    mensaje: <p>Bienvenida a mi mundo, bb hermosa mía. Aquí es donde siempre me hundo en las profundidades de mis pensamientos, programando, estudiando, pensando cositas como esta pequeña aventura al tesoro. Este es el lugar donde me encontrabas casi todas mis horas despierto cuando no tenía que ir a trabajar. Eran tiempos hermosos, pero sin tu recordatorio de que tenía que comer y que tenía que dormir, hubiera muerto aquí mismo. Gracias por recordarme la importancia de cuidarme a mí mismo, aunque esté ocupado, y gracias por cuidarme siempre.</p>,
    pista: <p>El siguiente paso te lleva a un lugar que transporta nuestras ilusiones, que nos facilita esos tiempos mágicos que vivimos en la naturaleza, abrazando árboles y caminando descalzos como unos hippies que se frotan jengibre en las patas. Busca en el lugar donde nuestras aventuras se hacen posibles, y en el que siempre estamos listos para el próximo destino.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}