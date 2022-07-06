const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }]
    },
    {
        toJSON: {
            getters: true,
        },
    }

);
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;