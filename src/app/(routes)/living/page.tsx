'use client';

import { useContext, useEffect } from 'react';
import { PageContentContext } from '@/app/context/PageContentContext';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>1. Living Room</h2>,
    mensaje: <p>Eso!! Estas agarrando la idea, mi sol y mis estrellas, has encontrado la pista en el lugar donde tantas veces hemos reído, vivido dramas y, por supuesto, disfrutado de nuestras series favoritas. Es aquí donde compartimos historias de imperios caídos, reinos conquistados y personajes que se enfrentan a todo tipo de desafíos. Cómo nos quedamos atrapados en Game of Thrones viendo quién merece el trono o adivinando quién mataría a quién, mientras que con The Big Bang Theory, nos reímos de las bromas de Sheldon y las locuras de Howard. Con La Casa del Dragón, nuestras predicciones sobre los Targarien nos mantienen en vilo. Este lugar se ha convertido en nuestro refugio después de un largo día, un espacio donde no solo vemos series, sino donde construimos recuerdos y nos desconectamos del mundo.</p>,
    pista: <p>Ahora, tu siguiente camino te lleva a un lugar más íntimo. Es un sitio al que la gente normalmente va sola, pero nosotros, inseparables como siempre, lo compartimos en muchas ocasiones. Es aquí donde hemos creado recuerdos juntos, y lo que normalmente es privado, para nosotros es un momento de cercanía. Así que busca bien, lo siguiente está esperando en lo más alto de este espacio tan nuestro.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}