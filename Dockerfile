# Usa a imagem do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos do projeto
COPY . .

# Compila o projeto React (se for necessário, ajuste o comando conforme sua configuração)
RUN npm run build

# Define o comando para iniciar o servidor
CMD ["npm", "run", "dev"]
