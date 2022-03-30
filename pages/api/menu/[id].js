import dbConnect from "../../../util/mongo"
import Menu from "../../../models/menu"

export default async function handler(req, res) {
    const { method, query: { id } } = req
    await dbConnect()

    if (method === "GET") {
        try {
            const menuItem = await Menu.findById(id)
            res.status(200).json(menuItem)
        } catch {
            console.log("Errog getting menu data")
            res.status(500).json(err)
        }
    }
    if (method === "PUT") {
        try {


        } catch (err) {
            console.log("")
            res.status(500).json(err)
        }
    }

    if (method === "DELETE") {
        try {

        } catch {
            console.log("")
            res.status(500).json(err)
        }
    }
}

