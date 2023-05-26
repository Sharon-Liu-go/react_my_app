const jwt = require('jsonwebtoken');

const secretKey = 'I-am-secret-key';

module.exports = {
    generateToken: (user) => {
        const payload = {
            userId: user.name,
        };
        const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });
        return token;
    },
    decodedToken: (token) => {
        jwt.verify(token, secretKey, (err, decodedToken) => {
            if (err) {
                console.error('JWT verification failed:', err.message);
                return;
            }

            return decodedToken
        });
    }
}


