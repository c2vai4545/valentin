'use client';

import { useContext, useEffect } from 'react';
import { PageContentContext } from '@/app/context/PageContentContext';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>2. Baño</h2>,
    mensaje: <p>Mi amor, ¡hiciste un excelente trabajo encontrando la pista! Ahora, estas en un lugar que normalmente es privado para muchos, pero que para nosotros es testigo de momentos compartidos, nuestros y únicos. Me encantaría poder hacerlos mas únicos aun pero intentarlo sin poner en riesgo nuestra vida es imposible. Me encanta como nos ayudamos mutuamente, refregándonos las espaldas y haciéndonos reír con nuestras bromas, bueno en realidad yo rio con mis bromas… y por supuesto como te duchas con lava hirviendo recién salida del mismísimo infierno, tu tierra natal, mientras yo espero mi turno para poder ponerla en temperatura témpano de hielo, como tu corazón. Tantas veces que nos duchamos juntos, como una forma de estar más cerca, de vivir el día a día de una manera más intensa. Cada gota de agua simboliza un momento que compartimos.</p>,
    pista: <p>Ahora es hora de continuar. El siguiente paso te lleva a un lugar donde cocinamos nuestra relación. Aquí, no solo fortalecemos nuestros cuerpos, sino que también alimentamos nuestras proyecciones y sueños. Es un espacio donde las emociones se viven, no se guardan. Pero, en este lugar, lo que se guarda bien es lo que nos nutre. Aunque no sabes guardarlas, en este lugar siempre encontramos lo que necesitamos para seguir adelante. Busca donde los ingredientes se preparan y descubrirás lo que te guiará al siguiente destino.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}