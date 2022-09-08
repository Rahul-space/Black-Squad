
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone:{type:Number , required:true, unique: true},
    profilePic: { type: String, defaut: "" },
    currentLoan: {type: Array,default:[]},
    loanHistory: {type: Array,default:[]},
    aadhar: { type:Number , required:true},
    rating:{ type:Number , default:1},
    accountBalance:{type:Number, required:true},



  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);