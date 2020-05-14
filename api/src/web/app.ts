import '../main';
import express from "express";
import { Routes } from "./routes";
import { Logger } from '../core/logger';

const expressWinston = require('express-winston');
const cors = require('cors');

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(expressWinston.logger(Logger.PARAMETERS));
    }
}

export default new App().app;
