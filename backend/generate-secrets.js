const crypto = require('crypto');

// Generate JWT Secret
const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log('JWT Secret:', jwtSecret);

// You can run this with: node generate-secrets.js