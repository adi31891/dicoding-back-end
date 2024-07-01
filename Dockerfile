FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV MODEL_URL='https://storage.googleapis.com/ml_model_buck/model.json'

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
