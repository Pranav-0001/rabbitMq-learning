import express from "express";
import { connectQueue } from "./helpers/rabbitMq.js";

const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());
connectQueue();

app.listen(PORT, () => console.log("Server running at port " + PORT));