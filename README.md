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

## No ar

https://evandrodemuth.github.io/danielPerrinoTenis/ (GitHub Pages, branch `main`, pasta `/`).

Se o site ganhar domínio próprio, atualize os endereços completos em `og:url`,
`og:image`, `canonical` e nos dados estruturados do `index.html`.

## Publicar

Como é um site estático, dá para publicar de graça no **GitHub Pages**
(Settings → Pages → branch `main`, pasta `/`), na **Netlify** ou na **Vercel**
(é só arrastar a pasta ou conectar o repositório).
