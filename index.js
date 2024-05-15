import Express from "express";
import colors from "colors";
const app = Express();
app.use(Express.json());
const Port = 8080;

app.listen(Port, () => {
  console.log(` server workin on port ${Port} `.bgWhite.black);
});
