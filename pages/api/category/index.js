import dbConnect from "../../../util/mongo"
import Category from "../../../models/category"

export default async function handler(req, res) {
    const { method, cookies } = req
    const token = cookies.token

    await dbConnect()

    if (method === "GET") {
        try {
            const categoryItems = await Category.find()
            res.status(200).json(categoryItems)
        } catch {
            console.log("Error getting category data")
            res.status(500).json(err)
        }
    }
    if (method === "POST") {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json("You are not authenticated!")
        }
        try {
            const categoryItem = await Category.create(req.body)
            console.log("category item created")
            res.status(201).json(categoryItem)
        } catch (err) {
            console.log("Error with POST method")
            res.status(500).json(err)
        }
    }
}

