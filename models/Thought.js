const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        content: {
            type: String,
            maxlength: 500,
            minlength: 1,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Thought = model('Though', thoughtSchema);
module.exports = Thought