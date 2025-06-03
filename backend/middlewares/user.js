const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

function userAuthentication(req, res, next){
    const token = req.headers.token;

    if(!token){
        res.json({
            mssg: "token missing"
        })
    }

    try{
        const decoded = jwt.verify(token, JWT_USER_PASSWORD)
        req.userId = decoded.id
        console.log("the program went from user middleware of authentication")
        next();
    }
    catch(err){
        res.status(403).json({
            mssg: " you are not signed in"
        })
    }
}

module.exports = {
    userAuthentication: userAuthentication
}