import dbConnect from "../../../util/mongo"
import Order from "../../../models/order"

export default async function handler(req, res) {
    const { method, query: { id } } = req
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
        try {
            const orderToUpdate = await Order.findByIdAndUpdate(id, req.body, { new: true })
            res.status(201).json(orderToUpdate)
        } catch {
            console.log("Error editing order")
            res.status(500).json(err)
        }
    }
    // if (method === "DELETE") {
    //     try {

    //     } catch {
    //         console.log("Errog deleting order")
    //         res.status(500).json(err)
    //     }
    // }
}