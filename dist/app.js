"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./api/v1/index");
class ExpressApp {
    constructor() { }
    start() {
        this.app = express();
        this.middelware();
        this.routes();
        return this.app;
    }
    middelware() { }
    routes() {
        this.app.use("/v1", index_1.default);
    }
}
exports.ExpressApp = ExpressApp;
//# sourceMappingURL=app.js.map