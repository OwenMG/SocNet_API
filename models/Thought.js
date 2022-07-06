const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        content: {
            type: String,
            maxlength: 500,
            minlength: 1,
            required: true,
        },
        reactions: [reactionSchema],
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

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Though', thoughtSchema);
module.exports = Thought