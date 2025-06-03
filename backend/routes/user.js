const {Router} = require('express');
const userRoutes = Router();
const z = require('zod')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { userModel } = require('../db');
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

userRoutes.post('/signup', async function(req, res){

    const requiredBody = z.object({
        email: z.string().min(3).max(50).email(),
        password: z.string().min(8).max(15),
        firstname: z.string().min(3).max(20),
        lastname: z.string().min(3).max(20)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if(!parsedDataWithSuccess.success){
        res.json({
            mssg: "Incorrect Format"
        })
    }

    const { email , password, firstname, lastname} = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname: lastname
    })

    res.json({
        mssg: "singup successfull"
    })
})

userRoutes.post('/signin', async function(req,res){
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email: email
    })

    if(!user){
        res.status(403).json({
            mssg: "User not found"
        })
    }

    const decryptedPassword = await bcrypt.compare(password, user.password);

    if(decryptedPassword){
        const token = jwt.sign({
            id: user.id
        }, JWT_USER_PASSWORD)
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            mssg: "Incorrect credentials"
        })
    }
})

module.exports = {
    userRoutes : userRoutes
}