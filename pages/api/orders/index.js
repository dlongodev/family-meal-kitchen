import dbConnect from "../../../util/mongo";
import Order from "../../../models/order";
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

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
            const order = req.body
            const orderData = await Order.create(req.body);

            //EMAIL CONFIRMATION -------------
            const message = `
            <p>
            <strong>customer: </strong> ${order.customer}<br><br>
            <strong>email: </strong> ${order.email}<br><br>
            <strong>phone: </strong> ${order.phone}<br><br>
            <strong>address: </strong> ${order.address}<br><br>
            <strong>cityStateZip: </strong> ${order.cityStateZip}<br><br>
            <strong>deliveryDate: </strong> ${order.deliveryDate}<br><br>
            <strong>deliveryTime: </strong> ${order.deliveryTime}<br><br>
            <strong>total: </strong> $${order.total}<br><br>
            <strong>method: </strong> ${order.method}<br><br>
            <strong>instructions:</strong> ${order.instructions}</p>
            `
            const data = {
                to: "chefjoe@familymealkitchen.com",
                from: "hello@familymealkitchen.com",
                subject: `You have a new order from ${order.customer}`,
                html: message
            }
            // await mail.send(data)
            // --------------------------------

            console.log("FROM API: new order was created")
            res.status(201).json(orderData);
        } catch (err) {
            console.log("error creating new order on api")
            res.status(500).json(err);
        }
    }
};

export default handler;