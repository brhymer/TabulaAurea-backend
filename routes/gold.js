const router = require('express').Router()
const request = require('request');

const index = (req, res) => {
    request('https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD', { json: true }, (err, resp, body) => {
    if (err) res.send('Error in gold index: ', err)

    res.status(200).json({ gold: resp.body[0].spreadProfilePrices[0].ask })
})
}

router.get('/', index)

module.exports = router