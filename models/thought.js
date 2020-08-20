const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    automaticThought: { type: String , required: true},
    intensity: { type: Number , required: true},
    alternativeThought: { type: String , required: true},
    task: { type: String , required: true},
    category: {type: String, enum:["futuro", "trabajo", "salud", "dinero", "pareja","familia", "otra" ], required: true},
    userId: {type: mongoose.Types.ObjectId, ref:"User"},
    suggestedAlternativeThought: [{type: mongoose.Types.ObjectId, ref:"otherUserAT"}]


  }
);



const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;