"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class BirdsRoutes {
    constructor() {
        this.router = express.Router();
        this.middelware();
        this.routes();
    }
    middelware() {
        // middleware that is specific to this router
        this.router.use(function timeLog(req, res, next) {
            console.log("Time: ", Date.now());
            next();
        });
    }
    routes() {
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
exports.default = new BirdsRoutes().router;
//# sourceMappingURL=birds.js.map