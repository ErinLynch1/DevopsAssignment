const mongoose = require("mongoose");
const { Schema } = mongoose;

const usernameSchema = new Schema(
    {
        name: { type: String, required: [true, 'Text is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Username", usernameSchema);