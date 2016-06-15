const express   = require('express');
const router    = express.Router({ strict: true });
const path      = require('path');

router.use('/umfrage', (req, res) => {
    res.render('umfrage');
});

router.use(/\/$/, (req, res) => {
    res.render('home');
});

// 404 handler
router.use(require('./notfound.js'));

module.exports = router;
