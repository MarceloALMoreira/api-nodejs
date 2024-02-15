# Backend API Create user

## Como rodar

Clone o repositório e instale as dependências:

```bash
docker-compose up -d
npm install
.env.example .env # ajuste os valores de acordo com o seu ambiente
npm run dev
```

## Docker

Execute os comandos de `build` e `run`
ajustando as variáveis de ambiente de acordo com o seu ambiente, por exemplo:

```bash
docker build -t backend-api .
docker run -it --rm -p 5000:5000 -e PORT=5000 -e DATABASE_URL="postgresql://postgres:secret@host.docker.internal:5432/develop?schema=public" backend-api
```

## Dokcer não funciona ainda.
