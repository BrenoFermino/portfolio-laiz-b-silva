# Portfolio Laiz B. Silva

React + TypeScript (Vite) no front, Node + Express + TypeScript na API.

## Rodar
```
npm install
npm run dev      # site em http://localhost:5173, API em :3001
npm run build && npm start   # produção: tudo em http://localhost:3001
```

## Publicar (Render)
1. Suba o código para o GitHub.
2. Em [render.com](https://render.com): **New → Blueprint** (usa o `render.yaml`) ou **Web Service** apontando para o repositório.
3. Build: `npm install --include=dev && npm run build` · Start: `npm start`
4. Depois do deploy, o site fica em `https://seu-servico.onrender.com`.


## Personalizar
- Foto: `client/public/images/profilePicLaiz.jpeg` (constante `PHOTO` em `client/src/App.tsx`).
- Marcas (carrossel contínuo): edite o array `BRANDS` no topo de `client/src/App.tsx` (nome e, opcional, `logo`).
- Projetos: `server/src/projects.ts` (título, resumo, atuação, resultados, `image`).
  Coloque as imagens em `client/public/images/` e use `image: "/images/arquivo.jpg"`.
- Contatos e links: constantes no topo de `client/src/App.tsx`.
- Formulário: `server/src/index.ts` (ligar a Nodemailer/Resend no TODO).
- Cores e fontes: variáveis no topo de `client/src/styles.css`.
