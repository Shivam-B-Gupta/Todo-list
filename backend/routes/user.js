const {Router} = require('express');
const userRoutes = Router();
const z = require('zod')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { userModel } = require('../db');
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

userRoutes.post('/signup', async function(req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(8).max(15),
    firstname: z.string().min(3).max(20),
    lastname: z.string().min(3).max(20),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    console.log("❌ Zod validation failed:", parsedDataWithSuccess.error);
    res.status(400).json({ mssg: "Incorrect Format" });
    return;
  }

  // ✅ Correct way to extract validated data
  const { email, password, firstname, lastname } = parsedDataWithSuccess.data;

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = await userModel.create({
    email,
    password: hashedPassword,
    firstname,
    lastname,
  });

  console.log("🟢 New user created:", newUser);

  return res.json({
    firstname: newUser.firstname,
    mssg: "Signup successful",
  });
});

userRoutes.post('/signin', async function(req,res){
    const {email, password} = req.body;
    

    const user = await userModel.findOne({
        email: email
    })
    console.log("user found: ", user)

    if(!user){
       return res.status(403).json({
            mssg: "User not found"
        })
    }

    const decryptedPassword = await bcrypt.compare(password, user.password);

    if(decryptedPassword){
        const token = jwt.sign({
            id: user.id
        }, JWT_USER_PASSWORD)
        res.json({
            token: token,
            firstname: user.firstname
        })
    }
    else{
        return res.status(403).json({
            mssg: "Incorrect credentials"
        })
    }
})

module.exports = {
    userRoutes : userRoutes
}