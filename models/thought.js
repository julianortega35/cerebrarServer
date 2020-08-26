const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    automaticThought: { type: String , required: true},
    intensity: { type: Number , required: true},
    alternativeThought: { type: String , required: true},
    task: { type: String , required: true},
    category: {type: String, enum:["Todas las categorías", "Futuro", "Trabajo", "Salud", "Dinero", "Pareja","Familia", "Otra" ], required: true},
    userId: {type: mongoose.Types.ObjectId, ref:"User"},
    suggestedAlternativeThought: [{type: mongoose.Types.ObjectId, ref:"otherUserAT"}]


  }
);



const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;