import dbConnect from "../../../util/mongo.js"
import Order from "../../../models/order"

export default async function handler(req, res) {
    const { method, query: { id }, cookies } = req
    const token = cookies.token

    await dbConnect()

    if (method === "GET") {
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        } catch {
            console.log("Error getting order")
            res.status(500).json(err)
        }
    }
    if (method === "PUT") {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json("You are not authenticated!")
        }
        try {
            const orderToUpdate = await Order.findByIdAndUpdate(id, req.body, { new: true })
            res.status(201).json(orderToUpdate)
        } catch {
            console.log("Error editing order")
            res.status(500).json(err)
        }
    }
    if (method === "DELETE") {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json("You are not authenticated!")
        }
        try {
            await Order.findByIdAndDelete(id);
            res.status(200).json("The Order has been deleted!");
        } catch {
            console.log("Errog deleting order")
            res.status(500).json(err)
        }
    }
}