var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const name = req.query.name;
    const resp = {
        message: `Hello ${name}!`
    };

    res.json(resp);
});

module.exports = router;
