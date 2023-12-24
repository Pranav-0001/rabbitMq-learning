import amqp from "amqplib";

var channel, connection;
export const connectQueue = async () => {
  console.log("connection done");

  try {
    connection = await amqp.connect("amqp://localhost:5672");
    channel = await connection.createChannel();

    await channel.assertQueue("test-queue");
  } catch (error) {
    console.log(error);
  }
};

export const sendData = async (data) => {
  try {
    // send data to queue
    await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));
  } catch (error) {
    console.log({ error });
  }
};
