let express = require('express')
let States = require('../models').States

let router = express.Router()

// fetches states
router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

// gets all information for one state/name like state/Minnesota
router.get('/state/:name', function(req, res, name) {
    let stateName = req.params.name
    States.findOne( {where: {name: stateName}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

// update a state to visited or not
// request to states/name
router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name // name
    let stateVisited = req.body.visited // sets true

    States.update( { visited: stateVisited }, { where: { name: stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok') // returns status code 200
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

module.exports = router