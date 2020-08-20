const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otherUserATSchema = new Schema({
    authorId: {type: mongoose.Types.ObjectId, ref:"User"},
    otherUserAT: { type: String , required: true},
    thoughtId: {type: mongoose.Types.ObjectId, ref:"Thought"},
    suggestedAlternativeThought: [{type: mongoose.Types.ObjectId, ref:"Thought"}]

  }
);



const otherUserAT = mongoose.model('otherUserAT', otherUserATSchema);

module.exports = otherUserAT;