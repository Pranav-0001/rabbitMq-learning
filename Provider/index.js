import express from "express";
import { connectQueue, sendData } from "./helpers/rabbitMq.js";

const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());
connectQueue();
app.use("/send-msg", (req, res) => {
  // data to be sent
  const data = {
    title: "Six of Crows",
    author: "Leigh Burdugo",
  };
  sendData(data);
  console.log("A message is sent to queue");
  res.send("Message Sent");
});

app.listen(PORT, () => console.log("Server running at port " + PORT));
