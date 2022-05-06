import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    order: {
        type: Number
    }
})

export default mongoose.models.Category || mongoose.model("Category", CategorySchema)