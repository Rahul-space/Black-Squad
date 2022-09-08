const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const verify = require("../verify");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    aadhar:req.body.aadhar,
    accountBalance:req.body.acountBalance
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login/:phone/:password", async (req, res) => {
  console.log(req.body.email)
  try {
    const user = await User.findOne({ phone: req.params.phone});

  user.password === req.params.password &&
  res.status(200).json(user);
    res.status(401).json("Un authorized");
  } catch (err) {
    console.log(req.body.phone)
    res.status(500).json(err);
  }
});

router.put("add/:id", async (req,res)=>{
    try{
      const updatedUser=await User.findByIdAndUpdate(req.params.id,{$push:{loanHistory:{amount:req.body.amount,
      intrest:req.body.amount*0.3,
      duration:req.body.duration}}})
      res.status(200).json(updatedUser)
    }catch(err){res.status(500).json(err)}
});








//UPDATE

router.put("/:id",  async (req, res) => {
    if (req.user.id === req.params.id) {
  
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can update only your account!");
    }
  });
  
  //DELETE
  router.delete("/:id", async (req, res) => {
    if (req.user.id === req.params.id && req.user.currentLoan==={}) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can delete only whe you repay all your loan");
    }
  });
  






module.exports = router;