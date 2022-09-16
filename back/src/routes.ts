import { Router } from "express";
import { GamesController } from "./controllers/games.controller";
import { AdsController } from "./controllers/ads.controller";

const routes = Router();

routes.get('/games', GamesController.get);
routes.get('/games/:id', GamesController.getById);
routes.post('/games', GamesController.post);
routes.put('/games', GamesController.put);
routes.delete('/games', GamesController.delete);

routes.get('/ads', AdsController.get);
routes.get('/ads/:id', AdsController.getById);
routes.post('/ads/game', AdsController.getAdsByGameName);
routes.post('/ads', AdsController.post);
routes.put('/ads', AdsController.put);
routes.delete('/ads', AdsController.delete);

export {routes};