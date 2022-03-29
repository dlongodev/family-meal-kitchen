import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

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
            //find how many orders
            // increment order records in MongoDB to add
            // take the body and append OderID with new value
            const order = await Order.create(req.body);
            console.log("FROM API: new order was created")
            res.status(201).json(order);
        } catch (err) {
            console.log("error creating new order on api")
            res.status(500).json(err);
        }
    }
};

export default handler;