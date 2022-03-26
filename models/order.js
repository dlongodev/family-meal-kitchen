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
    total: {
        type: Number,
        required: true
    },
    orderId: {
        type: Number,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true,
    },
    method: {
        type: Number,
        required: true
    }

}, { timestamps: true })

export default mongoose.model("Order", OrderSchema)

