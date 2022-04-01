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
            console.log("Error getting menu data")
            res.status(500).json(err)
        }
    }
    if (method === "PUT") {
        try {
            const menuItem = await Menu.findByIdAndUpdate(id, req.body, {
                new: true,
            })
            res.status(200).json(menuItem)

        } catch (err) {
            console.log("Error Editing Menu Item")
            res.status(500).json(err)
        }
    }

    if (method === "DELETE") {
        try {
            await Menu.findByIdAndDelete(id);
            res.status(200).json("The Menu has been deleted!");
        } catch {
            console.log("Error deleting Menu Item")
            res.status(500).json(err)
        }
    }
}

