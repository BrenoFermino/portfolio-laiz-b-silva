import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "./projects.js";

const app = express();
const PORT = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json({ limit: "20kb" }));

app.get("/api/projects", (_req, res) => {
  res.json(projects);
});

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body ?? {};
  if (typeof name !== "string" || name.trim().length < 2)
    return res.status(400).json({ error: "Informe seu nome." });
  if (typeof email !== "string" || !emailRe.test(email))
    return res.status(400).json({ error: "Informe um e-mail válido." });
  if (typeof message !== "string" || message.trim().length < 10)
    return res.status(400).json({ error: "Escreva uma mensagem com pelo menos 10 caracteres." });

  // TODO: enviar por e-mail (Nodemailer, Resend, etc.). Por enquanto, apenas registra.
  console.log("Novo contato:", { name, email, message });
  res.json({ ok: true });
});

// Em produção, serve o build do React
const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, "../../client/dist");
app.use(express.static(dist));
app.get("*", (_req, res, next) => res.sendFile(path.join(dist, "index.html"), (e) => e && next()));

app.listen(PORT, () => console.log(`API em http://localhost:${PORT}`));
