import jwt from 'jsonwebtoken'


const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    // const authHeader = req.headers.authorization;
    // const headerToken = req.headers.token;
    // const token = headerToken || (authHeader && authHeader.split(' ')[1]);      // (credit load nahi ho rha tha to chatgpt ka help wala code tha ye)


    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            if (!req.body) req.body = {};
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again' })
        }

        next();

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export default userAuth