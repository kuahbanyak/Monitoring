import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({msg:"Token tidak ada"});
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({msg:"Token tidak valid"});
        req.email = decoded.email;
        next();
    }
    );
}