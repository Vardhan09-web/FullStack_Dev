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
    phoneNumber:{
       type: Number,
       unique: true,
       required: true,
    },
    password:{
        type: String,
        required: true,
    },
    address:{
    type: String,
    required: false,
    },
  });
  
  const Users = model("users", UserSchema )
  
  module.exports = Users