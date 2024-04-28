const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

// const productSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     fechadevencimiento:{
//         type: Date,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     }
// });

module.exports = mongoose.model('User', userSchema);