import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            //Object ID type
            type: mongoose.Schema.Types.ObjectId,
            //refers to the User Model
            ref: "User",
            required: true,
        },
        receiverId: {
            //Object ID type
            type: mongoose.Schema.Types.ObjectId,
            //refers to the User Model
            ref: "User",
            required: true,
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;