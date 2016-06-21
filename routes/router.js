const express   = require('express');
const router    = express.Router({ strict: true });
const path      = require('path');
const fs        = require('fs');

// Main routes
router.use('/:section', (req, res, next) => {
    const pages = ['home', 'umfrage', 'vergleich', 'interview', 'ueberuns'];
    if (pages.indexOf(req.params.section) > -1) {
        res.render(req.params.section, {
            ['current_' + req.params.section]: true,
        });
    } else {
        next();
    }
});

// For the index route, render the home page
router.use(/\/$/, (req, res) => {
    res.render('home', {
        current_home: true,
    });
});

// 404 handler
router.use(require('./notfound.js'));

module.exports = router;
