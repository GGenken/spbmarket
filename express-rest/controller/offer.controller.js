const db = require('../db');

class OfferController {
    async createOffer(trader_id, item_id, price, in_stock) {
        return await db.query('INSERT INTO offers.offers(trader_id, item_id, price, in_stock) VALUES ($1, $2, $3, $4)', [trader_id, item_id, price, in_stock]);
    }
    async getOffers(item_id = undefined, trader_id = undefined) {
        let result;
        if (item_id) {
            if (trader_id) {
                result = await db.query('SELECT * FROM offers.offers WHERE item_id = $1 AND trader_id = $2', [item_id, trader_id]);
            }
            else {
                result = await db.query('SELECT * FROM offers.offers WHERE item_id = $1', [item_id]);
            }
        }
        else if (trader_id) {
            result = await db.query('SELECT * FROM offers.offers WHERE trader_id = $1', [trader_id]);
        }
        else {
            throw SQLException;
        }
        return result['rows'];
    }
}

module.exports = new OfferController();
