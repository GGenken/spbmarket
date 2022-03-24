const express = require('express')
const router = express.Router()

const offerController = require('../../../controller/offer.controller');

router.post('/create', (req, res) => {
    const trader_id = req.session.userid;
    const item_id = req.query.item_id;
    const price = req.query.price;
    const in_stock = req.query.in_stock;

    offerController.createOffer(trader_id, item_id, price, in_stock);

    res.send('OK');
});

router.get('/get', async (req, res) => {
    const item_id = parseInt(req.query.item_id);
    const trader_id = parseInt(req.query.trader_id);

    const result = await offerController.getOffers(item_id, trader_id);

    res.json(result);
});

module.exports = router;
