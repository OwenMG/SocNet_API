const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            maxlength: 200,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

module.exports = reactionSchema;