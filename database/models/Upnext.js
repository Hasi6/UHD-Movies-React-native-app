const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    idbmRating:{
        type: Number,
        required: true
    },
    createDate:{
        type: Date,
        default: Date.now
    }
});

const Upnext = mongoose.model('Upnext', NewsSchema);
module.exports = Upnext;