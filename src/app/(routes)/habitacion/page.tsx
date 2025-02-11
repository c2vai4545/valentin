'use client';

import { usePageContent } from '@/app/context/PageContentContext';
import { useEffect } from 'react';

export const dynamic = 'force-static';

export default function HabitacionPage() {
  const { setContent } = usePageContent();

  // 1. Definir los elementos dinámicos
  const contenido = {
    titulo: <h2>4. Habitación</h2>,
    mensaje: <p>¡Excelente trabajo, mi amor! Has encontrado el camino a nuestro santuario. Este espacio es más que solo una habitación; es nuestro refugio del mundo, donde podemos ser completamente nosotros mismos. Aquí hemos compartido risas, sueños, y momentos de pura felicidad. Es donde nos acurrucamos juntos en las noches frías, donde compartimos nuestros pensamientos más profundos, y donde nos refugiamos cuando el mundo exterior se vuelve demasiado ruidoso.</p>,
    pista: <p>Tu próximo destino te lleva a un lugar donde la creatividad fluye y la tecnología cobra vida. Es donde las ideas se transforman en realidad y donde las horas pasan volando mientras trabajo en proyectos como este. Busca donde la magia digital sucede, donde mi iMac es testigo de largas jornadas de programación y donde vos siempre me recordás que debo descansar. La siguiente pista está escondida donde los pensamientos se convierten en código.</p>,
  };

  // 2. Actualizar el contexto al cargar la página
  useEffect(() => {
    setContent(contenido);
  }, [setContent]);

  // 3. La página no renderiza contenido directamente
  return null;
}