const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port = process.env.PORT || "6900";
const MONGODBURLKOTO="mongodb+srv://patrick:helloworld@cluster0.t2zxu.mongodb.net/test";
const User = require("./model/user");
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(MONGODBURLKOTO)
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

app.use(cors({
    origin:'*'
}));

app.post("/signup",async(req,res)=>{

  try{
    const {username,password}= req.body
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({username, password:hashedPassword})
    res.status(200).json({
      message : 'ok',
      newUser
    })

  }catch(e){
    res.status(500)
  }
})

app.post("/signin",async(req,res)=>{

  try{
    const {username,password}= req.body
    
   const userData = await User.findOne({ username })

   if(!userData) return res.status(404).json({ mensahe : 'usr dosnt exist'})
   
   if(!(await bcrypt.compare(password, userData.password))) return res.status(403).json({mensahe : "wrong password"})
   
    res.status(200).json({
      message : 'ok',
      userData
      
    })
  }catch(e){
    res.status(500)
  }
})

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });