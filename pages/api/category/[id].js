import dbConnect from "../../../util/mongo"
import Category from "../../../models/category"

export default async function handler(req, res) {
    const { method, query: { id }, cookies } = req
    const token = cookies.token
    await dbConnect()

    if (method === "GET") {
        try {
            const categoryItem = await Category.findById(id)
            res.status(200).json(categoryItem)
        } catch {
            console.log("Error getting category data")
            res.status(500).json(err)
        }
    }
    if (method === "PUT") {
        // if (!token || token !== process.env.TOKEN) {
        //     return res.status(401).json("You are not authenticated!")
        // }
        try {
            const categoryItem = await Category.findByIdAndUpdate(id, req.body, {
                new: true,
            })
            res.status(200).json(categoryItem)

        } catch (err) {
            console.log("Error Editing Category Item")
            res.status(500).json(err)
        }
    }

    if (method === "DELETE") {
        // if (!token || token !== process.env.TOKEN) {
        //     return res.status(401).json("You are not authenticated!")
        // }
        try {
            await Category.findByIdAndDelete(id);
            res.status(200).json("The Category has been deleted!");
        } catch {
            console.log("Error deleting Category Item")
            res.status(500).json(err)
        }
    }
}
