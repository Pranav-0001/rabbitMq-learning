import amqp from "amqplib";
var channel, connection;

export const connectQueue = async () => {
  try {
    connection = await amqp.connect("amqp://localhost:5672");
    channel = await connection.createChannel();

    await channel.assertQueue("test-queue");

    channel.consume("test-queue", (data) => {
      console.log(`${Buffer.from(data.content)}`);
      channel.ack(data);
    }); 
  } catch (error) {
    console.log({ error });
  }
};
