const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: { type: String , required: true},
  password: { type: String , required: true},
  description: String,
  image: { type: String, default: "https://i.pinimg.com/564x/16/99/2a/16992a4d9b7022026734f57fe0e33fbf.jpg"},
  myThoughts: [{type: mongoose.Types.ObjectId, ref:"Thought"}],
  favourites:[{type: mongoose.Types.ObjectId, ref:"Thought"}],
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;