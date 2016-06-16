const express   = require('express');
const router    = express.Router({ strict: true });
const path      = require('path');

router.use('/umfrage', (req, res) => {
    res.render('umfrage', {
        current_umfrage: true,
    });
});

router.use('/vergleich', (req, res) => {
    res.render('vergleich', {
        current_vergleich: true,
    });
});

router.use('/interview', (req, res) => {
    res.render('interview', {
        current_interview: true,
    });
});

router.use('/ueberuns', (req, res) => {
    res.render('ueberuns', {
        current_ueberuns: true,
    });
});

router.use(/\/$/, (req, res) => {
    res.render('home', {
        current_home: true,
    });
});

// Catch all errors that might happen while rendering
router.use((err, req, res, next) => {
    if (err) {
        console.warn('Trying to render non-existing view');
        next();
    }
});

// 404 handler
router.use(require('./notfound.js'));

module.exports = router;
