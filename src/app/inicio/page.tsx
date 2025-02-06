export default function InicioPage() {
  return (
    <>
      <div id="titulo" className="col-span-5 bg-white rounded-lg shadow-lg p-4 text-center flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Nuestro Destino Juntos</h2>
      </div>

      <div id="mensaje" className="col-span-3 row-span-2 col-start-2 row-start-2 bg-white rounded-lg shadow-lg p-4 text-center flex items-center justify-center">
        <p className="text-lg text-gray-700">
          Cada espacio que compartimos es un testimonio de nuestro amor.
          Este recorrido por nuestros lugares especiales me recuerda por qué
          cada día me enamoro más de ti.
        </p>
      </div>

      <div id="pista" className="col-span-3 row-span-2 col-start-2 row-start-4 bg-white rounded-lg shadow-lg p-4 text-center flex items-center justify-center">
        <p className="text-xl text-red-500 font-semibold">
          ¡Feliz San Valentín, mi amor!
        </p>
      </div>
    </>
  );
}