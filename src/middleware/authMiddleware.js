import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret = process.env.JWT_SECRET;
function authMiddleware (req, res, next) {
    const token = req.headers['authorization']

    if(!token) {
        return res.status(401).json({message: "No token proived"});
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Invalid token"});
        }
        req.userId = decoded.id;
        next()

    })
}

export default authMiddleware;