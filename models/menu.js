import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema)

