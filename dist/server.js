"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app = new app_1.ExpressApp().start();
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Example app listening on port" + port + "!");
});
//# sourceMappingURL=server.js.map