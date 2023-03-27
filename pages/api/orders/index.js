import dbConnect from "../../../util/mongo";
import Order from "../../../models/order";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const order = req.body;
      const orderData = await Order.create(req.body);

      // EMAIL CONFIRMATION -------------
      const venmo = `<a href="https://account.venmo.com/u/familymealkitchenllc">Follow this link</a> to complete payment or search for <strong>@familymealkitchen</strong> on your Venmo app.`;
      const zelle = `To complete your payment using Zelle, enter <strong>chefjoe@familymealkitchen.com or 754-264-6268</strong> in the recipient field in your bank app.`;
      const customerMessage = `
                        <div>
                        <p>Thank you for placing your order at Family Meal Kitchen! If you have any questions about your order, please call or text us at 754-264-6268.</p>
                        <p>You chose to make a payment of <strong>$${order.total}.00</strong> with ${order.method}. ${order.method === "Venmo" ? venmo : order.method === "Zelle" ? zelle : null}</p>
                        <p><strong>Your delivery is confirmed for:</strong> ${order.deliveryDate} at ${order.deliveryTime}. In case we need to reach you, we'll call you on the phone number you provided.</p>
                        <p>Thanks again for letting us serve you!</p>
                        </div>
                        `;
      const adminMessage = `
                        <p>
                        <strong>Customer: </strong> ${order.customer}<br>
                        <strong>Email: </strong> ${order.email}<br>
                        <strong>Phone: </strong> ${order.phone}<br>
                        <strong>Address: </strong> ${order.address}, ${order.cityStateZip}<br>
                        <strong>Delivery Date: </strong> ${order.deliveryDate}<br>
                        <strong>Delivery Time: </strong> ${order.deliveryTime}<br>
                        <strong>Total: </strong> $${order.total}<br>
                        <strong>Payment Method: </strong> ${order.method}<br>
                        <strong>Instructions:</strong> ${order.instructions}</p>
                        `;

      const messages = [
        {
          to: "chefjoe@familymealkitchen.com",
          from: "FMK Admin <hello@familymealkitchen.com>",
          subject: `You have a new order from ${order.customer}`,
          html: adminMessage,
        },
        {
          to: order.email,
          from: "Family Meal Kitchen <hello@familymealkitchen.com>",
          subject: `Your Order Confirmation from Family Meal Kitchen`,
          html: customerMessage,
        },
      ];
      await mail.send(messages);
    // -------------

      console.log("FROM API: new order was created");
      res.status(201).json(orderData);
    } catch (err) {
      console.log("error creating new order on api");
      res.status(500).json(err);
    }
  }
};

export default handler;