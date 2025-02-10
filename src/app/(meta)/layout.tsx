'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import Carousel from '../components/Carousel';

// Definir el tipo para los elementos dinámicos
interface PageContent {
  titulo: React.ReactNode;
  mensaje: React.ReactNode;
  pista: React.ReactNode;
}

// Modificar la definición del contexto para incluir la función setter
export const PageContentContext = createContext<{
  content: PageContent;
  setContent: (content: PageContent) => void;
}>({
  content: {
    titulo: <div>Título predeterminado</div>,
    mensaje: <div>Mensaje predeterminado</div>,
    pista: <div>Pista predeterminada</div>,
  },
  setContent: () => {}, // función vacía por defecto
});

// Imágenes para los carruseles
const allImages = [
  '/imgs/IMG_3848.jpg',
  '/imgs/IMG_3849.jpg',
  '/imgs/IMG_4799.JPG',
  '/imgs/IMG_5629.JPG',
  '/imgs/IMG_5819.JPG',
  '/imgs/IMG_5829.JPG',
  '/imgs/IMG_1878.JPG',
  '/imgs/30B8CE3E-755C-434E-9ADD-71A92C6AFDF4.JPG',
  '/imgs/15f7b442-5b86-432e-8664-36ae999fdf69.JPG',
  '/imgs/FullSizeRender.jpg',
  '/imgs/IMG_0070.jpg',
  '/imgs/IMG_0155.jpg',
  '/imgs/IMG_2249.jpg',
  '/imgs/IMG_2307.jpg',
  '/imgs/IMG_2826.jpg',
  '/imgs/IMG_3498.jpg',
  '/imgs/IMG_3500.jpg',
  '/imgs/IMG_3836.jpg',
  '/imgs/IMG_3837.jpg',
  '/imgs/IMG_4241.jpg',
  '/imgs/IMG_4267.jpg',
  '/imgs/IMG_4271.jpg',
  '/imgs/IMG_4288.jpg',
  '/imgs/IMG_4298.jpg',
  '/imgs/IMG_4299.jpg',
  '/imgs/IMG_4341.jpg',
  '/imgs/IMG_4342.jpg',
  '/imgs/IMG_4678.jpg',
  '/imgs/IMG_4683.jpg',
  '/imgs/IMG_5479.jpg',
  '/imgs/IMG_5492.jpg',
  '/imgs/IMG_5519.jpg',
  '/imgs/IMG_5522.jpg',
  '/imgs/IMG_5543.jpg',
  '/imgs/IMG_5545.jpg',
  '/imgs/IMG_5624.jpg',
  '/imgs/IMG_5625.jpg',
  '/imgs/IMG_5649.jpg',
  '/imgs/IMG_5670.jpg',
  '/imgs/IMG_5671.jpg',
  '/imgs/IMG_5682.jpg',
  '/imgs/IMG_5693 2.jpg',
  '/imgs/IMG_5823.jpg',
  '/imgs/IMG_5825.jpg',
  '/imgs/IMG_5943.jpg',
  '/imgs/IMG_5945.jpg',
  '/imgs/IMG_5947.jpg',
  '/imgs/IMG_5949.jpg',
];

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSets, setImageSets] = useState<string[][]>([[], [], [], []]);
  const [pageContent, setPageContent] = useState<PageContent>({
    titulo: null,
    mensaje: null,
    pista: null,
  });

  // Cargar y mezclar imágenes
  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    const setSize = Math.floor(shuffled.length / 4);
    setImageSets([
      shuffled.slice(0, setSize),
      shuffled.slice(setSize, setSize * 2),
      shuffled.slice(setSize * 2, setSize * 3),
      shuffled.slice(setSize * 3),
    ]);
    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <PageContentContext.Provider value={{ content: pageContent, setContent: setPageContent }}>
      <div className="h-screen w-screen relative love-journey-bg">
        <main className="absolute inset-0 main-container">
          <div className="h-full grid grid-cols-5 grid-rows-5 gap-2 sm:gap-4 love-journey-grid">
            {/* --- Título (Dinámico) --- */}
            <div className="col-span-5 row-span-1 bg-white rounded-xl shadow-xl p-2 sm:p-4 flex items-center justify-center">
              <div className="w-full text-center">
                <PageContentConsumer contentKey="titulo" />
              </div>
            </div>

            {/* --- Carrusel 1 (Fijo) --- */}
            <div className="col-span-1 row-span-2 bg-white rounded-xl shadow-xl p-1 sm:p-2">
              <Carousel images={imageSets[0]} interval={6000} />
            </div>

            {/* --- Mensaje y Pista Unidos (Dinámico) --- */}
            <div className="col-span-3 row-span-4 bg-white rounded-xl shadow-xl p-2 sm:p-4 flex items-center justify-center love-journey-message">
              <div className="w-full text-center">
                <PageContentConsumer contentKey="mensaje" />
              </div>
            </div>

            {/* --- Carrusel 2 (Fijo) --- */}
            <div className="col-span-1 row-span-2 bg-white rounded-xl shadow-xl p-1 sm:p-2">
              <Carousel images={imageSets[1]} interval={7000} />
            </div>

            {/* --- Carrusel 3 (Fijo) --- */}
            <div className="col-span-1 row-span-2 bg-white rounded-xl shadow-xl p-1 sm:p-2">
              <Carousel images={imageSets[2]} interval={8000} />
            </div>

            {/* --- Carrusel 4 (Fijo) --- */}
            <div className="col-span-1 row-span-2 bg-white rounded-xl shadow-xl p-1 sm:p-2">
              <Carousel images={imageSets[3]} interval={5000} />
            </div>

            {children}
          </div>
        </main>
      </div>
    </PageContentContext.Provider>
  );
}

// Actualizar el PageContentConsumer
function PageContentConsumer({ contentKey }: { contentKey: keyof PageContent }) {
  const { content } = useContext(PageContentContext);
  return <>{content[contentKey]}</>;
}