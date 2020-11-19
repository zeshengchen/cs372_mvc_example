// create a new express routes
const express = require('express'),
    router = express.Router()

// export reroutes
module.exports = router 

// define routes
router.get('/', (req, res) => {
    res.send('Hello, CS372!')
})

