import * as express from "express";

class BirdsRoutes {

    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.middelware();
        this.routes();
    }

    private middelware() {
        // middleware that is specific to this router
        this.router.use(function timeLog (req, res, next) {
            console.log("Time: ", Date.now());
            next();
        });
    }

    private routes() {
        // define the home page route
        this.router.get("/", function (req, res) {
            res.send("Birds home page");
        });
        // define the about route
        this.router.get("/about", function (req, res) {
            res.send("About birds");
        });
    }
}

export default new BirdsRoutes().router;