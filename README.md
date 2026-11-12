# Celebrar Convites Digitais — site

Site de uma página da conviteria digital **@celebrarconvitess**.

## Estrutura

- `public/index.html`: conteúdo (início, sobre, serviços, galeria, como funciona, contato)
- `public/assets/css/style.css`: estilos (cores e fontes no topo, em `:root`)
- `public/assets/js/main.js`: menu mobile, link do WhatsApp com mensagem, galeria ampliável
- `public/assets/img/`: logo e convites
- `wrangler.jsonc`: configuração da Cloudflare (publica só a pasta `public/`)

Para ver localmente, abra `public/index.html` no navegador.

## Publicação na Cloudflare

O projeto é publicado como Worker com arquivos estáticos. No painel da Cloudflare
(Workers & Pages → projeto → Settings → Build):

- **Build command:** deixe vazio
- **Deploy command:** `npx wrangler deploy`
- **Branch de produção:** o branch que contém este código

Domínios: `convitescelebrar.com.br` e `www.convitescelebrar.com.br` (configurados em
`routes` no `wrangler.jsonc`; a Cloudflare cria o DNS e o certificado automaticamente).
O endereço `site-celebrar-convites.gabrieldalmolin06.workers.dev` continua ativo.

> As imagens atuais foram recortadas de um print do Instagram e estão em baixa resolução.
> Substitua pelos arquivos originais mantendo os mesmos nomes em `public/assets/img/`.
