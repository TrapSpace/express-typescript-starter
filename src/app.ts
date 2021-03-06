import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import ApiRoutes_V1 from "./api/v1/routes/index";

export class ExpressApp {
    app: express.Application;

    constructor() {}

    public start() {
        this.app = express();
        this.middelware();
        this.routes();
        return this.app;
    }

    private middelware() {
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private routes() {
        this.app.use("/v1", ApiRoutes_V1);
    }
}