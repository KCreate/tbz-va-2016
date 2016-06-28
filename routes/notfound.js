const express   = require('express');
const router    = express.Router();

router.use((req, res) => {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('notfound', {
            url: req.url
        });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({
            error: 'Not found'
        });
        return;
    }

    // Fallback to txt
    res.type('txt').send('Not found');
});

module.exports = router;
