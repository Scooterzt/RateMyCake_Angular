const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RateMyCake', {useNewUrlParser: true});

const ComentSchema = new mongoose.Schema({
    comment: {type: String},
    rating: {type: Number},
    },{timestamps: true});

const CakeSchema = new mongoose.Schema({
    bakerName: {type: String, required: true, minlength: 2},
    imageURL: {type: String, required: true},
    comments: [ComentSchema],
    },{timestamps: true});
const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;