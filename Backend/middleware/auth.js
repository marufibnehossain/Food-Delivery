import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
}



export default authMiddleware;