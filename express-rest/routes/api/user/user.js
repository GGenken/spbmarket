const express = require('express')
const router = express.Router()

const userController = require('../../../controller/user.controller');

router.post('/register', (req, res) => {
    userController.createUser(req.query.username, req.query.password);
    res.send('OK');
});

router.post('/login', async (req, res) => {
    const valid = await userController.checkCredentials(req.query.username, req.query.password)
    req.session.valid = valid;

    if (valid) {
        req.session.username = req.query.username;
        req.session.userid = await userController.getIdByUsername(req.query.username);
        res.send('OK');
    }
    else {  res.send('Error'); }
});

router.get('/getUsername', async (req, res) => {
    res.send(req.session.username);
});

router.get('/getId', async (req, res) => {
    res.send(req.session.userid.toString());
});

module.exports = router;
