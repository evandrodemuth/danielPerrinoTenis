# Perrino Tênis — site do Daniel Perrino

Site estático (HTML, CSS e JavaScript puros, sem build) para o treinador de tênis Daniel Perrino.

## Seções

- **Início**: chamada principal e botão para agendar a aula experimental
- **Sobre**: apresentação do Daniel e os pilares do trabalho (técnica, tática, físico/mental)
- **Aulas**: particular, dupla/grupo, infantil e competição
- **Método**: avaliação → plano → treino → jogo
- **Instagram**: link para [@perrinotenis](https://www.instagram.com/perrinotenis/)
- **Dúvidas**: perguntas frequentes
- **Contato**: formulário que monta a mensagem e abre o WhatsApp

## Ver localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## O que falta preencher

Procure por `EDITAR` nos arquivos.

| O quê | Onde |
| --- | --- |
| Número de WhatsApp (ex.: `5511999998888`) | `script.js`, `WHATSAPP_NUMBER` |
| Link do LinkedIn (o item fica oculto enquanto estiver vazio) | `script.js`, `LINKEDIN_URL` |
| Foto do Daniel, retrato ~900×1100 (sem ela aparece o monograma "DP") | `assets/daniel.jpg` |
| Texto do "Sobre": formação, anos de experiência, clubes, conquistas | `index.html`, seção `#sobre` |
| Local das aulas | `index.html`, FAQ "Onde acontecem as aulas?" |
| Imagem de compartilhamento 1200×630 | `assets/og-image.jpg` + descomentar a meta `og:image` |

## Publicar

Como é um site estático, dá para publicar de graça no **GitHub Pages**
(Settings → Pages → branch `main`, pasta `/`), na **Netlify** ou na **Vercel**
(é só arrastar a pasta ou conectar o repositório).
