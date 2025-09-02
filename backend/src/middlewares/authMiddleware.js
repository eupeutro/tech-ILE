import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) return res.status(401).json({ message: "Token ausente" });

  const token = auth.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { sub, adm, terreiroId, iat, exp }
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

export function requireAdm(req, res, next) {
  if (!req.user?.adm) return res.status(403).json({ message: "Acesso negado: apenas ADM" });
  next();
}
