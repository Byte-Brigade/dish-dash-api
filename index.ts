import express, { Express } from "express";
import dotenv from "dotenv";
import menuRouter from "./routes/menu";
import indexRouter from "./routes/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/", indexRouter);
app.use("/menu", menuRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
