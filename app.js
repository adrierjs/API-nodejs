import express from 'express';
import cors from 'cors';
import routes from './routers/users.js'

// Aqui configura uma vez e não mexe mais, só se adicionar um novo arquivo em routers

class App {
  constructor(){
    // Quando intância o objeto, isso tudo já vai ter sido implementando.
    this.server = express();
    this.server.use(cors());
    this.server.use(express.json());

    this.routes();
  }

  routes(){
    this.server.use(routes)
  }
};

export default new App().server;