const db = require('../db');
const bcrypt = require('bcrypt');

class UserController {
    async createUser(username, password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return await db.query('INSERT INTO users.users(username, password) VALUES($1, $2)', [username, hash]);
    }
    async getIdByUsername(username) {
        const response = await db.query('SELECT id FROM users.users WHERE users.username = $1 LIMIT 1', [username]);
        return response.rows[0]['id'];
    }
    async checkCredentials(username, password) {
        const result = await db.query('SELECT password FROM users.users WHERE users.username = $1 LIMIT 1', [username]);
        const hash = result.rows[0]['password'];
        const valid = await bcrypt.compare(password, hash);
        return valid;
    }
}

module.exports = new UserController();
