import dbConnect from "../../../util/mongo"
import Menu from "../../../models/menu"

export default async function handler(req, res) {
    const { method } = req
    await dbConnect()

    if (method === "GET") {
        try {
            const menuItems = await Menu.find()
            res.status(200).json(menuItems)
        } catch {
            console.log("Errog getting menu data")
            res.status(500).json(err)
        }
    }
    if (method === "POST") {
        try {
            const menuItem = await Menu.create(req.body)
            console.log("menu item created")
            res.status(201).json(menuItem)
        } catch (err) {
            console.log("Error with POST method")
            res.status(500).json(err)
        }
    }
}

