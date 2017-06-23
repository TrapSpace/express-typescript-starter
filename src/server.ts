import { ExpressApp } from "./app";

const app = new ExpressApp().start();
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("Example app listening on port" + port + "!");
});
