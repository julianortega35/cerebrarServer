const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtsSchema = new Schema({
    automaticThoughts: { type: String , required: true},
    alternativeThoughts: { type: String , required: true},
    intensity: { type: Number , required: true},
    tasks: { type: String , required: true},
    category: {type: String, enum:["futuro", "trabajo", "salud", "dinero", "pareja","familia", "otra" ]},
    userId: {type: mongoose.Types.ObjectId, ref:"User"},

  }
);



const Thoughts = mongoose.model('Thoughts', thoughtsSchema);

module.exports = Thoughts;