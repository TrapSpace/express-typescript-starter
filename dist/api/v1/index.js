"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const birds_1 = require("./routes/birds");
class ApiRoutes {
    constructor() {
        this.api = express.Router();
        this.loadRoutes();
    }
    loadRoutes() {
        this.api.use("/birds", birds_1.default);
    }
}
exports.default = new ApiRoutes().api;
//# sourceMappingURL=index.js.map