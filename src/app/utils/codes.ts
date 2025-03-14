export interface CodeRoute {
  code: string;
  route: string;
}

export const validCodes: CodeRoute[] = [
    // { code: "SER1E5L0VE", route: "/living" },
    { code: "pista1", route: "/living" },
    // { code: "B4TH2GTHR5", route: "/bano" },
    { code: "pista2", route: "/bano" },
    // { code: "P1ZZA2RAMN", route: "/cocina" },
    { code: "pista3", route: "/cocina" },
    // { code: "R00M4L0VE5", route: "/habitacion" },
    { code: "pista4", route: "/habitacion" },
    // { code: "C0DE4LIFE5", route: "/escritorio" },
    { code: "pista5", route: "/escritorio" },
    // { code: "ADV3NTUR3X", route: "/auto" },
    { code: "pista6", route: "/auto" },
    // { code: "TAMx100pre", route: "/meta" },
    { code: "pista7", route: "/meta" },
  // Agrega más códigos y rutas según necesites
];

export function validateCode(inputCode: string): CodeRoute | null {
  const foundCode = validCodes.find(
    (vc) => vc.code.toLowerCase() === inputCode.toLowerCase()
  );
  return foundCode || null;
} 
