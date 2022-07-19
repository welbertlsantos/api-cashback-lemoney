import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schemaUser = new Schema({
  id: ObjectId,
  email : {
    type: String,
    required : [true, 'o email é obrigatório.'],
    trim : true,
    unique: true
},
  password : {
      type: String,
      required : [true, 'a senha é obrigatória.'],
      trim : true,
  },
});

export default mongoose.model('User', schemaUser)