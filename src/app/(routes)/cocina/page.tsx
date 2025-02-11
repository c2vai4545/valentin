'use client';

import { useContext, useEffect } from 'react';
import { PageContentContext } from '@/app/context/PageContentContext';

export const dynamic = 'force-static';

export default function InicioPage() {
  const { setContent } = useContext(PageContentContext);

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>3. Cocina</h2>,
    mensaje: <p>Muy bien mi vida, llegaste a el lugar donde se cocinan nuestras emociones y también nuestros sueños. Aquí es donde nos nutrimos, tanto física como espiritualmente, donde nuestro amor se fortalece como los ingredientes que preparamos juntos. En nuestra primera acampada en San Juan, cuando estábamos peleados, comenzamos a cocinar a fuego lento esta relacion, ese fue el momento en que me di cuenta de lo que realmente necesitábamos para seguir creciendo: más amor, más comprensión. La lluvia no pudo apagar nuestro amor y nuestras ganas de enmendar lo nuestro, y en esos dos días mágicos, entre un Jagermeister con tónica y el ramen que te preparé con todo el corazón, las hamburguesas y la lluvia, supimos que todo cambiaría. Ese fue el punto de quiebre, el paso del pasado doloroso hacia el presente armonioso que estamos creando.</p>,
    pista: <p>Ahora, para continuar, busca un lugar donde la paz se encuentra con el descanso. Un sitio tan nuestro que nos ha permitido obtener la calma que tanto nos hacía falta durante tanto tiempo. El refugio que durante tanto tiempo nos falto y que ahora al fin de mucho esfuerzo tenemos. Debajo de nuestros pensamientos mas inconscientes se encuentra tu próximo destino.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}