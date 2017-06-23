import * as express from "express";
import * as bodyParser from "body-parser";
import ApiRoutes_V1 from "./api/v1/index";

export class ExpressApp {
    app: express.Application;

    constructor() {}

    public start() {
        this.app = express();
        this.middelware();
        this.routes();
        return this.app;
    }

    private middelware() {}

    private routes() {
        this.app.use("/v1", ApiRoutes_V1);
    }
}