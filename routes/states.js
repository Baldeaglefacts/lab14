let express = require('express')
let States = require('../models').States

let router = express.Router()

// fetch states
router.get('/states', function(req, res, next){
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
        .catch( err => next(err) )
})

// find a state based on its name
router.get('/state/:name', function(req, res, next){
    let stateName = req.params.name
    States.findOne({ where: { name: stateName } })
        .then(state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

// updates database when states are modified on page
router.patch('/state/:name', function(req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.visited

    States.update({ visited: stateVisited }, { where: { name: stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
        })
        .catch( err => next(err) )
})









module.exports = router
