import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return res.status(401).send('Unauthorized');
      
      req.user = decoded;
      next();
    });
  };

export default verifyToken;