const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: String,
  password: String,
  description: String,
  image: { type: String ,default: "https://ibalz.com/wp-content/uploads/2019/10/default-profile.png"},
  myThoughts: [{type: mongoose.Types.ObjectId, ref:"thought"}],
  favourites:[{type: mongoose.Types.ObjectId, ref:"thought"}],
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;