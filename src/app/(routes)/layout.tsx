'use client';

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div id="titulo" className="col-span-5 row-span-1 bg-white rounded-lg shadow-lg p-4">
          {Array.isArray(children) ? children[0] : children}
        </div>

        <div id="foto_u_r" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4" />
        <div id="mensaje" className="col-span-3 row-span-2 bg-white rounded-lg shadow-lg p-4">
            {Array.isArray(children) ? children[1] : null}
        </div>
        <div id="foto_u_l" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4" />

        <div id="foto_l_r" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4" />
        <div id="pista" className="col-span-3 row-span-2 bg-white rounded-lg shadow-lg p-4" >
            {Array.isArray(children) ? children[2] : null}
        </div>
        <div id="foto_l_l" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4" />
      </div>
    </div>
  );
}