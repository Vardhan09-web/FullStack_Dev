const {Schema,model} = require("mongoose");
  
  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    //   maxlength: 50
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone:{
       type: Number,
       unique: true,
       required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      required: true,
  },
    address:{
    type: String,
    required: false,
    },
  });
  
  const Users = model("users", UserSchema )
  
  module.exports = Users