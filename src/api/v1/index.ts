import * as express from "express";
import BirdsRoutes from "./routes/birds";

class ApiRoutes {

    api: express.Router;
    constructor() {
        this.api = express.Router();
        this.loadRoutes();
    }

    private loadRoutes() {
        this.api.use("/birds", BirdsRoutes);
    }
}

export default new ApiRoutes().api;