import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cityStateZip: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: String,
        required: true,
    },
    total: Number,
    method: String,
    instructions: String,
    done: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)

