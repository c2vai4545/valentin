export interface CodeRoute {
  code: string;
  route: string;
}

export const validCodes: CodeRoute[] = [
    { code: "SER1E5L0VE", route: "/living" },
    { code: "B4TH2GTHR5", route: "/bano" },
    { code: "P1ZZA2RAMN", route: "/cocina" },
    { code: "R00M4L0VE5", route: "/habitacion" },
    { code: "C0DE4LIFE5", route: "/escritorio" },
    { code: "ADV3NTUR3X", route: "/auto" },
    { code: "TAMx100pre", route: "/meta" },
  // Agrega más códigos y rutas según necesites
];

export function validateCode(inputCode: string): CodeRoute | null {
  const foundCode = validCodes.find(
    (vc) => vc.code.toLowerCase() === inputCode.toLowerCase()
  );
  return foundCode || null;
} 